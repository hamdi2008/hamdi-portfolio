"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type ProjectVideoProps = {
  video: { src: string; poster: string };
  alt: string;
  sizes: string;
};

type NavigatorWithConnection = Navigator & {
  connection?: { saveData?: boolean };
};

export function ProjectVideo({ video, alt, sizes }: ProjectVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobileViewport = window.matchMedia("(max-width: 640px)").matches;
    const saveData = (navigator as NavigatorWithConnection).connection?.saveData === true;

    if (reducedMotion || mobileViewport || saveData || !containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting) setShouldLoadVideo(true);
      },
      { rootMargin: "160px 0px", threshold: 0.15 },
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const element = videoRef.current;
    if (!element) return;

    if (isInView) {
      void element.play().catch(() => {
        // The poster remains visible if a browser declines autoplay.
      });
    } else {
      element.pause();
    }
  }, [isInView, shouldLoadVideo]);

  return (
    <div className="project-video" ref={containerRef}>
      <Image src={video.poster} alt={alt} fill sizes={sizes} className="video-poster" />
      {shouldLoadVideo && (
        <video
          ref={videoRef}
          className="product-preview-video"
          src={video.src}
          poster={video.poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          tabIndex={-1}
        />
      )}
    </div>
  );
}
