import { storyData } from '@/data/storyData';
import { useTheme } from '@/context/ThemeContext';

const ServicesSection = () => {
  const { theme } = useTheme();

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Sunshine_Combined.pdf';
    link.download = 'Sunshine_Combined.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className={`py-16 ${theme === 'dark' ? 'bg-[#282828]' : 'bg-white'} transition-colors duration-300`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl md:text-4xl font-serif ${theme === 'dark' ? 'text-white' : 'text-brown'} mb-12 text-center`}>
          My Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {storyData.services.map((service, index) => (
            <div 
              key={index} 
              className={`group ${theme === 'dark' ? 'bg-[#350006] border border-white/10' : 'bg-cream'} rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
            >
              {service.image && (
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={`${service.title} Service`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="p-8">
                <h3 className={`text-2xl md:text-3xl font-serif font-semibold ${theme === 'dark' ? 'text-white' : 'text-brown'} mb-4 text-center`}>
                  {service.title}
                </h3>
                <p className={`${theme === 'dark' ? 'text-white/80' : 'text-brown/80'} leading-relaxed text-center`}>
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button 
            onClick={handleDownload}
            className={`${theme === 'dark' ? 'bg-white text-[#111111] hover:bg-white/90' : 'bg-brown text-cream hover:bg-brown/90'} px-8 py-4 rounded-lg font-medium
              transition-all duration-300
              focus:outline-none focus:ring-2 ${theme === 'dark' ? 'focus:ring-white' : 'focus:ring-brown'} focus:ring-offset-2`}
            aria-label="Download Electronic Presskit"
          >
            Electronic Presskit
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
