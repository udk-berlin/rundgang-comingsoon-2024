import Image from 'next/image';
import LocaleSwitcher from './localeSwitcher';
import { getMessages } from '@/config';

export default async function Comingsoon({ locale }: { locale: string }) {
  const t = await getMessages(locale);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LocaleSwitcher locale={locale} />
      <div>{t.date}</div>
      <div>{t.maintext}</div>
      <div className="relative h-full w-full content-around overflow-hidden text-center">
        <Image
          src="/writing.png"
          width={1207}
          height={587}
          alt="Hand writing"
          className="m-auto object-contain dark:invert"
        />
      </div>
      <div>
        <a href={t.informationlink}>{t.information}</a>
      </div>
      <div>
        <a href={t.oldlink}>{t.old}</a>
      </div>
      <div>
        <a href={t.contactlink}>{t.contact}</a>
      </div>
      <div>
        <a href={t.imprintlink}>{t.imprint}</a>
      </div>
    </main>
  );
}
