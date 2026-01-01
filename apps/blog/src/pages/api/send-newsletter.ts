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

    if (slug) {
      const posts = await getCollection('posts');
      const post = posts.find(p => p.slug === slug);
      if (post) {
        postTitle = post.data.title;
        postExcerpt = post.data.excerpt || '';
        postUrl = `https://kyun2da.dev/posts/${slug}`;
      }
    }

    // 이메일 발송
    const emailPromises = subscribers.map(subscriber =>
      resend.emails.send({
        from: 'Kyun2da Blog <onboarding@resend.dev>',
        to: subscriber.email,
        subject: `[Kyun2da Blog] ${postTitle}`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
            <div style="background-color: white; border-radius: 12px; padding: 32px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
              <h1 style="font-size: 24px; font-weight: bold; margin-bottom: 16px; color: #111827;">
                ${postTitle}
              </h1>
              ${postExcerpt ? `<p style="color: #6b7280; margin-bottom: 24px; line-height: 1.6;">${postExcerpt}</p>` : ''}
              <a href="${postUrl}" style="display: inline-block; background-color: #111827; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 500;">
                글 읽으러 가기
              </a>
            </div>
            <p style="text-align: center; color: #9ca3af; font-size: 12px; margin-top: 24px;">
              이 메일은 kyun2da.dev 뉴스레터 구독자에게 발송되었습니다.<br>
              <a href="https://kyun2da.dev" style="color: #9ca3af;">구독 취소</a>
            </p>
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
