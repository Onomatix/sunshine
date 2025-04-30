import { useState } from 'react';

export const testimonials = [
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
  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage
  );

  return (
    <section id="testimonials" className="py-16 bg-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif text-brown mb-12 text-center">
          What Our Customers Say
        </h2>
        
        <div className="relative max-w-6xl mx-auto">
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {currentTestimonials.map((testimonial, index) => (
              <div 
                key={`${currentPage}-${index}`}
                className="bg-white rounded-lg p-6 flex flex-col"
              >
                <div className="flex-1">
                  <p className="text-2xl mb-4">{testimonial.emojis}</p>
                  <p className="text-khaki italic mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </div>
                <p className="text-brown font-medium">
                  - {testimonial.name}
                </p>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={prevPage}
              className="p-2 rounded-full bg-brown text-cream hover:bg-olive transition-colors focus:outline-none focus:ring-2 focus:ring-brown focus:ring-offset-2"
              aria-label="View previous testimonials"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === currentPage ? 'bg-brown' : 'bg-khaki'
                  }`}
                  aria-label={`Go to testimonial page ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextPage}
              className="p-2 rounded-full bg-brown text-cream hover:bg-olive transition-colors focus:outline-none focus:ring-2 focus:ring-brown focus:ring-offset-2"
              aria-label="View next testimonials"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 