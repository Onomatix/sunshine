import { storyData } from '@/data/storyData';
import { useTheme } from '@/context/ThemeContext';

const BioSection = () => {
  const { theme } = useTheme();

  return (
    <section className={`py-24 ${theme === 'dark' ? 'bg-[#3b000d]' : 'bg-cream'} pt-36 transition-colors duration-300`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-2/5">
            <div className={`aspect-[3/4] ${theme === 'dark' ? 'bg-[#111111]/50' : 'bg-cream/50'} rounded-lg overflow-hidden`}>
              <img
                src={storyData.bio.image}
                alt="Sunshine - Model, Emcee, and Entrepreneur"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="w-full md:w-3/5 flex flex-col justify-center">
            <div className="max-w-xl">
              <h1 className={`text-4xl md:text-5xl font-serif ${theme === 'dark' ? 'text-white' : 'text-brown'} mb-8 text-center md:text-left`}>
                A Ray of Sunshine
              </h1>
              <div className={`space-y-6 text-lg ${theme === 'dark' ? 'text-white/80' : 'text-brown/80'} leading-relaxed text-center md:text-left`}>
                <p>
                  Sunshine is a dynamic force in the world of fashion, beauty, and entertainment. Born in Ipoh, Malaysia, in 1988 and raised partly in London, she brings a rare blend of Indian, British, and Mongolian-Chinese heritage that sets her apart in both presence and personality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioSection; 