import { useState, useEffect, useCallback } from 'react';
import { loadGalleryImages } from '@/utils/imageLoader';
import { IoClose, IoArrowBack, IoArrowForward } from 'react-icons/io5';

const IMAGES_PER_PAGE = 24;

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [images, setImages] = useState<string[]>([]);
  const [displayedImages, setDisplayedImages] = useState<string[]>([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const loadedImages = loadGalleryImages();
    const shuffledImages = [...loadedImages].sort(() => Math.random() - 0.5);
    setImages(shuffledImages);
    setDisplayedImages(shuffledImages.slice(0, IMAGES_PER_PAGE));
    setHasMore(shuffledImages.length > IMAGES_PER_PAGE);
  }, []);

  const loadMore = () => {
    const currentLength = displayedImages.length;
    const nextImages = images.slice(currentLength, currentLength + IMAGES_PER_PAGE);
    setDisplayedImages([...displayedImages, ...nextImages]);
    setHasMore(currentLength + IMAGES_PER_PAGE < images.length);
  };

  const handleImageClick = useCallback((image: string, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  }, []);

  const handlePrevious = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    const newIndex = currentIndex === 0 ? displayedImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(displayedImages[newIndex]);
  }, [currentIndex, displayedImages]);

  const handleNext = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    const newIndex = currentIndex === displayedImages.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedImage(displayedImages[newIndex]);
  }, [currentIndex, displayedImages]);

  const handleClose = useCallback(() => {
    setSelectedImage(null);
    setCurrentIndex(0);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowLeft') handlePrevious(e as unknown as React.MouseEvent);
      if (e.key === 'ArrowRight') handleNext(e as unknown as React.MouseEvent);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, handleClose, handlePrevious, handleNext]);

  if (images.length === 0) {
    return (
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif text-brown mb-12 text-center">Gallery</h2>
          <p className="text-center text-brown">Loading gallery images...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif text-brown mb-12 text-center">Gallery</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {displayedImages.map((image, index) => (
            <div key={index} className="relative w-full pb-[133%]">
              <div className="absolute inset-0">
                <div className="w-full h-full relative group cursor-pointer overflow-hidden rounded-lg">
                  <img
                    src={image}
                    alt={`Sunshine gallery photo - ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onClick={() => handleImageClick(image, index)}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {hasMore && (
          <div className="mt-12 text-center">
            <button
              onClick={loadMore}
              className="bg-brown text-cream px-8 py-4 rounded-lg font-medium
                hover:bg-brown/90 transition-all duration-300
                focus:outline-none focus:ring-2 focus:ring-brown focus:ring-offset-2"
            >
              Load More
            </button>
          </div>
        )}

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
            onClick={handleClose}
          >
            <button
              className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-[60]"
              onClick={(e) => {
                e.stopPropagation();
                handleClose();
              }}
              aria-label="Close lightbox"
            >
              <IoClose size={32} />
            </button>
            
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors z-[60]"
              onClick={handlePrevious}
              aria-label="Previous image"
            >
              <IoArrowBack size={32} />
            </button>

            <div 
              className="relative max-h-[90vh] max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt={`Gallery image ${currentIndex + 1} of ${displayedImages.length}`}
                className="max-h-[90vh] max-w-[90vw] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 text-center text-white/80 py-4 bg-black/50">
                Image {currentIndex + 1} of {displayedImages.length}
              </div>
            </div>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors z-[60]"
              onClick={handleNext}
              aria-label="Next image"
            >
              <IoArrowForward size={32} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection; 