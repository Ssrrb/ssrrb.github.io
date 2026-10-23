"use client";

import { useEffect, useRef } from "react";

interface Props {
  src: string;
  poster?: string;
  title: string;
}

export function ProjectVideo({ src, poster, title }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Safari does not autoplay videos that are off-screen, and it does not
    // retry once they scroll into view. Kick playback off ourselves.
    const play = () => {
      video.play().catch(() => {
        // Autoplay blocked: the poster (or first frame) stays visible.
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          play();
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(video);
    video.addEventListener("canplay", play);

    return () => {
      observer.disconnect();
      video.removeEventListener("canplay", play);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      aria-label={title}
      className="pointer-events-none mx-auto h-40 w-full object-cover object-top" // needed because random black line at bottom of video
    />
  );
}
