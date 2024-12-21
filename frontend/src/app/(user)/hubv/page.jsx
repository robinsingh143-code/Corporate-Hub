'use client';
import React, { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast';
import { useFormik } from 'formik';

const Hubv = () => {

    const [image, setImage] = useState('');

    const upload = (e) => {

        const file = e.target.files[0];
        const fd = new FormData();
        fd.append('file', file);
        fd.append('upload_preset', 'Mernbatch8')
        fd.append('cloud_name', 'dnq9kkdqp')

        axios.post('http://api.cloudinary.com/v1_1/dnq9kkdqp/image/upload', fd)
            .then((result) => {
                toast.success('file upload successfully');
                console.log(result.data);
                setImage(result.data.url);
            }).catch((err) => {
                console.log(err)
                toast.error('failed to upload file');
            });
    }



    const corporateForm = useFormik({
        initialValues: {
            title: '',
            description: '',
            imgurl: ''
        },
        onSubmit: (values, {resetForm}) => {
            console.log(values)

            axios.post('http://localhost:5000/hubv/add', values)
            .then((result) => {
                console.log(result.status)
                resetForm()
                toast.success('Data Added Successfully')

            }).catch((err) => {
                console.log(err)
                toast.error('Failed to add Data')
            });
        }
    })








    return (
        <div className=''>
            <div className='flex justify-between items-center h-[90vh] mx-56'>
                <label
                    htmlFor="upload"
                    className='block rounded-lg text-2xl border-2 border-dashed p-5 mt-5 cursor-pointer w-7/8'> click here to upload file</label>
                <input type="file"
                    id='upload'
                    onChange={upload}
                    hidden
                />
                <div className='w-1/2'>
                    <div className='shadow-xl rounded-lg px-16 py-12'>
                        <div>
                            <h2 className='text-lg mb-5'>
                                Upload Corporate Data
                            </h2>
                        </div>
                        <form onSubmit={corporateForm.handleSubmit}>
                            <div className='py-5'>
                                <input type="text"
                                    className='w-full border p-2 rounded-lg '
                                    id='title'
                                    onChange={corporateForm.handleChange}
                                    value={corporateForm.values.title}
                                    placeholder='Name'
                                />
                            </div>
                            <div className='pb-5'>
                                <input type="text"
                                    className='w-full border p-2 rounded-lg '
                                    id='description'
                                    onChange={corporateForm.handleChange}
                                    value={corporateForm.values.description}
                                    placeholder='Description'
                                />
                            </div>
                            <div>
                                <input type="text"
                                    className='w-full border p-2 rounded-lg '
                                    id='imgurl'
                                    onChange={corporateForm.handleChange}
                                    value={corporateForm.values.imgurl}
                                    placeholder='Image url'
                                />
                            </div>
                            <div className='mt-7 w-full flex justify-center'>
                                <button type='submit' className='bg-blue-500 w-full text-center p-3 rounded-lg hover:bg-blue-700'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hubv
