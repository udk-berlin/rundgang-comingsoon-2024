import ComingSoonHandWriting from '@/app/comingSoon/handWriting.server';
import ComingSoonInfo from '@/app/comingSoon/info.server';
import { ReactNode } from 'react';

export default async function ComingSoon({ locale }: { locale: string }) {
  return (
    <ComingSoonContainer>
      <ComingSoonHandWriting />
      <ComingSoonInfo locale={locale} />
    </ComingSoonContainer>
  );
}

function ComingSoonContainer({ children }: { children: ReactNode }) {
  return (
    <div className="mx-[2rem] flex h-[calc(100vh-8rem-5rem)] min-h-[calc(100vh-8rem-5rem)] flex-col items-center justify-center">
      {children}
    </div>
  );
}
