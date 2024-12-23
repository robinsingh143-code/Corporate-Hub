'use client';
import React, { useEffect, useState } from 'react';
// import toast from 'react-hot-toast';
import axios from 'axios';
import Link from 'next/link';

const Views = () => {

    // const [org, setOrg] = useState([]);


    // const fetchOrgData = () => {
    //     axios.get('http://localhost:5000/hubp/getall')
    //         .then((result) => {
    //             setOrg(result.data)
    //             // toast.success('successfully fetch data');
    //         }).catch((err) => {
    //             console.log(err)
    //             toast.error('error fetching fileupload data');
    //         });

    // };

    // useEffect(() => {
    //     fetchOrgData();
    // })


    
      const [userList, setUserList]= useState([])
    
      const featchUserList = () => {
        axios.get('http://localhost:5000/hubp/getall')
        .then((res) => {
          console.log(res.status)
        //   console.table(res.data)
          setUserList(res.data)
          
        }).catch((err) => {
          console.log('failed to fetch user list')
          
        });
      }

      useEffect(( )  =>  {
          featchUserList()
        },[])


    return (
        

        <div className='p-10 gap-3'>
        <h1 className='text-center text-3xl front-bold mb-8'>
            corporate hub

        </h1>
        <div className='grid  md:grid-cols-2 lg:grid-cols-3 gap-3  '>


        { userList.map((fill) => (
            <div key={fill._id} className=' mb-6 p-2 rounded-t-lg bg-slate-600'>
                <Link href={'/hubsp/' + fill._id}>
                <div className='rounded-lg shadow-lg'>
                    <img className='w-full h-48 object-cover rounded-lg' src={fill.imgurl} alt="img" />

                </div>
                <p className='text-sm'>{fill.category}</p>
                <h3 className='p-4'>{fill.title}</h3>
                <hr />
                <div className='h-'><p >{fill.description}</p></div>
                
                </Link>
                
            </div>
        ))}
          


        </div>
    </div>


    )
}

export default Views