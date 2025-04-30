import { Link } from 'react-router-dom';
import { storyData } from '@/data/storyData';

const MagicBraBanner = () => {
  return (
    <section className="py-16 bg-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-pink-100 to-rose-50 rounded-lg p-8 md:p-12">
          <div className="flex flex-col items-center space-y-6">
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              <h2 className="text-2xl md:text-3xl font-serif text-brown">
                {storyData.magicBraBanner.text}
              </h2>
              <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <Link to={storyData.magicBraBanner.link}>
              <button
                className="bg-brown text-cream px-8 py-4 rounded-lg font-medium
                  hover:bg-brown/90 transition-all duration-300
                  focus:outline-none focus:ring-2 focus:ring-brown focus:ring-offset-2"
                aria-label="Shop Magic Bra collection"
              >
                {storyData.magicBraBanner.buttonText}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MagicBraBanner; 