import { getMessages } from '@/config';

export default async function ComingSoonInfo({ locale }: { locale: string }) {
  const t = await getMessages(locale);
  return (
    <div className="absolute bottom-gutter-lg flex h-[8rem] flex-col items-center justify-center text-center">
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
