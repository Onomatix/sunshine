import { Link } from "react-router-dom";
import Button from "@/components/Button";

const Hero = () => {
  return (
    <section className="relative h-[80vh] flex items-center bg-brown">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://placehold.co/1920x1080/453628/e2d5c3?text=Hero+Image" 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="max-w-xl">
            <img 
              src="https://placehold.co/240x80/453628/e2d5c3?text=Sunshine+Cosmetics" 
              alt="Sunshine Cosmetics" 
              className="w-48 mb-8"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-cream mb-4">
              Feel the Magic
            </h1>
            <p className="text-xl md:text-2xl text-cream/80 mb-8 font-serif">
              Experience comfort and confidence with our signature products
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
              <Link to="/shop">
                <Button size="lg" variant="secondary">Shop Now</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 