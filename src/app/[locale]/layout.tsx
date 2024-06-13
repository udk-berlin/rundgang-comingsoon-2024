import { noto, jungka } from '../fonts/fonts';
import { locales, getMessages } from '@/config';
import { ReactNode } from 'react';
import Header from '@/app/header';
import Footer from '@/app/footer';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type RootLayoutProps = {
  children: ReactNode;
  modal: ReactNode;
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getMessages(locale);
  return {
    title: t.meta.title,
    description: t.meta.description,
  };
}
export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  return (
    <html lang={locale} className="bg-primary">
      <body
        className={`${jungka.className} ${jungka.variable} ${noto.variable} radius-md h-[100dvh] max-h-[100dvh] min-h-[100dvh] overflow-hidden rounded border-sm`}
      >
        <Header locale={locale} />
        {children}
        <Footer locale={locale} />
      </body>
    </html>
  );
}
