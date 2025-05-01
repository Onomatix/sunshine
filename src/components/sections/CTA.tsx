import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-20 bg-olive/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-brown mb-8">
            Ready to Experience the Magic?
          </h2>
          <p className="text-lg md:text-xl text-brown/80 mb-10 leading-relaxed">
            Discover our collection of premium products designed for your comfort and confidence.
          </p>
          <Link to="/checkout">
            <button 
              className="bg-brown text-cream px-8 py-4 text-lg font-medium rounded-lg
                hover:bg-brown/90 transition-all duration-300
                focus:outline-none focus:ring-2 focus:ring-brown focus:ring-offset-2"
              aria-label="Browse our shop"
            >
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA; 