import { noto, jungka } from '../fonts/fonts';
import { locales, getMessages } from '@/config';
import { ReactNode } from 'react';

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
    title: t.title,
    description: t.description,
  };
}
export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  return (
    <html lang={locale}>
      <body
        className={`${jungka.className} ${jungka.variable} ${noto.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
