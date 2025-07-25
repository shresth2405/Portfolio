import React from 'react'
import Link from 'next/link'

function Resume() {
  return (
    <div>
        <div className='text-2xl'>Here is my resume....</div>
        <button className='bg-blue-950 rounded-3xl p-5 mt-5 text-2xl'>
          <Link href={"https://drive.google.com/file/d/1NNs2gD4c5RVvRHLgCFSmmskw4dov5TB5/view?usp=drive_link"} target='_blank'>DOWNLOAD CV</Link>
        </button>
    </div>
  )
}

export default Resume