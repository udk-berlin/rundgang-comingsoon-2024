import LocaleSwitcher from '@/components/localeSwitcher';

export default async function Header({ locale }: { locale: string }) {
  return (
    <header className="h-header mx-[2rem] flex items-end justify-end">
      <LocaleSwitcher selectedLocale={locale} />
    </header>
  );
}
