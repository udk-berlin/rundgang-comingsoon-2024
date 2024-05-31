import { Pathnames } from 'next-intl/navigation';
import { notFound } from 'next/navigation';

export const port = process.env.PORT || 3000;
export const host = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${port}`;

export const defaultLocale = 'en' as const;
export const locales = ['en', 'de'] as const;

export const pathnames = {
  '/': '/',
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;

export async function getMessages(locale: string) {
  try {
    return (await import(`../locales/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}
