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
    <html lang={locale}>
      <body
        className={`${jungka.className} ${jungka.variable} ${noto.variable} h-full-screen min-h-full-screen max-h-screen overflow-hidden`}
      >
        <Header locale={locale} />
        <main>{children}</main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
