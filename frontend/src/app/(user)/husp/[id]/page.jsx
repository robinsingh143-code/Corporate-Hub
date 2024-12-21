'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import toast from 'react-hot-toast';

const Hubsp = () => {
    const { id } = useParams();
    const [hubpData, sethubpData] = useState(null);

    const fetchHubpData = async (values) => {
        try {
            const res = await axios.get('http://localhost:5000/hubp/getbyid/' +id, values)
            console.log(res.data)
            sethubpData(res.data)
        } catch (error) {
            toast.error("Failed to fetch project data.");
            console.error("Error fetching project data:", error);
        }
    };

    useEffect(() => {
        fetchHubpData();
    }, []);

    if (!hubpData) return <p>Loading...</p>;

    return (
        <div className='p-10 md:p-28 py-14 w-6/7'>
            <div>
                <h2 className='pb-10'>
                    <span className='underline'>2024 Program</span> | 
                    <span className='underline'>({hubpData.organization})</span>
                </h2>
                <div className='flex justify-between items-center'>
                    <div>
                        <h3 className='text-slate-500'>Contributor</h3>
                        <h2 className='text-xl'>{hubpData.contributor}</h2>
                    </div>
                    <div>
                        <button 
                            className='p-3 px-6 text-white bg-blue-600 hover:bg-blue-700 rounded-lg' 
                            onClick={() => alert("You are Successfully Enrolled!")}>
                            Enroll Now
                        </button>
                    </div>
                </div>
                <h1 className='text-5xl py-16'>{hubpData.projectName}</h1>
                <hr />
                <div className='pt-14'>
                    <h3 className='text-slate-500'>Mentor</h3>
                    <h2>{hubpData.mentor}</h2>
                </div>
                <div className='flex justify-between'>
                    <div className='pt-10'>
                        <h3 className='text-slate-500'>Organization</h3>
                        <h2>{hubpData.organization}</h2>
                    </div>
                    <div className='pt-10'>
                        <h3 className='text-slate-500'>Technologies</h3>
                        <h2>{hubpData.technologies}</h2>
                    </div>
                </div>
                <div className='pt-10'>
                    <h3 className='text-slate-500'>Topics</h3>
                    <h2>{hubpData.topics}</h2>
                </div>
                <div className='pt-14'>
                    <p>{hubpData.projectDetails}</p>
                </div>
            </div>
        </div>
    );
};

export default Hubsp;
