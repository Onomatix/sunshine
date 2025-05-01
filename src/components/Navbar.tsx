import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { useTheme } from "@/context/ThemeContext";
import { Moon, Sun, ShoppingBag } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`${theme === 'dark' ? 'bg-[#230105]' : 'bg-[#ffe8ea]'} backdrop-blur-sm fixed w-full z-50 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-28">
          {/* Left section */}
          <div className="hidden md:flex flex-1 justify-start">
            <Link to="/" className={`${theme === 'dark' ? 'text-dark-text hover:text-dark-secondary' : 'text-brown hover:text-olive'} transition-colors`}>Home</Link>
            <Link to="/story" className={`${theme === 'dark' ? 'text-dark-text hover:text-dark-secondary' : 'text-brown hover:text-olive'} transition-colors ml-8`}>Story</Link>
          </div>
          
          {/* Center logo */}
          <div className="flex justify-center flex-1">
            <Link to="/">
              <img src={theme === 'dark' ? "/logo_dark.png" : "/logo_light.png"} alt="Sunshine Cosmetics" className="h-24 w-auto" />
            </Link>
          </div>
          
          {/* Right section */}
          <div className="flex flex-1 justify-end items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`${theme === 'dark' ? 'text-dark-text hover:text-dark-secondary' : 'text-brown hover:text-olive'} transition-colors p-2`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <div className="hidden md:flex items-center">
              <Link to="/checkout" className={`${theme === 'dark' ? 'text-dark-text hover:text-dark-secondary' : 'text-brown hover:text-olive'} transition-colors relative`}>
                <ShoppingBag size={24} />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-olive text-cream text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Link>
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className={`${theme === 'dark' ? 'text-dark-text hover:text-dark-secondary' : 'text-brown hover:text-olive'} transition-colors p-2 rounded-md focus:outline-none`}
                aria-label="Toggle menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className={`md:hidden ${theme === 'dark' ? 'bg-dark-bg/95' : 'bg-[#ffe8ea]/95'} backdrop-blur-sm transition-colors duration-300`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className={`block px-3 py-2 ${theme === 'dark' ? 'text-dark-text hover:text-dark-secondary' : 'text-brown hover:text-olive'} transition-colors font-medium`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/story"
              className={`block px-3 py-2 ${theme === 'dark' ? 'text-dark-text hover:text-dark-secondary' : 'text-brown hover:text-olive'} transition-colors font-medium`}
              onClick={() => setIsMenuOpen(false)}
            >
              Story
            </Link>
            <Link
              to="/checkout"
              className={`block px-3 py-2 ${theme === 'dark' ? 'text-dark-text hover:text-dark-secondary' : 'text-brown hover:text-olive'} transition-colors font-medium`}
              onClick={() => setIsMenuOpen(false)}
            >
              Cart {totalItems > 0 && `(${totalItems})`}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
