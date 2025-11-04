import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

type InquiryPayload = {
    name: string;
    email: string;
    company?: string;
    phone?: string;
    message: string;
    locale?: "en" | "hr";
};

const MY_CONTACT = process.env.CONTACT_TO_FROM!;

export async function sendInquiryEmails(data: InquiryPayload) {
    const { name, email, company, phone, message, locale } = data;

    const hrMail = {
        subject: "Hvala Vam na upitu 👋",
        text: `Poštovani/a ${name},

Hvala Vam što ste mi se obratili s Vašom idejom za web-stranicu. Primio sam Vašu poruku i pažljivo ću je proučiti.

Uskoro ću Vam se javiti s povratnim informacijama.

Srdačan pozdrav,
Rino`,
    };
    const enMail = {
        subject: "Thanks for your inquiry 👋",
        text: `Hi ${name},

Thanks for reaching out about your website idea. I've received your message and will review it carefully.

I'll get back to you soon with feedback.

Best regards,
Rino`,
    };

    type EmailTemplate = {
        subject: string;
        text: string;
    };

    const clientEmailMessage: EmailTemplate = {
        subject: locale === "hr" ? hrMail.subject : enMail.subject,
        text: locale === "hr" ? hrMail.text : enMail.text,
    };

    await transporter.sendMail({
        from: `"Rino Bago" <${MY_CONTACT}>`,
        to: MY_CONTACT,
        subject: `New portfolio inquiry from ${name}`,
        replyTo: email,
        text: [`Name: ${name}`, `Email: ${email}`, company && `Company: ${company}`, phone && `Phone: ${phone}`, `Message:\n\n${message}`].filter(Boolean).join("\n"),
    });

    await transporter.sendMail({
        from: `"Rino Bago" <${MY_CONTACT}>`,
        to: email,
        subject: clientEmailMessage.subject,
        text: clientEmailMessage.text,
    });
}
