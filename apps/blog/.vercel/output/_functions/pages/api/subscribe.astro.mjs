import { Resend } from 'resend';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const resend = new Resend(undefined                              );
const AUDIENCE_ID = undefined                                  ;
const POST = async ({ request }) => {
  try {
    const { email } = await request.json();
    if (!email || !email.includes("@")) {
      return new Response(JSON.stringify({ error: "유효한 이메일을 입력해주세요" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const { data, error } = await resend.contacts.create({
      email,
      audienceId: AUDIENCE_ID
    });
    if (error) {
      if (error.message?.includes("already exists")) {
        return new Response(JSON.stringify({ error: "이미 구독 중인 이메일입니다" }), {
          status: 400,
          headers: { "Content-Type": "application/json" }
        });
      }
      throw error;
    }
    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return new Response(JSON.stringify({ error: "구독 처리 중 오류가 발생했습니다" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
