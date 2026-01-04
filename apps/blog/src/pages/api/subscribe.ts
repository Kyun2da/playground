import type { APIRoute } from 'astro';

import { Resend } from 'resend';

export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY);
const AUDIENCE_ID = import.meta.env.RESEND_AUDIENCE_ID;

export const POST: APIRoute = async ({ request }) => {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return new Response(JSON.stringify({ error: '유효한 이메일을 입력해주세요' }), {
        headers: { 'Content-Type': 'application/json' },
        status: 400,
      });
    }

    // Add contact to Resend audience
    const { data, error } = await resend.contacts.create({
      audienceId: AUDIENCE_ID,
      email,
    });

    if (error) {
      // Check if already subscribed
      if (error.message?.includes('already exists')) {
        return new Response(JSON.stringify({ error: '이미 구독 중인 이메일입니다' }), {
          headers: { 'Content-Type': 'application/json' },
          status: 400,
        });
      }
      throw error;
    }

    return new Response(JSON.stringify({ data, success: true }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return new Response(JSON.stringify({ error: '구독 처리 중 오류가 발생했습니다' }), {
      headers: { 'Content-Type': 'application/json' },
      status: 500,
    });
  }
};
