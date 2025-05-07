import ReactPlayer from 'react-player/lazy';
import { useState, useRef } from 'react';
import { storyData } from '@/data/storyData';
import { useTheme } from '@/context/ThemeContext';

const getYouTubeId = (url: string) => {
  const match = url.match(/[?&]v=([^&#]*)|youtu\.be\/([^&#]*)|embed\/([^&#]*)/);
  return match?.[1] || match?.[2] || match?.[3];
};

const VideoSection = () => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const playersRef = useRef<Array<ReactPlayer | null>>([]);
  const { theme } = useTheme();

  const handlePlay = (index: number) => {
    playersRef.current.forEach((player, i) => {
      if (player && i !== index) {
        const internalPlayer = player.getInternalPlayer?.();
        if (internalPlayer?.pauseVideo) {
          internalPlayer.pauseVideo();
        } else if (internalPlayer?.pause) {
          internalPlayer.pause();
        }
        player.seekTo(0);
      }
    });
    setPlayingIndex(index);
  };

  return (
    <section className={`py-16 ${theme === 'dark' ? 'bg-[#0d0400]' : 'bg-white'} transition-colors duration-300`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl md:text-4xl font-serif ${theme === 'dark' ? 'text-white' : 'text-brown'} mb-12 text-center`}>Videos</h2>
        <div className={`max-w-3xl mx-auto mb-12 text-lg ${theme === 'dark' ? 'text-white/80' : 'text-brown/80'} leading-relaxed text-center`}>
          <p>
            Sunshine's experience spans across Asia and the Middle East, making her a recognizable face on and off the stage. As an emcee, she is known for her warm energy, clear articulation, and ability to connect with any audience. Today, Sunshine continues to shine—not just as a model, but as a voice and brand that empowers, inspires, and dazzles.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {storyData.videos.map((video, index) => (
            <div key={index} className={`space-y-4 border ${theme === 'dark' ? 'border-white/10' : 'border-brown/30'} rounded-xl p-4`}>
              <div className={`aspect-video ${theme === 'dark' ? 'bg-[#350006]/50' : 'bg-cream'} rounded-lg overflow-hidden`}>
                <div className="relative w-full h-full">
                  {playingIndex === index ? (
                    <ReactPlayer
                      ref={(el) => (playersRef.current[index] = el)}
                      url={video.url}
                      width="100%"
                      height="100%"
                      playing
                      controls
                      playsinline
                      onPlay={() => handlePlay(index)}
                      config={{
                        youtube: {
                          playerVars: { modestbranding: 1 }
                        }
                      }}
                      className="absolute top-0 left-0"
                    />
                  ) : (
                    <img
                      src={`https://img.youtube.com/vi/${getYouTubeId(video.url)}/hqdefault.jpg`}
                      alt={`Thumbnail for ${video.title}`}
                      className="w-full h-full object-cover cursor-pointer"
                      onClick={() => handlePlay(index)}
                    />
                  )}
                </div>
              </div>
              <div className="space-y-2 p-4 text-center lg:text-left">
                <h3 className={`text-xl font-serif ${theme === 'dark' ? 'text-white' : 'text-brown'} font-medium`}>{video.title}</h3>
                <p className={`${theme === 'dark' ? 'text-white/80' : 'text-brown/80'} leading-relaxed`}>{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
