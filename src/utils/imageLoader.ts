import { storyData } from '@/data/storyData';

export const loadGalleryImages = () => {
  try {
    // Create an array of image paths directly since we know the file names
    const images = Array.from({ length: 83 }, (_, i) => {
      const num = String(i + 1).padStart(3, '0');
      return `/images/gallery/modelling/model${num}.webp`;
    });

    console.log('Generated image paths:', images);
    return images;
  } catch (error) {
    console.error('Error loading gallery images:', error);
    return [];
  }
}; 