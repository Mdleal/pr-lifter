import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "My 5-year-old loves his mini barbell set! It's the perfect size for him, and I love that he's learning proper form early. The colors are bright and fun too!",
    author: "Jessica T.",
    role: "CrossFit Mom",
    rating: 5
  },
  {
    id: 2,
    content: "The quality of MiniWOD products is outstanding. My twins have been using their kettlebells for months, and they still look brand new despite daily use.",
    author: "Mike R.",
    role: "Fitness Coach & Dad",
    rating: 5
  },
  {
    id: 3,
    content: "The Little Athlete Starter Kit was the perfect birthday gift for my niece. She loves working out alongside her parents now, and the equipment is perfectly sized for her small hands.",
    author: "Sarah L.",
    role: "Proud Aunt",
    rating: 4
  }
];

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-12 bg-sky-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">What Parents Are Saying</h2>
          <p className="mt-4 text-lg text-sky-200 max-w-2xl mx-auto">
            Don't just take our word for it - hear from families who are building healthy habits with MiniWOD.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-sky-700 rounded-lg p-6 shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-sky-500'
                    }`}
                  />
                ))}
              </div>
              <p className="text-sky-100 mb-6 italic">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sky-300 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;