import { getMessages } from '@/config';

export default async function ComingSoonInfo({ locale }: { locale: string }) {
  const t = await getMessages(locale);
  return (
    <div className="flex flex-col items-center justify-center pt-[2rem] text-center xs:pt-[0rem]">
      <p>{t.text}</p>
      <p>
        &rarr;{' '}
        <a
          target="_blank"
          className="hover:underline"
          href={t.generalInformation.href}
        >
          {t.generalInformation.label}
        </a>
      </p>
      <p>
        &rarr;{' '}
        <a target="_blank" className="hover:underline" href={t.previous.href}>
          {t.previous.label}
        </a>
      </p>
    </div>
  );
}
