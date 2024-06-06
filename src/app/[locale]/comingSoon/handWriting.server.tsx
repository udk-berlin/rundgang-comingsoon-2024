'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const imageIds = [1, 2, 3, 4, 5, 6, 7, 8];

export default function ComingSoonHandWriting() {
  const [currentImageId, setCurrentImageId] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      const nextImageId =
        currentImageId === imageIds.length ? 1 : currentImageId + 1;
      setCurrentImageId(nextImageId);
    }, 5000);

    return () => clearInterval(timer);
  });

  return (
    <div className="relative">
      {imageIds.map((imageId) => (
        <div
          key={imageId}
          className="pointer-events-none fixed bottom-0 left-0 right-0 top-0 flex items-center justify-center transition-[opacity] duration-[2.5s] ease-in-out"
          style={{ opacity: currentImageId === imageId ? 1 : 0 }}
        >
          <Image
            key={imageId}
            src={`/${imageId}-writing.png`}
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
