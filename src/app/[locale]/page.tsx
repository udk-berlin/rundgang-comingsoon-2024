import Comingsoon from './comingsoon.server';

export type LandingPageProps = {
  params: { locale: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default function LandingPage({ params: { locale } }: LandingPageProps) {
  return <Comingsoon locale={locale} />;
}
