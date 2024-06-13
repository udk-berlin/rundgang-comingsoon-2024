export default async function ComingSoonInfo({ t }: { t: any }) {
  return (
    <div className="flex flex-col items-center justify-end text-center text-xxs xs:text-xs sm:justify-center">
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
