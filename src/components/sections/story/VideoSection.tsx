import ReactPlayer from 'react-player/lazy';
import { storyData } from '@/data/storyData';

const VideoSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif text-brown mb-12 text-center">Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {storyData.videos.map((video, index) => (
            <div key={index} className="space-y-4">
              <div className="aspect-video bg-cream rounded-lg overflow-hidden">
                <div className="relative w-full h-full">
                  <ReactPlayer
                    url={video.url}
                    width="100%"
                    height="100%"
                    light={true}
                    controls={true}
                    playsinline
                    config={{
                      youtube: {
                        playerVars: { modestbranding: 1 }
                      }
                    }}
                    className="absolute top-0 left-0"
                  />
                </div>
              </div>
              <div className="space-y-2 p-4">
                <h3 className="text-xl font-serif text-brown font-medium">{video.title}</h3>
                <p className="text-brown/80 leading-relaxed">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection; 