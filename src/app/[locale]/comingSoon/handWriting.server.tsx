import Image from 'next/image';

export default async function ComingSoonHandWriting() {
  return (
    <Image
      src="/writing.png"
      width={1207}
      height={587}
      alt="Hand writing"
      className="h-auto min-w-[calc(60vw-4rem)] max-w-[calc(100vw-4rem)] dark:invert"
    />
  );
}
