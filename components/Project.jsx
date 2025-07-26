'use client'
import React, { useState } from 'react';
import Link from 'next/link';

function Project() {
  const [showMore, setShowMore] = useState({
    civicLedger: false,
    teamVibhav: false,
    youtube: false
  });

  const toggleReadMore = (key) => {
    setShowMore((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="font-genesix text-gray-400  text-[8px] md:text-xl lg:text-2xl">
      <ol className="flex flex-col gap-6">
        {/* <div className="text font-semibold mb-2">Some of my projects:</div> */}

        {/* Project 1 - CivicLedger */}
        <li>
          <h1 className="font-light text-yellow-400">1. CivicLedger</h1>
          <p className=" font-light">
            {showMore.civicLedger ? (
              <>
                Developed a robust full-stack web application aimed at streamlining the government tender process by enhancing transparency and accountability. The platform empowers citizens to view, track, and monitor tender statuses in real-time. By integrating smart contracts on the Polygon blockchain, it ensures data integrity, decentralization, and security. The frontend features a modern, responsive, and intuitive user experience built with React, Tailwind CSS, and Framer Motion for smooth transitions and animations. This system bridges the gap between public systems and citizen involvement through an accessible digital interface.<br />
                <strong>Technologies Used:</strong> JavaScript, React, Next.js, Solidity, Tailwind CSS, Framer Motion, Polygon RPC.
              </>
            ) : (
              <>
                Developed a full-stack tender tracking system to improve transparency and empower citizens...{' '}
              </>
            )}
            <button onClick={() => toggleReadMore('civicLedger')} className="text-[#1a80a5] underline ml-2">
              {showMore.civicLedger ? 'Read less' : 'Read more'}
            </button>
          </p>
          <div className="flex gap-8 font-light mt-2">
            <Link href="https://github.com/shresth2405/contracker1/tree/main" target="_blank" className='hover:text-blue-400'>Github</Link>
            <Link href="https://contracker-six.vercel.app/" target="_blank"  className='hover:text-blue-400'>Live demo</Link>
          </div>
        </li>

        {/* Project 2 - Team Vibhav */}
        <li>
          <h1 className="text font-light text-yellow-400">2. Team Vibhav Official Site</h1>
          <p className=" font-light">
            {showMore.teamVibhav ? (
              <>
                Designed and developed the official website for Team Vibhav as part of Nimbus 2k25, focusing on responsive design and seamless navigation across all devices. The site highlights previous events, projects, and announcements using dynamic and reusable frontend components. Enhanced user engagement through interactive layouts, smooth animations, and modular UI elements crafted with modern web technologies.<br />
                <strong>Technologies Used:</strong> HTML, CSS, JavaScript, React.js, Tailwind CSS, Framer Motion.
              </>
            ) : (
              <>
                Developed the official website for Team Vibhav during Nimbus 2k25 using React and Tailwind...{' '}
              </>
            )}
            <button onClick={() => toggleReadMore('teamVibhav')} className="text-[#1a80a5] underline ml-2">
              {showMore.teamVibhav ? 'Read less' : 'Read more'}
            </button>
          </p>
          <div className="flex gap-8 font-light mt-2">
            <Link href="https://github.com/shresth2405/Vibhav_2k25/tree/main" target="_blank" className='hover:text-blue-400'>Github</Link>
            <Link href="https://vibhav-2k25-theta.vercel.app/" target="_blank" className='hover:text-blue-400'>Live demo</Link>
          </div>
        </li>

        <li>
          <h1 className="font-light text-yellow-400">3. Youtube</h1>
          <p className=" font-light">
            {showMore.youtube ? (
              <>
                Developed a YouTube-like backend system supporting video uploads, playback, authentication, comments, and subscriptions. Designed secure and scalable REST APIs with Node.js, Express, and MongoDB. Integrated JWT for user authentication and ensured optimized data handling for concurrent traffic.


                <strong>Technologies Used:</strong>Node.js, Express.js, MongoDB, JWT, Multer, Cloudinary.
              </>
            ) : (
              <>
               Developed a YouTube-like backend system supporting video uploads, playback, authentication...{' '}
              </>
            )}
            <button onClick={() => toggleReadMore('youtube')} className="text-[#1a80a5]  underline ml-2">
              {showMore.youtube ? 'Read less' : 'Read more'}
            </button>
          </p>
          <div className="flex gap-8 font-light mt-2">
            <Link href="https://github.com/shresth2405/Backend-Project" target="_blank"  className='hover:text-blue-400'>Github</Link>
            {/* <Link href="https://contracker-six.vercel.app/" target="_blank">Live demo</Link> */}
          </div>
        </li>

        {/* Add more projects below */}
      </ol>
    </div>
  );
}

export default Project;
