'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function ComingSoonHandWriting() {
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentIndex === 8) {
        setCurrentIndex(1);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 5000); // clearing interval
    return () => clearInterval(timer);
  });
  return (
    <div className="relative">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((number) => (
        <div
          key={`handwriting-image-${number}`}
          className="pointer-events-none fixed bottom-0 left-0 right-0 top-0 flex items-center justify-center transition-[opacity] duration-[2.5s] ease-in-out"
          style={{ opacity: currentIndex === number ? 1 : 0 }}
        >
          <Image
            key={`handwriting-image-${number}`}
            src={`/${number}-writing.png`}
            width={1207}
            height={587}
            alt="Hand writing"
            className="h-auto min-w-[calc(60vw-4rem)] max-w-[calc(100vw-4rem)] dark:invert"
          />
        </div>
      ))}
    </div>
  );
}
