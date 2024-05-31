import cx from 'classnames';
import { locales } from '@/config';
import Link from 'next/link';

export default function LocaleSwitcher({ locale }: { locale: string }) {
  return (
    <div className="z-100 group flex h-full bg-primary">
      {locales.map((loc) => (
        <Link
          key={`button-localeSwitcher-${loc}`}
          className={cx(
            'peer h-full w-full content-around rounded-md border border-primary p-2 text-center uppercase',
            loc == locale
              ? 'bg-primary text-secondary'
              : 'bg-secondary text-primary  hover:bg-highlight hover:text-black',
          )}
          href={`/${loc}`}
        >
          {loc}
        </Link>
      ))}
    </div>
  );
}
