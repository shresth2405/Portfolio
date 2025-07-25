"use client"
import { useState } from "react";
import Image from "next/image";
// import Help from "@/components/Help.jsx";
import Command from "@/components/Command";
export default function Home() {

 

  return (
    <>
    <div className="flex justify-center items-center">
      <div>
        <Image
          src={"/assets/batman1.png"}
          width={400}
          height={500}
          alt="batman"
        >
        </Image>
      </div>
      <div className="p-2 text-3xl font-ethnocentric font-extrabold text-gray-400">
        How did you get to the BATCAVE....?
        <br /> This is BATMAN and this is my terminal-styled Portfolio
        <br />Ok I will tell you my secret Identity
        <br />Only if you type "identity"
      </div>
    </div>
    <div className="mt-4"></div>
    <Command/>
    </>
  );
}
