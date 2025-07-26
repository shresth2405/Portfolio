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

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000); // Adjust time as needed
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
  <BackgroundAudio/>
      <div className="flex ">
        <div className="size-fit">
          <Image
            src={"/assets/batman1.png"}
            width={400}
            height={200}
            alt="batman"
          >
          </Image>
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
