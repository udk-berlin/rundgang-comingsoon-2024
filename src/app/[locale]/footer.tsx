import { getMessages } from '@/config';

export default async function Footer({ locale }: { locale: string }) {
  const t = await getMessages(locale);
  return (
    <footer className="mx-[2rem] h-[5rem] flex items-center justify-between">
      <div>
        <a href={t.contact.href}>{t.contact.label}</a>
      </div>
      <div>
        <a href={t.imprint.href}>{t.imprint.label}</a>
      </div>
    </footer>
  );
}
