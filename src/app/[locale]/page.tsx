import ComingSoon from './comingSoon/comingSoon.server';

export type LandingPageProps = {
  params: { locale: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default function LandingPage({ params: { locale } }: LandingPageProps) {
  return <ComingSoon locale={locale} />;
}
