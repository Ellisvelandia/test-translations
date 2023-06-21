import { useTranslations } from "next-intl";
import Link from "next-intl/link";
import Image from "next/image";
import { usa, portugal, spain } from "/public";

export const Navbar = () => {
  const t = useTranslations("navbar");
  return (
    <header className="bg-slate-400 font-bold">
      <nav className="p-5">

        <div className="flex justify-end">
          <Link href="/" locale="en" className="ml-6">
            <Image src={usa} alt="Usa flag" width={20} height={20} />
          </Link>
          <Link href="/" locale="es" className="ml-6">
            <Image src={spain} alt="España flag" width={20} height={20} />
          </Link>
          <Link href="/" locale="pt" className="ml-6">
            <Image src={portugal} alt="portugal flag" width={20} height={20} />
          </Link>
        </div>

        <div className="flex justify-start uppercase">
        
          <div className="mr-4">
            <Link href={`/`}>{t("home")}</Link>
          </div>
          <div className="mr-4">
            <Link href={`/about`}>{t("about")}</Link>
          </div>

          <div className="mr-4">
            <Link href={`/contact`}>{t("contact")}</Link>
          </div>
          
        </div>
      </nav>
    </header>
  );
};
