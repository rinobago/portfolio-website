import { sendInquiryEmails } from "../../../lib/email";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, company, phone, message, locale, company_website } = body;

        // Honeypot check – if bot filled this, silently "succeed"
        if (company_website && company_website.trim().length > 0) {
            return new Response(JSON.stringify({ ok: true }), { status: 200 });
        }

        if (!name || !email || !message) {
            return new Response(JSON.stringify({ error: "Missing required fields." }), {
                status: 400,
            });
        }

        await sendInquiryEmails({ name, email, company, phone, message, locale });

        return new Response(JSON.stringify({ ok: true }), { status: 200 });
    } catch (err) {
        console.error("Contact form error:", err);
        return new Response(JSON.stringify({ error: "Failed to send email." }), { status: 500 });
    }
}
