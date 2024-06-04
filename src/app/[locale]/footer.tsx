import { getMessages } from '@/config';

export default async function Footer({ locale }: { locale: string }) {
  const t = await getMessages(locale);
  return (
    <footer className="h-footer mx-[2rem] flex items-center justify-between">
      <div>
        <a target="_blank" href={t.contact.href}>
          {t.contact.label}
        </a>
      </div>
      <div>
        <a target="_blank" href={t.imprint.href}>
          {t.imprint.label}
        </a>
      </div>
    </footer>
  );
}
