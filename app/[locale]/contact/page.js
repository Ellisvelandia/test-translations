import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function Contactmetadata() {
  const t = await getTranslations("contact");

  return {
    title: t("tab-title-about")
  };
}

export default function Contact() {
  const t = useTranslations("contact");

  return <p className="mt-10 text-center">{t("title")}</p>;
};
