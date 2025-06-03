import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

const SocialProof = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      text: "These jaggery bites have replaced all my sugar cravings. The ginger variant is absolutely divine!",
      author: "Priya Sharma",
      rating: 5,
      verified: true
    },
    {
      text: "Finally found a sweet that doesn't make me feel guilty. My kids love the cardamom flavour.",
      author: "Rajesh Kumar",
      rating: 5,
      verified: true
    },
    {
      text: "The turmeric golden bites are my daily immunity booster. Pure quality!",
      author: "Dr. Meera Patel",
      rating: 5,
      verified: true
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <section className="py-16 bg-gradient-to-r from-cocoa to-honey/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Reviews */}
        <div className="text-center">
          <h2 className="text-3xl font-playfair font-bold text-cocoa mb-12">What Our Customers Say</h2>
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-honey fill-current" />
              ))}
            </div>
            
            <div className="relative h-32 overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentReview * 100}%)` }}
              >
                {reviews.map((review, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <blockquote className="text-xl text-cocoa/90 italic mb-4">
                      "{review.text}"
                    </blockquote>
                    <div className="flex items-center justify-center">
                      <cite className="text-honey font-semibold">
                        {review.author}
                      </cite>
                      {review.verified && (
                        <span className="ml-2 bg-honey text-cocoa px-2 py-1 rounded-full text-xs">
                          Verified Buyer
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
