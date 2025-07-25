import React from 'react'
import Image from 'next/image'

function About() {
  return (
    <div className='flex gap-5 justify-between'>
      <Image
        src={"/assets/me.jpeg"}
        width={170}
        height={200}
        className='rounded-3xl'
        alt='me'
      />
      <span className='font-extrabold font-genesix  text-gray-400 text-3xl'>
        I’m Shresth Maheshwari — engineer by day, coder by night, and maybe, just maybe, the Batman of debugging. Currently enrolled in a humble little institution called NIT Hamirpur (you might’ve heard of it), I juggle an integrated B.Tech + M.Tech in Electronics and Communication Engineering while secretly building full-stack web apps that could probably save Gotham. Whether it's taming blockchain beasts, crafting terminal interfaces, or making bots that go places no one asked them to, I'm always lurking in the shadows... of my code editor. I don’t need superpowers — just Git, React, and maybe a dark hoodie. Alfred handles deployment. Obviously.
      </span>
    </div>
  )
}

export default About