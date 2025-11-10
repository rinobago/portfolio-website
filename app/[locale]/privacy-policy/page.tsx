import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "Privacy policy explaining how personal data is collected, used and protected on rinobago.com.",
};

export default async function PrivacyPolicyPage() {
    const t = await getTranslations("Privacy");

    return (
        <>
            <Navbar />
            <main className="mx-auto max-w-4xl px-4 py-12">
                <h1 className="mb-6 text-[3.125rem] font-bold text-center">{t("title")}</h1>

                <p className="mb-4 text-sm text-muted text-center">{t("lastUpdated")}</p>

                <p className="mb-4 whitespace-pre-line text-center">{t("intro")}</p>

                <section className="mt-6">
                    <h2 className="mb-3 text-xl font-semibold">{t("controllerTitle")}</h2>
                    <p className="mb-4 whitespace-pre-line">{t("controllerText")}</p>
                </section>

                <section className="mt-6">
                    <h2 className="mb-3 text-xl font-semibold">{t("dataTitle")}</h2>
                    <p className="mb-4">{t("dataText")}</p>
                </section>

                <section className="mt-6">
                    <h2 className="mb-3 text-xl font-semibold">{t("technicalTitle")}</h2>
                    <p className="mb-4">{t("technicalText")}</p>
                </section>

                <section className="mt-6">
                    <h2 className="mb-3 text-xl font-semibold">{t("sharingTitle")}</h2>
                    <p className="mb-4">{t("sharingText")}</p>
                </section>

                <section className="mt-6">
                    <h2 className="mb-3 text-xl font-semibold">{t("retentionTitle")}</h2>
                    <p className="mb-4">{t("retentionText")}</p>
                </section>

                <section className="mt-6">
                    <h2 className="mb-3 text-xl font-semibold">{t("rightsTitle")}</h2>
                    <p className="mb-4">{t("rightsText")}</p>
                </section>

                <section className="mt-6">
                    <h2 className="mb-3 text-xl font-semibold">{t("cookiesTitle")}</h2>
                    <p className="mb-4">{t("cookiesText")}</p>
                </section>

                <section className="mt-6">
                    <h2 className="mb-3 text-xl font-semibold">{t("changesTitle")}</h2>
                    <p className="mb-4">{t("changesText")}</p>
                </section>

                <section className="mt-6">
                    <h2 className="mb-3 text-xl font-semibold">{t("contactTitle")}</h2>
                    <p className="mb-4">{t("contactText")}</p>
                </section>

                <p className="mt-8 text-sm text-neutral-500">{t("disclaimer")}</p>
            </main>
            <Footer />
        </>
    );
}
