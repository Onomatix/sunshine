import { storyData } from '@/data/storyData';

const ServicesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif text-brown mb-12 text-center">
          My Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {storyData.services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-cream rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
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
                <h3 className="text-xl font-serif font-semibold text-brown mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-brown/80 leading-relaxed text-center">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button 
            onClick={() => window.open(storyData.downloadPDF.file)}
            className="bg-brown text-cream px-8 py-4 rounded-lg font-medium
              hover:bg-brown/90 transition-all duration-300
              focus:outline-none focus:ring-2 focus:ring-brown focus:ring-offset-2"
            aria-label="Download Portfolio"
          >
            {storyData.downloadPDF.label}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 