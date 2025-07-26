// components/Loader.jsx
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Loader() {
    const [dots, setDots] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            setDots((prev) => (prev.length < 3 ? prev + "." : ""));
        }, 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="fixed top-0 h-screen  text-yellow-500 left-[5%] sm:left-[10%] md:left-[15%] lg:left-[30%] flex items-center text-[14px] md:text-2xl font-ethnocentric z-50">
                <div className="relative">
                    <p>Initializing Batcomputer{dots}</p>
                    <p className="text-[10px] md:text-xl  mt-2 text-gray-400">Please stand by...</p>
                </div>
            </div>
        </>
    );
}
