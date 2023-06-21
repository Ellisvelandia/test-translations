import { useTranslations } from 'next-intl'
import React from 'react'

export const Footer = () => {
  const t = useTranslations('footer');

  return (
    <p className="bg-slate-400 fixed bottom-0 w-full uppercase font-bold py-10 text-center">{t('description')}</p>
  )
}
