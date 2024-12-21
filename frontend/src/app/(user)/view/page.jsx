'use client';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import axios from 'axios';

const View = () => {

    const [org, setOrg] = useState([]);


    const fetchOrgData = () => {
        axios.get('http://localhost:5000/hub/getall')
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
        <div className='bg-slate-100'>
            <div className='pl-24 py-10'>
                <h2 className='text-6xl font-semibold'>Corporate Hub</h2>
            </div>
            <Link href="viewpages">
            <div className='grid mx-24 px-10 gap-8 py-8 grid-cols-1 md:grid-cols-3'>
                {org.map((fill) => (
                    <div className='bg-white shadow-xl rounded-lg px-20 py-8'>
                        <div className='py-3 flex justify-center items-center'>
                            <img src={fill.imgurl} alt="" className='h-24 w-28' />
                        </div>
                        <h2 className='text-center'>{fill.title}</h2>
                        <p className='text-center text-sm text-gray-600'>{fill.description}</p>
                    </div>
                ))}
            </div>
            </Link>
        </div>
    )
}

export default View