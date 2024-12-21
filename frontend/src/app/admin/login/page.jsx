'use client'
import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useRouter } from 'next/navigation'


const LoginSchema = Yup.object().shape({

  email: Yup.string()
    .email('please enter a vaild email address')
    .required('email is requried'),

  password: Yup.string()
    .min(8, 'password must be at least 8 characters')
    .matches(/[a-z]/, 'password must contain at least ane lowercase letter')
    .matches(/[A-Z]/, 'password must contain at least one uppercase letter')
    .matches(/[0-9]/, 'password must conatin at least one number')
    .matches(/[!@#$%^&*()_+{}|:"<>?[',.]/, 'password must conatain at least one charracter')
    .required('password is required'),
})


const Login = () => {

    const router = useRouter()
  
    const loginForm = useFormik({
      initialValues : {
        name : '',
        email : '',
        password : '',
      },
  
      onSubmit : (values,{resetForm}) => {
        console.log(values);
  
        axios.post('http://localhost:5000/adminuser/add',values)
  
        .then((response) => {
          console.log(response.status)
          resetForm()
          toast.success('use added successfully')
          router.push('/admin')
        }).catch((err) => {
          console.log(err)
          toast.error('failed to add user')
          
        });
        // resetForm()
        // toast.success("signin successfully")
        
      },
      validationSchema : LoginSchema
    }) 





  return (
    <div className='bg-white flex justify-center items-center h-screen'>
        <div className='bg-white flex md:flex-row flex-col border max-w-3xl p-5 border-gray-200'>
         {/* admin profile  */}  

        <div className=' items-center  lg:w-1/2 p-5 m-2'>
        <h1 className='font-bold text-center mb-5  ' >admin profile</h1>
            <div className='rounded-full w-28 h-28 border-2  border-white bg-gray-400 shadow-lg'>


                

            </div>
            <div className='m-2'><input className='text-center' type="text" placeholder='profile' /></div>
        </div>

            {/* admin login  */}


            <div className='lg:w-1/2  p-5'>
                <h1 className='font-bold text-center mb-5 '>admin login</h1>
                <form onSubmit={loginForm.handleSubmit} action="">
                    <div className=' mb-5'>
                    {loginForm.errors.email && loginForm.touched.email ? (
                <div className='text-red-500 text-sm'>{loginForm.errors.email}</div>
              ) : null}
                        <input
                         onChange={loginForm.handleChange}
                value={loginForm.values.email} className='border-2 border-black w-full ' type="text" name="email" placeholder='email' />

                    </div>
                    <div className=''>
                    {loginForm.errors.password && loginForm.touched.password ? (
                  <div className='text-red-500 text-sm'>{loginForm.errors.password}</div>
                ) : null}

                        <input
                         onChange={loginForm.handleChange}
                  value={loginForm.values.password} className='border-2 border-black w-full' type="text" name="password" placeholder='password'/>

                    </div> 
                    <div className=' mt-5 text-center'>
                        <button className='p-2 bg-orange-800'>admin login</button>
                    </div>

                </form>
            </div>



           
        </div>

    </div>
  )
}

export default Login