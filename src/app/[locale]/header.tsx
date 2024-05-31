import LocaleSwitcher from '@/components/localeSwitcher';
import { getMessages } from '@/config';

export default async function Header({ locale }: { locale: string }) {
  const t = await getMessages(locale);
  return (
    <header className="mx-[2rem] h-[8rem] flex justify-between items-center">
      <div>
        <h1 className="text-lg">{t.title}</h1>
        <h2 className="text-base">{t.date}</h2>
      </div>
      <LocaleSwitcher selectedLocale={locale} />
    </header>
  );
}