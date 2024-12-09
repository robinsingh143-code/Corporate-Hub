import React from 'react'
import Data from './dumidata'

const Listing = () => {


    const displayCards = () => {
        return Data.map((item) => (
            <div className='w-full md:w-1/3 mb-6 p-3'>
                <div className='rounded-lg shadow-lg'>
                    <img className='w-full h-48 object-cover rounded-lg' src={item.img} alt="img" />

                </div>
                <h3 className='p-4'>{item.heading}</h3>
                <hr />
                <p>{item.about}</p>
            </div>
        ))
    }
  return (
    <div className='p-10 gap-3'>
        <h1 className='text-center text-3xl front-bold mb-8'>
            corporate hub

        </h1>
        <div className='flex flex-wrap mx-auto '>
           {displayCards()}
        </div>
    </div>
  )
}

export default Listing 