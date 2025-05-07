import { useState, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';

export const testimonials = [
  {
    "text": "I was honestly impressed with how fitted the support feels — it gives shape without that stiff, fake push-up feeling. Super comfortable to move in, and I don't have to worry about it slipping or falling off. The texture is so soft and light, it blends under clothes without showing through. Compared to other brands I've tried, this one just fits better. Others tend to leave air gaps or feel off in shape — but this one sticks evenly, stays put, and really molds to you.",
    "emojis": "🥰"
  },
  {
    "text": "I was skeptical at first, but after trying these push-up cups, I'm a believer. They offer incredible comfort without compromising on the desired lift. Thank you Sunshine Cosmetics.",
    "emojis": "❤️"
  },
  {
    "text": "These push-up cups are a game-changer. They enhance my natural shape beautifully and are so comfortable that I forget I'm wearing them. I can't wait to spread the word across to my besties.",
    "emojis": "💓"
  },
  {
    "text": "Sunshine Cosmetics Butterfly Push up cups 2.0. Maxi Plunge B Push-Up Cups have transformed my wardrobe. The lift and support they provide are phenomenal, making every outfit look better. I just enjoy sipping on my wine and can't stop checking myself out. I feel like Cleopatra on top of the world.",
    "emojis": "❤️"
  }
];

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = window.innerWidth < 768 ? 1 : 2;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);
  const { theme } = useTheme();

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextPage();
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Update testimonials per page on window resize
  useEffect(() => {
    const handleResize = () => {
      const newTestimonialsPerPage = window.innerWidth < 768 ? 1 : 2;
      if (newTestimonialsPerPage !== testimonialsPerPage) {
        setCurrentPage(0); // Reset to first page when changing layout
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const currentTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage
  );

  return (
    <section id="testimonials" className={`py-16 ${theme === 'dark' ? 'bg-[#180700]' : 'bg-cream'} transition-colors duration-300`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl md:text-4xl font-serif ${theme === 'dark' ? 'text-white' : 'text-brown'} mb-12 text-center`}>
          What Our Customers Say
        </h2>
        
        <div className="relative max-w-6xl mx-auto">
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {currentTestimonials.map((testimonial, index) => (
              <div 
                key={`${currentPage}-${index}`}
                className={`${theme === 'dark' ? 'bg-[#350006]' : 'bg-white'} rounded-lg p-6 flex flex-col transition-colors duration-300`}
              >
                <div className="flex-1">
                  <p className="text-2xl mb-4">{testimonial.emojis}</p>
                  <p className={`${theme === 'dark' ? 'text-white/80' : 'text-khaki'} italic leading-relaxed`}>
                    "{testimonial.text}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={prevPage}
              className={`p-2 rounded-full ${theme === 'dark' ? 'bg-white text-[#111111] hover:bg-white/90' : 'bg-brown text-cream hover:bg-olive'} transition-colors focus:outline-none focus:ring-2 ${theme === 'dark' ? 'focus:ring-white' : 'focus:ring-brown'} focus:ring-offset-2`}
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
                    index === currentPage 
                      ? theme === 'dark' ? 'bg-white' : 'bg-brown'
                      : theme === 'dark' ? 'bg-white/30' : 'bg-khaki'
                  }`}
                  aria-label={`Go to testimonial page ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextPage}
              className={`p-2 rounded-full ${theme === 'dark' ? 'bg-white text-[#111111] hover:bg-white/90' : 'bg-brown text-cream hover:bg-olive'} transition-colors focus:outline-none focus:ring-2 ${theme === 'dark' ? 'focus:ring-white' : 'focus:ring-brown'} focus:ring-offset-2`}
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