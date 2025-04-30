import { storyData } from '@/data/storyData';
import Button from '@/components/Button';

const ServicesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif text-brown mb-12 text-center">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {storyData.services.map((service, index) => (
            <div key={index} className="bg-cream p-8 rounded-lg text-center">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-serif text-brown mb-3">{service.title}</h3>
              <p className="text-khaki">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button variant="secondary" onClick={() => window.open(storyData.downloadPDF.file)}>
            {storyData.downloadPDF.label}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 