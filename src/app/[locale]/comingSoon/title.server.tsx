import { ReactNode } from 'react';
import { ResponsiveH1 } from '@/components/html/h1';
import { ResponsiveH2 } from '@/components/html/h2';
import { ComingSoonProps } from '@/app/comingSoon/comingSoon.server';
import { getMessages } from '@/config';
import { ResponsiveBr } from '@/components/html/br';

export default async function ComingSoonTitle({ locale }: ComingSoonProps) {
  const t = await getMessages(locale);

  return (
    <ComingSoonInfoTitleContainer>
      <ResponsiveH1 className="text-end font-medium" textSize="xl">
        {t.title}
      </ResponsiveH1>
      <div>
        <ResponsiveBr textSize="xl" />
        <ResponsiveBr className="xxs:hidden" textSize="xl" />
        <ResponsiveH2 textSize="xl">{t.date}</ResponsiveH2>
      </div>
    </ComingSoonInfoTitleContainer>
  );
}

function ComingSoonInfoTitleContainer({ children }: { children: ReactNode }) {
  return <div className="flex justify-center">{children}</div>;
}
