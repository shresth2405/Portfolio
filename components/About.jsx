// components/Identity.jsx
"use client";
import React from "react";
import TextType from "../utils/TypingText"; // Ensure correct path


const About = () => {
  return (
    <div className=" font-genesix font-light text-[8px] md:text-xl lg:text-2xl whitespace-pre-wrap px-2 text-gray-400">
      <div><span className="text-[#D2B301]">QUERY: Subject Profile-</span> <span className="font-bold text-gray-400"> "Shresth Maheshwari"</span></div>

      <div className="text-[#D2B301] mt-5">[IDENTITY CONFIRMED]  </div>
      <div className="text-gray-400 flex"><h1 className="text-[#D2B301]">[CLASSIFICATION:</h1> HIGH-POTENTIAL OPERATIVE]</div>
      <div className="text-gray-400 flex"><h1 className="text-[#D2B301]">[SECURITY CLEARANCE:</h1> DEVELOPER LEVEL ∞]</div>

      <div className="flex text-gray-400 mt-5"> <h1 className="text-[#D2B301]">Name:</h1> Shresth Maheshwari  </div>
      <div className="flex text-gray-400"><h1 className="text-[#D2B301]">Alias:</h1> The Debugger </div>
      <div className="flex text-gray-400"><h1 className="text-[#D2B301]">Occupation:</h1> Engineer by day, Full-Stack Vigilante by night  </div>
      <div className="flex text-gray-400"><h1 className="text-[#D2B301]">Location:</h1> NIT Hamirpur  </div>
      <div className="flex text-gray-400"><h1 className="text-[#D2B301]">Division:</h1> Electronics & Communication — Dual Degree Program (B.Tech + M.Tech)</div>

      <ol className="mt-5 text-gray-400">
        <li>- Constructs full-stack web applications — believed to aid Gotham-level scalability.</li>
        <li>- Crafts terminal-based interfaces with eerie precision.</li>
        <li>- Tames blockchain networks — no cape required.</li>
      </ol>

      <ol className="mt-5 text-gray-400">
        <div className="text-[#D2B301]">Tools Detected:</div>
        <li>- Git (Version Control Batarang)</li>
        <li>- React (Component Grappling Hook)</li>
        <li>- Next.js, Solidity, TailwindCSS (Multi-tool Arsenal)</li>
        <li>- Hoodie (Stealth Mode: Enabled)</li>
      </ol>

      <div className="mt-5">[STATUS: ACTIVE] </div>
      <div>[RECOMMENDATION: Keep watching — this one prefers to operate from the shadows.]</div>


      <div>[:: END TRANSMISSION ::]</div>
    </div>
  );
};

export default About;
