
import React from 'react';
import { Star, Quote } from 'lucide-react';

const SocialProof = () => {
  const reviews = [
    {
      text: "I was skeptical about jaggery tasting 'premium', but Beyond Bites proved me wrong. The texture is incredibly smooth, and the flavors are subtle yet distinct. It's now a staple in my kitchen.",
      author: "Priya Sharma",
      role: "Nutritionist",
      rating: 5,
    },
    {
      text: "My kids absolutely love the Cacao Delight! I love that I can give them a treat that's actually good for them. No more refined sugar fights in our house.",
      author: "Rajesh Kumar",
      role: "Parent",
      rating: 5,
    },
    {
      text: "As an Ayurvedic practitioner, I appreciate the authenticity. The Turmeric Gold is perfectly balanced - not too spicy, just soothing and warm.",
      author: "Dr. Meera Patel",
      role: "Ayurveda Doctor",
      rating: 5,
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-ivory to-honey/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-cocoa mb-4">Loved by Families</h2>
          <div className="flex items-center justify-center gap-2 text-honey mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
          <p className="text-cocoa/70">Rated 4.9/5 by 10,000+ happy customers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative group"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-honey/20 group-hover:text-honey/40 transition-colors" />
              <div className="flex gap-1 text-honey mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-cocoa/80 mb-8 leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-skin-200 bg-honey/20 flex items-center justify-center text-honey font-bold">
                  {review.author[0]}
                </div>
                <div>
                  <h4 className="font-bold text-cocoa">{review.author}</h4>
                  <p className="text-sm text-cocoa/50">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
