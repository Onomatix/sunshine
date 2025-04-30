import { useState } from 'react';
import Button from "@/components/Button";
import { useCart } from "@/context/CartContext";

const FeaturedProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: "magic-bra-bundle",
      name: "Magic Bra Premium Bundle",
      price: 92.65,
      quantity: quantity
    });
  };

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prev => Math.max(1, prev - 1));
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Product Images */}
          <div className="w-full lg:w-1/2">
            <div className="flex gap-4">
              <div className="w-full">
                <img 
                  src="https://placehold.co/800x600/e2d5c3/453628?text=Magic+Bra+Bundle" 
                  alt="Magic Bra Bundle" 
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="flex flex-col gap-4">
                <img 
                  src="https://placehold.co/200x200/e2d5c3/453628?text=Item+1" 
                  alt="Bundle Item 1" 
                  className="w-24 h-24 rounded-lg shadow-sm"
                />
                <img 
                  src="https://placehold.co/200x200/e2d5c3/453628?text=Item+2" 
                  alt="Bundle Item 2" 
                  className="w-24 h-24 rounded-lg shadow-sm"
                />
                <img 
                  src="https://placehold.co/200x200/e2d5c3/453628?text=Item+3" 
                  alt="Bundle Item 3" 
                  className="w-24 h-24 rounded-lg shadow-sm"
                />
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-serif text-brown mb-4">
              MAGIC BRA PREMIUM BUNDLE
            </h2>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-olive" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-khaki">(0 Reviews)</span>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-medium text-brown">$92.65</span>
                <span className="text-lg line-through text-khaki">$109.50</span>
              </div>
              <p className="text-olive text-sm mt-1">Bundle & save on our bestselling essentials</p>
            </div>

            <p className="text-khaki mb-8">
              Bundle & save on our iconic Magic Bra Bundle. Plus get your hands on bestselling makeup essentials. 
              This complete beauty solution includes our signature invisible bra, premium accessories, and exclusive bonuses.
            </p>

            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center border border-sand rounded-md">
                <button 
                  onClick={decrementQuantity}
                  className="px-4 py-2 text-brown hover:text-olive"
                >
                  -
                </button>
                <span className="px-4 py-2 border-x border-sand">{quantity}</span>
                <button 
                  onClick={incrementQuantity}
                  className="px-4 py-2 text-brown hover:text-olive"
                >
                  +
                </button>
              </div>
              <Button 
                size="lg" 
                variant="primary" 
                className="flex-1"
                onClick={handleAddToCart}
              >
                ADD TO CART
              </Button>
            </div>

            <div className="p-4 bg-olive/10 rounded-lg">
              <p className="text-olive text-sm">
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