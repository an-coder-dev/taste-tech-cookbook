
import React from 'react';
import { Play, Volume2 } from 'lucide-react';

interface VideoHeroProps {
  title: string;
  subtitle: string;
  videoUrl: string;
  type: 'recipe' | 'drink';
}

const VideoHero = ({ title, subtitle, videoUrl, type }: VideoHeroProps) => {
  return (
    <div className="relative h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden mb-8 hunger-glow">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 video-overlay flex items-center justify-center">
        <div className="text-center text-white space-y-4">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Play className="h-12 w-12 text-white animate-pulse" />
            <Volume2 className="h-8 w-8 text-white/80" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight drop-shadow-lg">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
            {subtitle}
          </p>
          <div className="flex items-center justify-center space-x-2 text-sm text-white/80">
            <span className="px-3 py-1 bg-white/20 rounded-full backdrop-blur-sm">
              {type === 'recipe' ? '🍳 Cooking' : '🍹 Mixing'} Videos
            </span>
            <span className="px-3 py-1 bg-white/20 rounded-full backdrop-blur-sm">
              HD Quality
            </span>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />
    </div>
  );
};

export default VideoHero;

