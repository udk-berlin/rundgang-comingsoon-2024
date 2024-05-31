import cx from 'classnames';
import { locales } from '@/config';
import Link from 'next/link';

export default function LocaleSwitcher({ selectedLocale }: { selectedLocale: string }) {
  return (
    <div className="flex bg-primary">
      {locales.map((locale) => (
        <Link
          key={locale}
          className={cx(
            'h-full w-full rounded-md border border-primary p-[0.5rem] text-center uppercase',
            selectedLocale == locale
              ? 'bg-primary text-secondary'
              : 'bg-secondary text-primary hover:bg-highlight hover:text-black',
          )}
          href={`/${locale}`}
        >
          {locale}
        </Link>
      ))}
    </div>
  );
}
