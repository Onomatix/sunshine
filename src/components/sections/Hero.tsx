import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-[140vh] flex items-center justify-center bg-brown pt-28">
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero/hero.webp" 
          alt="Hero Background" 
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-medium text-cream text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            Feel the Magic
          </h1>
          <Link to="/story">
            <button className="bg-cream text-brown px-8 py-4 text-lg font-medium rounded-lg
              hover:bg-cream/90 transition-all duration-300
              focus:outline-none focus:ring-2 focus:ring-cream focus:ring-offset-2 focus:ring-offset-brown/20"
              aria-label="Shop Now"
            >
              Read the Story
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero; 