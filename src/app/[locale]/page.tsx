import ComingSoon from './comingSoon/comingSoon.server';

export type ComingSoonPageProps = {
  params: { locale: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default function ComingSoonPage({
  params: { locale },
}: ComingSoonPageProps) {
  return <ComingSoon locale={locale} />;
}
