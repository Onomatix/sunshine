import { useState } from 'react';

const testimonials = [
  {
    "name": "Mellyna Lee New",
    "text": "They are very helpful and awesome! The NipKiss really invisible and well supported when wearing it. Who needs bra anymore when you have NipKiss from Sunshine Cosmetics!",
    "emojis": "💯💯💯💯💯"
  },
  {
    "name": "Melisha Lin",
    "text": "Go bra less with Nip Kiss as it's so comfortable, and you don't feel like you're wearing anything. Super easy, just slip it on. And rock your outfits. One of my best buy for sure.",
    "emojis": "✨"
  },
  {
    "name": "Nana Liey",
    "text": "I'm in love with the nip kiss. Tried other brands. I really feel that the nipkiss does the job equally as good if not better.",
    "emojis": "❤️"
  },
  {
    "name": "Sharon Gill",
    "text": "I particularly love the packaging, hygienic. Affordable and really comfortable to wear.",
    "emojis": "👍"
  },
  {
    "name": "Pauline Cassiopeia",
    "text": "Best nipple pad ever!! So far I've reused more than 40 times it's still functioning well! Best dance partner of mine as sports bra really hurts my shoulder.",
    "emojis": "❤️❤️💃"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif text-brown mb-12 text-center">
          What Our Customers Say
        </h2>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <div className="text-center">
              <p className="text-2xl mb-4">{testimonials[currentIndex].emojis}</p>
              <p className="text-lg text-khaki mb-6 italic">
                "{testimonials[currentIndex].text}"
              </p>
              <p className="text-brown font-medium">
                - {testimonials[currentIndex].name}
              </p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-brown text-cream hover:bg-olive transition-colors"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-brown text-cream hover:bg-olive transition-colors"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-brown' : 'bg-khaki'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 