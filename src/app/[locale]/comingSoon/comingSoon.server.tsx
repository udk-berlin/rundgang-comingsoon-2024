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
    <div className="h-content min-h-content max-h-content relative mx-[2rem] flex flex-col items-center justify-between py-[4rem]">
      {children}
    </div>
  );
}
