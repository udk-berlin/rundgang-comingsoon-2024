import { getMessages } from '@/config';

export default async function ComingSoonInfo({ locale }: { locale: string }) {
  const t = await getMessages(locale);
  return (
    <div className="h-[8rem] flex flex-col items-center justify-center text-center">
      <p>{t.text}</p>
      <p>&rarr; <a className="hover:underline" href={t.generalInformation.href}>{t.generalInformation.label}</a></p>
      <p>&rarr; <a className="hover:underline" href={t.previous.href}>{t.previous.label}</a></p>
    </div>
  );
}
