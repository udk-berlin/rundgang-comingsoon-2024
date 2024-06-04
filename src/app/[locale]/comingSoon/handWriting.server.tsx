'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function ComingSoonHandWriting() {
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentIndex == 8) {
        setCurrentIndex(1);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 3000); // clearing interval
    return () => clearInterval(timer);
  });

  return (
    <div>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(
        (number) =>
          currentIndex == number && (
            <Image
              src={`/${number}-writing.png`}
              key={`handwirting-image-${number}`}
              width={1207}
              height={587}
              alt="Hand writing"
              className="h-auto min-w-[calc(60vw-4rem)] max-w-[calc(100vw-4rem)] dark:invert"
            />
          ),
      )}
    </div>
  );
}
