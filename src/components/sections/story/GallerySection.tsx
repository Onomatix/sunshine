import { useState } from 'react';
import { storyData } from '@/data/storyData';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-16 bg-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif text-brown mb-12 text-center">Gallery</h2>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
          {storyData.gallery.images.map((image, index) => (
            <div key={index} className="mb-4">
              <div className="aspect-[4/3] bg-cream/50 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer overflow-hidden">
                <img
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-full object-cover"
                  onClick={() => setSelectedImage(image)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl w-full">
            <img
              src={selectedImage}
              alt="Enlarged gallery image"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection; 