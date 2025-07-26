import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TerminalProvider } from "@/context/TerminalContext.jsx";
import Image from "next/image";
import localFont from 'next/font/local';
import BackgroundAudio from "@/components/Audio";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// const batman = localFont({
//   src: [
//     {
//       path: '../public/fonts/batmfo__.ttf',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: '../public/fonts/batmfo__.ttf',
//       weight: '700',
//       style: 'normal',
//     },
//   ],
//   variable: '--font-batman', // Optional: if using CSS variables
//   display: 'swap',          // Optional: improves rendering behavior
// });

const ethnocentric = localFont({
  src: [
    {
      path: '../public/fonts/Ethnocentric-Rg.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../public/fonts/Ethnocentric-Rg.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-ethnocentric', // Optional: if using CSS variables
  display: 'swap',          // Optional: improves rendering behavior
});
const genesix = localFont({
  src: [
    {
      path: '../public/fonts/Megatrans-Regular.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../public/fonts/Megatrans-Regular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-genesix', // Optional: if using CSS variables
  display: 'swap',          // Optional: improves rendering behavior
});
// const ethnocentric = localFont({
//   src:{
//     path:"../public/fonts/Ethnocentric Rg It.otf"
//   },
//   variable: '--font-ethnocentric',
//   display: 'swap',
// })

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PortFolio",
  description: "Terminal based PortFolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={` ${ethnocentric.variable} ${genesix.variable}`}>
      <body
        className='border-2 border-t-8 border-gray-400 w-full overflow-x-hidden'
      >

        <div className="overflow-auto">
          {/* <Image
            src={"/assets/batman.png"}
            width={1000}
            height={1000}
            className="absolute z-[-1] opacity-8 ml-[25%]"
            alt="batman"
          /> */}
          <TerminalProvider>
            {children}
            {/* <BackgroundAudio/> */}

          </TerminalProvider>
        </div>
      </body>
    </html>
  );
}
