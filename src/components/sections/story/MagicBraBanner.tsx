import { Link } from 'react-router-dom';
import { storyData } from '@/data/storyData';
import Button from '@/components/Button';

const MagicBraBanner = () => {
  return (
    <section className="py-16 bg-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brown/10 rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-brown mb-6">
            {storyData.magicBraBanner.text}
          </h2>
          <Link to={storyData.magicBraBanner.link}>
            <Button variant="primary">
              {storyData.magicBraBanner.buttonText}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MagicBraBanner; 