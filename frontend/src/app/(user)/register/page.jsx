'use client'
import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import toast from 'react-hot-toast'
import axios from 'axios'




const RegisterSchema = Yup.object().shape({

    title : Yup.string()
    .min(2,'title must be at least 2 characters')
    .max(50,'title must be at must 50 characters')
    .required('title is required'),

  firstname : Yup.string()
  .min(2,'name must be at least 2 characters')
  .max(50,'name must be at must 50 characters')
  .required('first name is required'),

  secondname : Yup.string()
  .min(2,'name must be at least 2 characters')
  .max(50,'name must be at must 50 characters')
  .required('second name is required'),

  position : Yup.string()
  .min(2,'position name must be at least 2 characters')
  .max(50,'position name must be at must 50 characters')
  .required('position is required'),

  company : Yup.string()
  .min(2,'name must be at least 2 characters')
  .max(50,'name must be at must 50 characters')
  .required('company is required'),

  business : Yup.string()
  .min(2,'name must be at least 2 characters')
  .max(50,'name must be at must 50 characters')
  .required('business is required'),

  employees : Yup.string()
  .min(2,'name must be at least 2 characters')
  .max(50,'name must be at must 50 characters')
  .required('employees is required'),

   street : Yup.string()
  .min(2,'name must be at least 2 characters')
  .max(50,'name must be at must 50 characters')
  .required('street is required'),

  additionalinformation : Yup.string()
  .min(2,'name must be at least 2 characters')
  .max(50,'name must be at must 50 characters')
  .required('additional information is required'),

  zipcode : Yup.string()
  .min(2,'name must be at least 2 characters')
  .max(50,'name must be at must 50 characters')

  .required('zip code is required'),

  place : Yup.string()
  .min(2,'name must be at least 2 characters')
  .max(50,'name must be at must 50 characters')
  .required('place is required'),

  country : Yup.string()
  .min(2,'name must be at least 2 characters')
  .max(50,'name must be at must 50 characters')
  .required('country is required'),

    tel : Yup.string()
    .min(10,'phone number at least 10 number')
    .required('phone number is required'),

  email : Yup.string()
  .email('please enter a vaild email address')
  .required('email is requried'),

 


})

const Register = () => {

    
//   const router = useRouter()

  const registerForm = useFormik({
    initialValues : {
        title : '',
        firstname: '',
        secondname: '',
        position : '',
        company : '',
        business : '',
        employees : '',
        street : '',
        additionalinformation : '',
        zipcode : '',
        place : '',
        country : '',
        tel : '',
        email: '',
    },

    onSubmit : (values,{resetForm}) => {
      console.log(values);

      axios.post('http://localhost:5000/register/add',values)

      .then((response) => {
        console.log(response.status)
        resetForm()
        toast.success('use added successfully')
        // router.push('/login')
      }).catch((err) => {
        console.log(err)
        toast.error('failed to add user')
        
      });
      // resetForm()
      // toast.success("signin successfully")
      
    },
    validationSchema : RegisterSchema
  }) 
  return (
    <div>
        <h1 className='text-center text-4xl font-extrabold'>Register</h1>
        <form onSubmit={registerForm.handleSubmit} action="">
    <div className='min-h-screen flex justify-center items-center  '>
    
        <div className='bg-white flex md:flex-row flex-col rounded-2xl shadow-lg '>

            {/* first div  */}
             {/* form  */}
            
  

            <div className='bg-white  lg:w-1/2 p-5 '> 
                <h1 className='text-blue-600 text-2xl mb-5'>General infomation</h1>

               
                
             <div >
                

{/* title  */}
<div className='w-full mb-5'>
    {registerForm.errors.title && registerForm.touched.title ? (
        <div className='text-red-500 text-sm'>{registerForm.errors.title}</div>
    ): null }
<input onChange={registerForm.handleChange} value={registerForm.values.title} className='w-full p-2 rounded border-2 border-black' type="text" name="title"  placeholder='title'/>
</div>


{/* name  */}

<div className='flex mb-5 gap-3 '>

    <div >
    {registerForm.errors.firstname && registerForm.touched.firstname ? (
        <div className='text-red-500 text-sm'>{registerForm.errors.firstname}</div>
    ): null }
        <input onChange={registerForm.handleChange} value={registerForm.values.firstname}  className='rounded border-2 p-2 border-black' type="text" name="firstname" placeholder='first name' /></div>
    <div>
    {registerForm.errors.secondname && registerForm.touched.secondname ? (
        <div className='text-red-500 text-sm'>{registerForm.errors.secondname}</div>
    ): null }
        <input onChange={registerForm.handleChange} value={registerForm.values.secondname} className='rounded border-2 p-2 border-black' type="text" name="secondname" placeholder='last name' /></div>
</div>

{/* position */}



<div className=' mb-5'>
{registerForm.errors.position && registerForm.touched.position ? (
        <div className='text-red-500 text-sm'>{registerForm.errors.position}</div>
    ): null }

    <input onChange={registerForm.handleChange} value={registerForm.values.position}  className='w-full p-2 rounded border-2 border-black' type="text" name="position"  placeholder='postion' />


</div>

{/* company  */}

<div className=' mb-5'>
{registerForm.errors.company && registerForm.touched.company ? (
        <div className='text-red-500 text-sm'>{registerForm.errors.company}</div>
    ): null }
    <input onChange={registerForm.handleChange} value={registerForm.values.company}  className='w-full p-2 rounded border-2 border-black' type="text" name="company" placeholder='company' />
</div>


{/* business & employees  */}

<div className='flex mb-5 gap-3'>
    <div>
    {registerForm.errors.business && registerForm.touched.business ? (
        <div className='text-red-500 text-sm'>{registerForm.errors.business}</div>
    ): null }
        <input onChange={registerForm.handleChange} value={registerForm.values.business}  className='rounded p-2 border-2 border-black' type="text" name="business" placeholder='business ' />
    </div>

    {/* employees  */}

    <div>
    {registerForm.errors.employees && registerForm.touched.employees ? (
        <div className='text-red-500 text-sm'>{registerForm.errors.employees}</div>
    ): null }
   <input onChange={registerForm.handleChange} value={registerForm.values.employees}  className='rounded p-2 border-2 border-black' type="text" name="employees" placeholder='employees' />
    </div>
   </div>








  </div>

                
                 
           </div>


           {/* second div  */}

            <div className='bg-blue-800 lg:w-1/2 p-5 text-white '> 
                <h1 className='text-2xl mb-5'>Contact details</h1>

                
                    {/* street  */}

                    <div className=' mb-5'>
                    {registerForm.errors.street && registerForm.touched.street ? (
        <div className='text-red-500 text-sm'>{registerForm.errors.street}</div>
    ): null }
                        <input onChange={registerForm.handleChange} value={registerForm.values.street}  className='w-full p-2 text-white rounded border-2 border-white bg-blue-800' type="text" name="street" placeholder='street + nr' />
                    </div>


                    {/* additional information  */}

                    <div className='mb-5' >
                    {registerForm.errors.additionalinformation && registerForm.touched.additionalinformation ? (
        <div className='text-red-500 text-sm'>{registerForm.errors.additionalinformation}</div>
    ): null }
                        <input onChange={registerForm.handleChange} value={registerForm.values.additionalinformation}  className='w-full p-2 text-white rounded border-2 border-white bg-blue-800' type="text " name="additionalinformation" placeholder='additional information' />

                    </div>

                    {/* zip code & place  */}

                    <div className=' flex mb-5 gap-3'>
                        <div>
                        {registerForm.errors.zipcode && registerForm.touched.zipcode ? (
        <div className='text-red-500 text-sm'>{registerForm.errors.zipcode}</div>
    ): null }
                            <input onChange={registerForm.handleChange} value={registerForm.values.zipcode}   className=' text-white p-2 rounded border-2 border-white bg-blue-800' type="text" name="zipcode" placeholder='zip code' />

                        </div>

                        {/* place  */}
                        <div>
                        {registerForm.errors.place && registerForm.touched.place ? (
        <div className='text-red-500 text-sm'>{registerForm.errors.place}</div>
    ): null }
                            <input onChange={registerForm.handleChange} value={registerForm.values.place}  className=' text-white p-2 rounded border-2 border-white bg-blue-800' type="text" name="place" placeholder='place' />
                        </div>
                    </div>


                    {/* country  */}


                    <div className='mb-5'>
                    {registerForm.errors.country && registerForm.touched.country ? (
        <div className='text-red-500 text-sm'>{registerForm.errors.country}</div>
    ): null }
                        <input onChange={registerForm.handleChange} value={registerForm.values.country}  className='w-full p-2 text-white rounded border-2 border-white bg-blue-800' type="text" name="country" placeholder='country' />
                    </div>

                    {/* code & phone number  */}

                    <div className='flex mb-5 gap-5'>
                        <div>
                        <select className='px-6 text-white rounded border-2 border-white bg-blue-800' >
            <option >code +</option>
            <option>91</option>
            


           </select>

                        </div>
                        {/* phone  */}

                        <div>
                        {registerForm.errors.tel && registerForm.touched.tel ? (
        <div className='text-red-500 text-sm'>{registerForm.errors.tel}</div>
    ): null }
                            <input onChange={registerForm.handleChange} value={registerForm.values.tel}  className='px-8 p-2 text-white rounded border-2 border-white bg-blue-800' type="tel" name="tel" placeholder='phone number' />

                        </div>
                    </div>

                    {/* you email  */}


                    <div className='mb-5'>
                    {registerForm.errors.email && registerForm.touched.email ? (
        <div className='text-red-500 text-sm'>{registerForm.errors.email}</div>
    ): null }
                        <input onChange={registerForm.handleChange} value={registerForm.values.email}  className='w-full p-2  text-white rounded border-2 border-white bg-blue-800' type="text" name="email" placeholder='email' />

                    </div>

                    {/* checkbox  */}

                    <div className='flex mb-5'>
                        <div>
                        <input type="checkbox" />

                        </div>

                        <div>
                        <p>acept term </p>

                        </div>
                       
                        
                    </div>
                    <div >
                    <button type='submit' className='bg-white hover:bg-blue-950 text-black hover:text-white rounded-xl p-3'>register</button>

                    </div>


                    

                

            </div>

            
        </div>
        
    </div>
    </form>
    </div>
  )
}

export default Register