'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';
import { ResponsiveH2 } from '@/components/html/h2';

export default function ComingSoonTitle({ t }: { t: any }) {
  const refContainer = useRef(null);
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (refContainer.current) {
      setDimensions({
        width: refContainer.current.offsetWidth,
        height: refContainer.current.offsetHeight,
      });
    }
  }, []);

  return (
    <div className="flex items-start justify-center">
      <div
        ref={refContainer}
        className="text-end text-sm font-bold xs:text-md sm:text-xl md:text-2xl"
      >
        {t.title}
      </div>
      <div>
        <div style={{ height: `${dimensions.height}px` }}></div>
        <ResponsiveH2 className="break-word font-bold" textSize="xl">
          {t.date}
        </ResponsiveH2>
      </div>
    </div>
  );
}

function ComingSoonInfoTitleContainer({ children }: { children: ReactNode }) {
  return <div className="flex justify-center ">{children}</div>;
}
