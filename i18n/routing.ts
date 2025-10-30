import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
    locales: ["en", "hr"],

    defaultLocale: "en",
    localePrefix: "never",
});
