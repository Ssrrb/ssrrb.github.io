"use client";

import { useEffect } from "react";

// Videos inside a post's HTML: Safari does not autoplay them off-screen and does not
// retry once they scroll into view, so play each one when it is visible.
export function PostVideos() {
  useEffect(() => {
    const videos = document.querySelectorAll<HTMLVideoElement>("article video[autoplay]");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const { target, isIntersecting } of entries) {
          const video = target as HTMLVideoElement;
          if (isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        }
      },
      { threshold: 0.25 },
    );
    videos.forEach((v) => observer.observe(v));
    return () => observer.disconnect();
  }, []);

  return null;
}
