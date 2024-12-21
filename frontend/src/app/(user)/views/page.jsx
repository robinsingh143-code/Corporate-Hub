'use client';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import axios from 'axios';

const Views = () => {

    const [org, setOrg] = useState([]);


    const fetchOrgData = () => {
        axios.get('http://localhost:5000/hubp/getall')
            .then((result) => {
                setOrg(result.data)
                // toast.success('successfully fetch data');
            }).catch((err) => {
                console.log(err)
                toast.error('error fetching fileupload data');
            });

    };

    useEffect(() => {
        fetchOrgData();
    })



    return (
        // <div className='bg-slate-100'>
        //     <div className='pl-24 py-10'>
        //         <h2 className='text-6xl font-semibold'>Corporate Hub</h2>
        //     </div>
        //     <div className='grid mx-24 px-10 gap-8 py-8 grid-cols-1 md:grid-cols-3'>
        //         {org.map((fill) => (
        //             <div className='bg-white shadow-xl rounded-lg px-20 py-8'>
        //                 <div className='py-3 flex justify-center items-center'>
        //                     <img src={fill.imgurl} alt="" className='h-24 w-28' />
        //                 </div>
        //                 <h2 className='text-center'>{fill.title}</h2>
        //                 <p className='text-center text-sm text-gray-600'>{fill.description}</p>
        //             </div>
        //         ))}
        //     </div>
        // </div>

        <div className='p-10 gap-3'>
        <h1 className='text-center text-3xl front-bold mb-8'>
            corporate hub

        </h1>
        <div className='flex flex-wrap mx-auto '>


        { org.map((fill) => (
            <div className='w-full md:w-1/3 mb-6 p-3'>
                {/* <Link href="view"> */}
                <div className='rounded-lg shadow-lg'>
                    <img className='w-full h-48 object-cover rounded-lg' src={fill.imgurl} alt="img" />

                </div>
                <h3 className='p-4'>{fill.title}</h3>
                <hr />
                <p>{fill.description}</p>
                {/* </Link> */}
            </div>
        ))}
          


        </div>
    </div>


    )
}

export default Views