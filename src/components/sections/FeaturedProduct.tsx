import { useState } from 'react';
import { useCart } from "@/context/CartContext";
import { useTheme } from '@/context/ThemeContext';
import { testimonials } from './Testimonials';

const FeaturedProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState('/images/product/product_01.png');
  const { addToCart } = useCart();
  const { theme } = useTheme();

  const productImages = [
    '/images/product/product_01.png',
    '/images/product/product_02.png',
    '/images/product/product_03.png',
    '/images/product/product_04.png',
    '/images/product/product_05.png',
    '/images/product/product_06.png'
  ];

  const handleAddToCart = () => {
    const product = {
      id: "magic-bra-bundle",
      name: "MAGIC BRA PREMIUM BUNDLE",
      price: 92.65,
      quantity: quantity
    };
    addToCart(product);
  };

  const scrollToTestimonials = () => {
    const testimonialsSection = document.getElementById('testimonials');
    if (testimonialsSection) {
      testimonialsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={`py-16 ${theme === 'dark' ? 'bg-[#111111]' : 'bg-cream'} transition-colors duration-300`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-8">

          {/* Left Column - Images */}
          <div className="w-full lg:w-2/3">
            {/* Mobile Title, Price & Reviews */}
            <div className="block lg:hidden mb-6 text-center space-y-2">
              <h1 className={`text-2xl font-serif ${theme === 'dark' ? 'text-white' : 'text-brown'}`}>MAGIC BRA PREMIUM BUNDLE</h1>
              <div className="flex justify-center items-baseline gap-2">
                <span className={`text-xl font-serif ${theme === 'dark' ? 'text-white' : 'text-brown'}`}>$92.65</span>
                <span className={`text-sm ${theme === 'dark' ? 'text-white/60' : 'text-khaki'} line-through`}>$109.50</span>
              </div>
              <div className="flex justify-center items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className={`w-5 h-5 ${theme === 'dark' ? 'text-white' : 'text-olive'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <button 
                  onClick={scrollToTestimonials}
                  className={`${theme === 'dark' ? 'text-white/60 hover:text-white' : 'text-khaki hover:text-brown'} transition-colors`}
                  aria-label="View all reviews"
                >
                  ({testimonials.length} Reviews)
                </button>
              </div>
            </div>

            {/* Bestseller Badge */}
            <div className="relative">
              <div className="absolute top-4 left-4 z-10">
                <span className={`${theme === 'dark' ? 'bg-[#350006] text-white' : 'bg-pink-100 text-pink-700'} text-xs font-medium px-2.5 py-1 rounded-full`}>
                  Bestseller
                </span>
              </div>

              {/* Main Image */}
              <div className={`aspect-square ${theme === 'dark' ? 'bg-[#350006]/50' : 'bg-white/50'} rounded-lg mb-4 overflow-hidden`}>
                <img
                  src={mainImage}
                  alt="Magic Bra Premium Bundle"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-6 gap-4 max-w-[800px]">
                {productImages.map((image, index) => (
                  <div
                    key={index}
                    className={`aspect-square ${theme === 'dark' ? 'bg-[#350006]/50' : 'bg-white/50'} rounded-lg overflow-hidden cursor-pointer transition-all ${
                      mainImage === image ? `ring-2 ${theme === 'dark' ? 'ring-white' : 'ring-olive'}` : `hover:ring-2 ${theme === 'dark' ? 'hover:ring-white/50' : 'hover:ring-brown/50'}`
                    }`}
                    onClick={() => setMainImage(image)}
                  >
                    <img
                      src={image}
                      alt={`Magic Bra Premium Bundle - View ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Product Info */}
          <div className="w-full lg:w-1/3 space-y-6">
            {/* Desktop Title */}
            <h1 className={`text-4xl font-serif ${theme === 'dark' ? 'text-white' : 'text-brown'} hidden lg:block`}>
              MAGIC BRA PREMIUM BUNDLE
            </h1>

            {/* Desktop Price */}
            <div className="flex items-baseline gap-3 hidden lg:flex">
              <span className={`text-3xl font-serif ${theme === 'dark' ? 'text-white' : 'text-brown'}`}>$92.65</span>
              <span className={`text-lg ${theme === 'dark' ? 'text-white/60' : 'text-khaki'} line-through`}>$109.50</span>
            </div>

            {/* Desktop Reviews */}
            <div className="flex items-center gap-2 hidden lg:flex">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className={`w-5 h-5 ${theme === 'dark' ? 'text-white' : 'text-olive'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <button 
                onClick={scrollToTestimonials}
                className={`${theme === 'dark' ? 'text-white/60 hover:text-white' : 'text-khaki hover:text-brown'} transition-colors`}
                aria-label="View all reviews"
              >
                ({testimonials.length} Reviews)
              </button>
            </div>

            {/* Subtitle */}
            <p className={`${theme === 'dark' ? 'text-white/80' : 'text-khaki'} font-medium text-center lg:text-left`}>
              Bundle & save on our bestselling essentials
            </p>

            <p className={`${theme === 'dark' ? 'text-white/80' : 'text-khaki'} leading-relaxed text-center lg:text-left`}>
              Bundle & save on our iconic Magic Bra Bundle. Plus get your hands on bestselling 
              makeup essentials. This complete beauty solution includes our signature invisible 
              bra, premium accessories, and exclusive bonuses.
            </p>

            {/* Quantity and Add to Cart */}
            <div className="flex flex-wrap items-center gap-4">
              <div className={`flex items-center border ${theme === 'dark' ? 'border-white/20' : 'border-brown'} rounded mx-auto`}>
                <button
                  onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                  className={`w-12 h-12 flex items-center justify-center ${theme === 'dark' ? 'text-white hover:bg-white/10' : 'text-brown hover:bg-brown hover:text-cream'} transition-colors`}
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className={`w-12 h-12 text-center border-x ${theme === 'dark' ? 'border-white/20 bg-transparent text-white' : 'border-brown bg-transparent text-brown'} [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`}
                  min="1"
                  aria-label="Product quantity"
                />
                <button
                  onClick={() => setQuantity(prev => prev + 1)}
                  className={`w-12 h-12 flex items-center justify-center ${theme === 'dark' ? 'text-white hover:bg-white/10' : 'text-brown hover:bg-brown hover:text-cream'} transition-colors`}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className={`px-6 ${theme === 'dark' ? 'bg-white text-[#111111] hover:bg-white/90' : 'bg-olive text-cream hover:bg-brown'} h-12 rounded font-medium transition-colors focus:outline-none focus:ring-2 ${theme === 'dark' ? 'focus:ring-white' : 'focus:ring-olive'} focus:ring-offset-2`}
                aria-label="Add Magic Bra Premium Bundle to cart"
              >
                ADD TO CART
              </button>
            </div>

            {/* Free Shipping Notice */}
            <div className={`${theme === 'dark' ? 'bg-[#350006]' : 'bg-[#F5F5F2]'} p-4 rounded`}>
              <p className={`${theme === 'dark' ? 'text-white/80' : 'text-olive'} text-center text-sm`}>
                FREE SHIPPING ON DOMESTIC ORDERS OVER $50
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
