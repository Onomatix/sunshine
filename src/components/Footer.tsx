import { Link } from "react-router-dom";
import { Instagram, MessageSquare } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className={`${theme === 'dark' ? 'bg-black' : 'bg-cream'} py-8 md:py-12 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-2 md:mb-0">
            <Link to="/" className="block">
              <img 
                src={theme === 'dark' ? "/logo_footer_dark.png" : "/logo_footer.png"} 
                alt="Sunshine Cosmetics" 
                className="h-36 w-auto"
              />
            </Link>
          </div>
          
          <div className="mt-6 md:mt-0 flex space-x-4">
            <a 
              href="https://www.instagram.com/ladysunshineaileenofficial/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${theme === 'dark' ? 'text-dark-text hover:text-dark-secondary' : 'text-brown hover:text-olive'} transition-colors`}
              aria-label="Instagram"
            >
              <Instagram size={48} />
            </a>
            <a 
              href="https://wa.me/60143979337" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${theme === 'dark' ? 'text-dark-text hover:text-dark-secondary' : 'text-brown hover:text-olive'} transition-colors`}
              aria-label="WhatsApp"
            >
              <MessageSquare size={48} />
            </a>
          </div>
        </div>
        <div className={`mt-8 pt-6 border-t ${theme === 'dark' ? 'border-dark-secondary/20' : 'border-khaki/20'} text-center`}>
          <div className="flex items-center justify-center space-x-2">
            <p className={`${theme === 'dark' ? 'text-dark-secondary' : 'text-khaki'} text-sm`}>
              Powered by
            </p>
            <a 
              href="https://www.quantum-climb.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img 
                src="/qc.png" 
                alt="Quantum Climb" 
                className="h-16 w-auto"
              />
            </a>
          </div>
          <p className={`${theme === 'dark' ? 'text-dark-secondary' : 'text-khaki'} text-sm mt-2`}>
            &copy; {new Date().getFullYear()} Sunshine Cosmetics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
