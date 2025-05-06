'use client';

import { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'The coffee cart was the highlight of our wedding! Everyone loved the specialty drinks.',
  },
  {
    id: 2,
    name: 'James L.',
    rating: 5,
    text: 'Boujee Beverages made our corporate event a huge success. Professional and delicious!',
  },
  {
    id: 3,
    name: 'Emily R.',
    rating: 5,
    text: 'The lemonade station was a hit at my daughter\'s birthday party. So refreshing!',
  },
  {
    id: 4,
    name: 'Michael T.',
    rating: 5,
    text: 'Best coffee I\'ve had at any event. The barista was amazing with our guests!',
  },
  {
    id: 5,
    name: 'Jessica K.',
    rating: 5,
    text: 'The presentation was stunning and the drinks were even better. 10/10 would book again!',
  },
  {
    id: 6,
    name: 'David P.',
    rating: 5,
    text: 'The team was so professional and the coffee was outstanding. Made our festival a hit!',
  },
  {
    id: 7,
    name: 'Olivia S.',
    rating: 5,
    text: 'The mobile bar was the talk of our wedding. The espresso martinis were incredible!',
  },
];

export default function ReviewsTicker() {
  const tickerRef = useRef<HTMLDivElement>(null);
  const tickerContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!tickerRef.current || !tickerContentRef.current) return;

    const ticker = tickerRef.current;
    const tickerContent = tickerContentRef.current;
    const contentWidth = tickerContent.scrollWidth;
    const animationDuration = (contentWidth / 50) * 1000; // Adjust speed as needed

    // Clone the content for seamless looping
    const clone = tickerContent.cloneNode(true);
    ticker.appendChild(clone);

    // Animate the ticker
    const keyframes = [
      { transform: 'translateX(0)' },
      { transform: `translateX(-${contentWidth}px)` },
    ];

    const options: KeyframeAnimationOptions = {
      duration: animationDuration,
      iterations: Infinity,
      easing: 'linear',
    };

    ticker.animate(keyframes, options);

    return () => {
      // Clean up the animation when component unmounts
      ticker.getAnimations().forEach(animation => animation.cancel());
    };
  }, []);

  // Duplicate reviews for smoother looping
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <div className="bg-pink-50 py-8">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
        <div className="relative h-[300px] overflow-y-hidden">
          <div 
            ref={tickerRef} 
            className="absolute left-0 top-0 right-0 bottom-0 flex items-center"
          >
            <div ref={tickerContentRef} className="flex space-x-8">
              {duplicatedReviews.map((review, index) => (
                <div 
                  key={`${review.id}-${index}`}
                  className="bg-white p-6 rounded-lg shadow-md w-80 flex-shrink-0 flex flex-col"
                >
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="h-5 w-5 text-yellow-400 fill-current flex-shrink-0" 
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-4 flex-grow">"{review.text}"</p>
                  <p className="font-medium text-gray-900 pt-2">{review.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
