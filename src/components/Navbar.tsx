import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useCart();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#ffe8ea] backdrop-blur-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-28">
          {/* Left section */}
          <div className="hidden md:flex flex-1 justify-start">
            <Link to="/" className="text-brown hover:text-olive transition-colors">Home</Link>
            <Link to="/story" className="text-brown hover:text-olive transition-colors ml-8">Story</Link>
          </div>
          
          {/* Center logo */}
          <div className="flex justify-center flex-1">
            <Link to="/">
              <img src="/logo_light.png" alt="Sunshine Cosmetics" className="h-24 w-auto" />
            </Link>
          </div>
          
          {/* Right section */}
          <div className="flex flex-1 justify-end">
            <div className="hidden md:flex items-center">
              <Link to="/checkout" className="text-brown hover:text-olive transition-colors relative">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
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
                className="inline-flex items-center justify-center p-2 rounded-md text-brown hover:text-olive focus:outline-none"
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
        <div className="md:hidden bg-[#ffe8ea]/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 text-brown hover:text-olive font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/story"
              className="block px-3 py-2 text-brown hover:text-olive font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Story
            </Link>
            <Link
              to="/checkout"
              className="block px-3 py-2 text-brown hover:text-olive font-medium"
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
