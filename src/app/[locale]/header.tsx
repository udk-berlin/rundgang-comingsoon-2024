import LocaleSwitcher from '@/components/localeSwitcher';
import { ColorSchemeSwitcher } from '@/components/colorSchemeSwitcher';

export default async function Header({ locale }: { locale: string }) {
  return (
    <header className="mx-[2rem] flex h-header items-end justify-between">
      <ColorSchemeSwitcher />
      <LocaleSwitcher selectedLocale={locale} />
    </header>
  );
}
