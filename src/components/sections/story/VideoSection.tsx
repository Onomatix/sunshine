import ReactPlayer from 'react-player/lazy';
import { storyData } from '@/data/storyData';

const VideoSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif text-brown mb-12 text-center">Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {storyData.videos.slice(0, 4).map((videoUrl, index) => (
            <div key={index} className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <ReactPlayer
                url={videoUrl}
                width="100%"
                height="100%"
                light={true}
                controls={true}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection; 