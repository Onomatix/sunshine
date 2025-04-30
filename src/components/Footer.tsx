
import { Link } from "react-router-dom";
import { Instagram, MessageSquare } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-cream py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="text-brown font-serif text-xl font-medium">
              Sunshine Cosmetics
            </Link>
            <p className="text-khaki mt-2 text-sm">Feel the Magic</p>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <Link to="/" className="text-brown hover:text-olive transition-colors">
              Home
            </Link>
            <Link to="/services" className="text-brown hover:text-olive transition-colors">
              Services
            </Link>
            <Link to="/shop" className="text-brown hover:text-olive transition-colors">
              Shop
            </Link>
          </div>
          <div className="mt-6 md:mt-0 flex space-x-4">
            <a 
              href="https://instagram.com/sunshinecosmetics_official" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-brown hover:text-olive transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="https://wa.me/60143979337" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-brown hover:text-olive transition-colors"
              aria-label="WhatsApp"
            >
              <MessageSquare size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-khaki/20 text-center">
          <p className="text-khaki text-sm">
            &copy; {new Date().getFullYear()} Sunshine Cosmetics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
