import { useTranslations } from "next-intl";
import NavbarClient from "./NavbarClient";

const Navbar = () => {
    const t = useTranslations("Navbar");

    const labels = {
        about: t("about"),
        projects: t("projects"),
        services: t("services"),
        contact: t("contact"),
    };

    return <NavbarClient labels={labels} />;
};

export default Navbar;
