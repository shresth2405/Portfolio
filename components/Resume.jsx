import React from 'react'
import Link from 'next/link'

function Resume() {
  return (
    <div>
        <div className='text-[8px] md:text-xl lg:text-2xl font-genesix text-gray-400'>Here is my resume....</div>
        <button className=' rounded-3xl text-[8px] md:text-xl lg:text-2xl font-genesix text-gray-400 hover:text-gray-300'>
          <Link href={"https://drive.google.com/file/d/1NNs2gD4c5RVvRHLgCFSmmskw4dov5TB5/view?usp=drive_link"} target='_blank'>
            <div>+ - - - - - - - - - - - - + </div>
       <div>| Download CV |</div>
       <div>+ - - - - - - - - - - - - + </div>
          </Link>
        </button>
    </div>
  )
}

export default Resume