"use client";
import { useEffect, useRef } from "react";

export default function BackgroundAudio() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.3; // adjust volume
      audio.play().catch((e) => {
        console.warn("Autoplay failed:", e.message);
      });
    }
  }, []);

  return (
    <audio ref={audioRef} loop autoPlay hidden>
      <source src="/assets/bg.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
}
