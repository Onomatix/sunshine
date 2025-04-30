import { storyData } from '@/data/storyData';

const BioSection = () => {
  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif text-brown mb-12 text-center">About Me</h2>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <div className="aspect-[3/4] bg-cream/50 rounded-lg shadow-lg overflow-hidden">
              <img
                src={storyData.bio.image}
                alt="Bio Image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-serif text-brown mb-6">
              {storyData.bio.title}
            </h1>
            <p className="text-lg text-khaki leading-relaxed">
              {storyData.bio.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioSection; 