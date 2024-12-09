'use client'
import React from 'react'
import { Slide } from 'react-awesome-reveal'
const home = () => {
  return (
 <div>
  <div className='min-h-screen bg-[url("/home.jpg")] bg-cover'>
    <div className='p-40 text-right  '>
      <Slide duration={600} direction='up' delay={200}>
      <h1 className='font-bold text-4xl uppercase my-5'>corporate hub</h1>
      
        <p className='my-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione labore vero asperiores adipisci animi dignissimos magni, quaerat distinctio quibusdam neque suscipit unde ut laboriosam accusantium vel repellat! Ipsam, laboriosam illum.</p>
        <button className='my-10 px-5 py-2 border rounded-xl bg-orange-400'>about more</button>
        </Slide>
   
    </div>


  </div>
  <p>lo</p>

 
 </div>
    
  )
}

export default home;
