import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";


export async function Aboutmetadata()  {
  const t = await getTranslations("about");

return{  title: t('tab-title-about'),
}
};

export default function About() {
  const t =  useTranslations('about')

  return (
    <p className="mt-10 text-center ">{t('title')}</p>
  )
}
