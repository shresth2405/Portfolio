"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
// import Help from "@/components/Help.jsx";
import Command from "@/components/Command";
import TextType from "@/utils/TypingText";
import Loader from "@/components/Loader";
import BackgroundAudio from "@/components/Audio";

export default function Home() {

  const [loading, setLoading] = useState(true);
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <BackgroundAudio />
      <div className="flex ">
        {/* Shared responsive size between skeleton and image */}
        <div className="relative w-[80px] md:w-[200px] lg:w-[300px] flex-shrink-0">
          {/* Skeleton — same responsive width, auto height via aspect ratio */}
          {!imgLoaded && (
            <div className="animate-pulse bg-gray-800 rounded w-full aspect-[2/1]" />
          )}
          {/* Image always in DOM so onLoad fires reliably */}
          <Image
            src={"/assets/batman1.png"}
            width={400}
            height={200}
            alt="batman"
            onLoad={() => setImgLoaded(true)}
            className="w-full h-auto"
            style={{
              opacity: imgLoaded ? 1 : 0,
              // transition: "opacity 0.3s ease",
              position: imgLoaded ? "static" : "absolute",
              top: 0,
              left: 0,
            }}
          />
        </div>

        <div className=" flex flex-col justify-between text-[8px] md:text-xl lg:text-2xl mt-3 lg:mt-7 font-ethnocentric font-light text-gray-400">

          <TextType
            text={["Welcome to the bat computer....", "This is Shresth's terminal-styled Portfolio"]}
            typingSpeed={75}
            pauseDuration={1500}
            textColors={["#9ca3af"]}
            showCursor={true}
            cursorCharacter="|"
            className="text-gray-400 font-light max-w-2xl"
          />
          <div>
            <div>
              Accessing Batcomputer for the first time? Type <span className="text-green-400">"Help"</span> to reveal available commands and navigate the darkness.
            </div>

          </div>
        </div>
      </div>
      <div className="mt-4"></div>
      <Command />
    </>
  );
}
