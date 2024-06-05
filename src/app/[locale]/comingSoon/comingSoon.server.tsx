import ComingSoonHandWriting from '@/app/comingSoon/handWriting.server';
import { ReactNode } from 'react';
import ComingSoonInfo from '@/app/comingSoon/info.server';
import ComingSoonTitle from '@/app/comingSoon/title.server';
import { getMessages } from '@/config';

export type ComingSoonProps = {
  locale: string;
};

export default async function ComingSoon({ locale }: ComingSoonProps) {
  const t = await getMessages(locale);
  return (
    <ComingSoonContainer>
      <ComingSoonInfo t={t} />
      <ComingSoonHandWriting />
      <ComingSoonTitle t={t} />
    </ComingSoonContainer>
  );
}

function ComingSoonContainer({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-content max-h-content mx-[2rem] grid h-content grid-rows-coming-soon-sm sm:grid-rows-coming-soon-md">
      {children}
    </div>
  );
}
