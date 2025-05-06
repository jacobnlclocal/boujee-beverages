'use client';

import dynamic from 'next/dynamic';

// Dynamically import the ReviewsTicker with SSR disabled
const ReviewsTicker = dynamic(() => import('./ReviewsTicker'), {
  ssr: false,
});

export default function ReviewsSection() {
  return <ReviewsTicker />;
}
