import { useTheme } from '@/context/ThemeContext';

const WriteUp = () => {
  const { theme } = useTheme();

  return (
    <section className={`py-12 ${theme === 'dark' ? 'bg-[#3b000d]' : 'bg-cream'} mt-[-1px] transition-colors duration-300`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className={`text-3xl md:text-4xl font-serif ${theme === 'dark' ? 'text-white' : 'text-brown'} mb-8`}>
            Welcome to Sunshine Cosmetics
          </h2>
          <div className={`space-y-6 ${theme === 'dark' ? 'text-white/80' : 'text-brown/80'} leading-relaxed`}>
            <p className="text-lg">
              At Sunshine Cosmetics, we believe in the power of natural beauty and confidence. 
              Our products are crafted with care, using premium ingredients to enhance your 
              natural radiance while keeping your skin healthy and glowing.
            </p>
            <p className="text-lg">
              From our signature Magic Bra collection to our carefully curated skincare line, 
              each product is designed to make you feel beautiful, confident, and comfortable 
              in your own skin.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WriteUp; 