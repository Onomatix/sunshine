import { useState } from 'react';
import { useCart } from "@/context/CartContext";
import { testimonials } from './Testimonials';

const FeaturedProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

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
    <section className="py-16 bg-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-8">
          {/* Left Column - Images */}
          <div className="w-full lg:w-2/3">
            {/* Bestseller Badge */}
            <div className="relative">
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-pink-100 text-pink-700 text-xs font-medium px-2.5 py-1 rounded-full">
                  Bestseller
                </span>
              </div>
              {/* Main Image */}
              <div className="aspect-square bg-white/50 rounded-lg mb-4 flex flex-col items-center justify-center p-6">
                <span className="text-[#453628] text-3xl font-medium mb-4">Magic Bra Bundle</span>
                <svg className="w-24 h-24 text-brown/30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H3V6h18v12zM9 12c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3-3-1.34-3-3z"/>
                </svg>
              </div>
              {/* Thumbnail Row */}
              <div className="grid grid-cols-3 gap-4 max-w-[400px]">
                <div className="aspect-square bg-white/50 rounded-lg flex items-center justify-center p-4">
                  <span className="text-[#453628] text-lg">Item 1</span>
                </div>
                <div className="aspect-square bg-white/50 rounded-lg flex items-center justify-center p-4">
                  <span className="text-[#453628] text-lg">Item 2</span>
                </div>
                <div className="aspect-square bg-white/50 rounded-lg flex items-center justify-center p-4">
                  <span className="text-[#453628] text-lg">Item 3</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Product Info */}
          <div className="w-full lg:w-1/3 space-y-6">
            <h1 className="text-4xl font-serif text-brown">
              MAGIC BRA PREMIUM BUNDLE
            </h1>

            {/* Reviews */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-olive" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <button 
                onClick={scrollToTestimonials}
                className="text-khaki hover:text-brown transition-colors"
                aria-label="View all reviews"
              >
                ({testimonials.length} Reviews)
              </button>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-serif text-brown">$92.65</span>
              <span className="text-lg text-khaki line-through">$109.50</span>
            </div>

            <p className="text-khaki font-medium">
              Bundle & save on our bestselling essentials
            </p>

            <p className="text-khaki leading-relaxed">
              Bundle & save on our iconic Magic Bra Bundle. Plus get your hands on bestselling 
              makeup essentials. This complete beauty solution includes our signature invisible 
              bra, premium accessories, and exclusive bonuses.
            </p>

            {/* Quantity and Add to Cart */}
            <div className="flex flex-col sm:flex-row items-stretch gap-4">
              <div className="flex items-center border border-brown rounded">
                <button
                  onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                  className="w-12 h-12 flex items-center justify-center text-brown hover:bg-brown hover:text-cream transition-colors"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-12 h-12 text-center border-x border-brown bg-transparent text-brown [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  min="1"
                  aria-label="Product quantity"
                />
                <button
                  onClick={() => setQuantity(prev => prev + 1)}
                  className="w-12 h-12 flex items-center justify-center text-brown hover:bg-brown hover:text-cream transition-colors"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-olive text-cream h-12 rounded font-medium hover:bg-brown transition-colors focus:outline-none focus:ring-2 focus:ring-olive focus:ring-offset-2"
                aria-label="Add Magic Bra Premium Bundle to cart"
              >
                ADD TO CART
              </button>
            </div>

            {/* Free Shipping Notice */}
            <div className="bg-[#F5F5F2] p-4 rounded">
              <p className="text-olive text-center text-sm">
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