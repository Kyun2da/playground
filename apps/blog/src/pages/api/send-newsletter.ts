import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { getCollection } from 'astro:content';

export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY);
const AUDIENCE_ID = import.meta.env.RESEND_AUDIENCE_ID;
const ADMIN_SECRET = import.meta.env.NEWSLETTER_ADMIN_SECRET;

export const POST: APIRoute = async ({ request }) => {
  try {
    // 인증 확인
    const { secret, slug } = await request.json();

    if (!ADMIN_SECRET || secret !== ADMIN_SECRET) {
      return new Response(JSON.stringify({ error: '인증 실패' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // 구독자 목록 가져오기
    const { data: audienceData, error: audienceError } = await resend.contacts.list({
      audienceId: AUDIENCE_ID,
    });

    if (audienceError) {
      throw audienceError;
    }

    const subscribers = audienceData?.data?.filter(contact => !contact.unsubscribed) || [];

    if (subscribers.length === 0) {
      return new Response(JSON.stringify({ message: '구독자가 없습니다' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // 포스트 정보 가져오기
    let postTitle = '새 글이 올라왔습니다';
    let postExcerpt = '';
    let postUrl = 'https://kyun2da.dev';
    let coverImage = '';
    let categories: string[] = [];
    let readingTime = 0;
    let postDate = '';

    if (slug) {
      const posts = await getCollection('posts');
      const post = posts.find(p => p.slug === slug);
      if (post) {
        postTitle = post.data.title;
        postExcerpt = post.data.excerpt || '';
        postUrl = `https://kyun2da.dev/posts/${slug}`;
        coverImage = post.data.coverImage || '';
        categories = post.data.categories || [];
        readingTime = post.data.time || 0;
        const date = new Date(post.data.date);
        postDate = date.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' });
      }
    }

    // 이메일 발송
    const emailPromises = subscribers.map(subscriber =>
      resend.emails.send({
        from: 'Kyun2da Blog <onboarding@resend.dev>',
        to: subscriber.email,
        subject: `${postTitle} — Kyun2da Blog`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="margin: 0; padding: 0; background-color: #f3f4f6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f3f4f6; padding: 40px 20px;">
              <tr>
                <td align="center">
                  <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 560px;">
                    <!-- Header -->
                    <tr>
                      <td style="padding-bottom: 32px; text-align: center;">
                        <a href="https://kyun2da.dev" style="text-decoration: none;">
                          <span style="font-size: 24px; font-weight: 700; color: #111827; letter-spacing: -0.5px;">Kyun2da Blog</span>
                        </a>
                      </td>
                    </tr>

                    <!-- Main Card -->
                    <tr>
                      <td>
                        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);">
                          ${coverImage ? `
                          <!-- Cover Image -->
                          <tr>
                            <td style="padding: 24px 24px 0 24px; text-align: center;">
                              <img src="https://kyun2da.dev${coverImage}" alt="${postTitle}" style="max-width: 200px; height: auto; border-radius: 12px;" />
                            </td>
                          </tr>
                          ` : ''}

                          <!-- Content -->
                          <tr>
                            <td style="padding: 24px 32px 32px 32px;">
                              <!-- Categories -->
                              ${categories.length > 0 ? `
                              <p style="margin: 0 0 12px 0;">
                                ${categories.map(cat => `<span style="display: inline-block; background-color: #f3f4f6; color: #6b7280; font-size: 12px; font-weight: 500; padding: 4px 10px; border-radius: 9999px; margin-right: 6px;">${cat}</span>`).join('')}
                              </p>
                              ` : ''}

                              <!-- Title -->
                              <h1 style="margin: 0 0 12px 0; font-size: 24px; font-weight: 700; color: #111827; line-height: 1.3;">
                                ${postTitle}
                              </h1>

                              <!-- Meta -->
                              <p style="margin: 0 0 20px 0; font-size: 14px; color: #9ca3af;">
                                ${postDate}${readingTime ? ` · ${readingTime}분` : ''}
                              </p>

                              <!-- Excerpt -->
                              ${postExcerpt ? `
                              <p style="margin: 0 0 28px 0; font-size: 16px; color: #4b5563; line-height: 1.7;">
                                ${postExcerpt}
                              </p>
                              ` : ''}

                              <!-- CTA Button -->
                              <a href="${postUrl}" style="display: inline-block; background-color: #111827; color: #ffffff; font-size: 15px; font-weight: 600; text-decoration: none; padding: 14px 28px; border-radius: 10px;">
                                글 읽으러 가기 →
                              </a>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                      <td style="padding-top: 32px; text-align: center;">
                        <p style="margin: 0 0 8px 0; font-size: 13px; color: #9ca3af;">
                          이 메일은 Kyun2da Blog 뉴스레터 구독자에게 발송되었습니다.
                        </p>
                        <p style="margin: 0; font-size: 13px;">
                          <a href="https://kyun2da.dev" style="color: #6b7280; text-decoration: none;">블로그 방문</a>
                          <span style="color: #d1d5db; margin: 0 8px;">|</span>
                          <a href="https://kyun2da.dev" style="color: #6b7280; text-decoration: none;">구독 취소</a>
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
          </html>
        `,
      })
    );

    const results = await Promise.allSettled(emailPromises);
    const successCount = results.filter(r => r.status === 'fulfilled').length;
    const failCount = results.filter(r => r.status === 'rejected').length;

    return new Response(JSON.stringify({
      success: true,
      message: `${successCount}명에게 발송 완료, ${failCount}명 실패`,
      total: subscribers.length,
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Newsletter send error:', error);
    return new Response(JSON.stringify({ error: '뉴스레터 발송 중 오류가 발생했습니다' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
