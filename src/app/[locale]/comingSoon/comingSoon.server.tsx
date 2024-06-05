import ComingSoonHandWriting from '@/app/comingSoon/handWriting.server';
import { ReactNode } from 'react';
import ComingSoonInfo from '@/app/comingSoon/info.server';
import ComingSoonTitle from '@/app/comingSoon/title.server';

export type ComingSoonProps = {
  locale: string;
};

export default async function ComingSoon({ locale }: ComingSoonProps) {
  return (
    <ComingSoonContainer>
      <ComingSoonInfo locale={locale} />
      <ComingSoonHandWriting />
      <ComingSoonTitle locale={locale} />
    </ComingSoonContainer>
  );
}

function ComingSoonContainer({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-content max-h-content grid-rows-coming-soon-sm sm:grid-rows-coming-soon-md mx-[2rem] grid h-content">
      {children}
    </div>
  );
}
