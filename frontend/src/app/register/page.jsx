import React from 'react'

const View = () => {
  return (
    <div className='p-10 md:p-28 py-14 w-6/7'>
    <div>
        <h2 className='pb-10'>
            <span className='underline'>2024 Program</span> | 
            <span className='underline'>hell</span>
        </h2>
        <div className='flex justify-between items-center'>
            <div>
                <h3 className='text-slate-500'>Contributor</h3>
                <h2 className='text-xl'>helo</h2>
            </div>
            <div>
                <button 
                    className='p-3 px-6 text-white bg-blue-600 hover:bg-blue-700 rounded-lg' 
                    >
                    Enroll Now
                </button>
            </div>
        </div>
        <h1 className='text-5xl py-16'>heloo</h1>
        <hr />
        <div className='pt-14'>
            <h3 className='text-slate-500'>Mentor</h3>
            <h2>hii</h2>
        </div>
        <div className='flex justify-between'>
            <div className='pt-10'>
                <h3 className='text-slate-500'>Organization</h3>
                <h2>what</h2>
            </div>
            <div className='pt-10'>
                <h3 className='text-slate-500'>Technologies</h3>
                <h2>ok</h2>
            </div>
        </div>
        <div className='pt-10'>
            <h3 className='text-slate-500'>Topics</h3>
            <h2>like me</h2>
        </div>
        <div className='pt-14'>
            <p>haha</p>
        </div>
    </div>
</div>
  )
}

export default View