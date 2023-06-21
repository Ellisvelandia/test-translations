import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { UseTranslations } from "./components/UseTranslations";

export async function HomeMetadata(){
  const t = await getTranslations('homepage')
  return {
    title: t('title')
  }
}

export default function Home() {
  const t =  useTranslations('homepage')

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="p-5 text-center mt-14">
        <p className="py-2">{t("welcome-message")}</p>
        <p className="py-2">{t('topic')}</p>
      </div>
      <div className="pt-8 text-center font-bold text-2xl">
        <UseTranslations translate={t('client-side-component')}/>
      </div>
    </main>
  );
}
