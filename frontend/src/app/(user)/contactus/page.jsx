'use client'
import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useRouter } from 'next/navigation'


const ContactusSchema = Yup.object().shape({

  name : Yup.string()
  .min(2,'name must be at least 2 characters')
  .max(50,'name must be at must 50 characters')
  .required('name is required'),

  company : Yup.string()
  .min(2,'company must be at least 2 characters')
  .max(50,'comapany must be at must 50 characters')
  .required('company is required'), 

  email : Yup.string()
  .email('please enter a vaild email address')
  .required('email is requried'),

  tel : Yup.string()
  .min(10,'phone number at least 10 number')
  .required('phone number is required'),

  subject : Yup.string()
  .min(2,'subject must be at least 2 characters')
  .max(50,'subject must be at must 50 characters')
  .required('subject is required'), 
   

  message : Yup.string()
  .min(1, 'massage must be at least 1 characters')
  .max(350,'massage must be  at must 350 characters')
  .required('massage is required'),

})


const Contactus = () => {

  const router = useRouter()
  
  const contactusForm = useFormik({
    initialValues : {
      name : '',
      company:'',
      email : '',
      tel : '',
      subject : '',
      message:''   
    },

    onSubmit : (values,{resetForm}) => {
      console.log(values);

      axios.post('http://localhost:5000/contactus/add', values)
      .then((response) => {
        console.log(response.status)
        resetForm()
        toast.success('successfully Send')
        router.push('/')
      }).catch((err) => {
        console.log(err)
        toast.error('failed to Send message')
        
      });
      
      // resetForm()
      // toast.success("successfully")

    },
    validationSchema : ContactusSchema
  })


  return (
    <div>
        <div >

            <div className='m-20 flex md:flex-row flex-col '>
                <div className='m-20 basis-[40%] md:order-1 order-1'>
                    <h1 className='mb-8 text-4xl text-blue-900 font-serif '>Get in touch</h1>
                    <p className='mb-8 text-gray-500'>Connect with us now for inquiries and <br /> assistance</p>

                    <hr />

                    <div>
                      {/* head office  */}
                      <div className='my-5 flex '>
                        <div className='mr-5'>img location</div>
                        <div><h1 className='text-blue-900 text-xl font-serif '>Head Office</h1>
                        <p>address</p></div>
                      </div>
                      {/* Email us  */}

                      <div className='my-5 flex '>
                        <div className='mr-5'>img location</div>
                        <div><h1 className='text-blue-900 text-xl font-serif'>Email us</h1>
                        <p>address</p></div>
                      </div>
                      {/* Call us  */}

                      <div className='my-5 flex '>
                        <div className='mr-5'>img location</div>
                        <div><h1 className='text-blue-900 text-xl font-serif'>Call us</h1>
                        <p>address</p></div>
                      </div>
                      
                     

                    </div>
                    <hr />
                    {/* social conatact  */}

                    <div>
                      <div><h2 className='my-5 text-blue-900 text-2xl font-serif '>Follow on social</h2> </div>
                      <div>
                        <span>f</span>
                        <span>insta</span>
                        <span>in</span>
                      </div>
                      
                    </div>
                </div>

                {/* form section  */}


                {/* send massage  */}
                <div className='m-18 basis-[60%] md:order-1 order-2'>
                  <div className='pt-16 pl-[48px] pr-5 border-[2px] border-black'>
                    <h1 className='mb-8 text-4xl text-blue-900 font-serif'>Send us a message</h1>
                  <form onSubmit={contactusForm.handleSubmit}  action="">
                    <div>
                      {/* name and company  */}
                      <div className='flex md:flex-row flex-col'>
                        <div className='lg:w-1/2'>
                          <div className='mb-2 '>
                          <label htmlFor="" className='w-full  text-gray-500'>Name</label>

                          </div>
                          {contactusForm.errors.name && contactusForm.touched.name ?(
                            <div className='text-red-500 text-sm'>
                              {contactusForm.errors.name }

                            </div>
                          ): null}
                          <div className='mb-2 mr-8'>
                          <input 
                          onChange={contactusForm.handleChange} 
                          value={contactusForm.values.name}  
                          className='px-5 py-2 w-full border-2 border-black' type="text" name="name" placeholder='Name'/>

                          </div>
                        
                       

                        </div>
                        <div className='lg:w-1/2 '>
                          <div className='mb-2'>
                          <label htmlFor="" className='text-gray-500'>Company</label>

                          </div>
                          {contactusForm.errors.company && contactusForm.touched.company ?(
                            <div className='text-red-500 text-sm'>
                              {contactusForm.errors.company }
                            </div>
                          ): null}
                        <div className='mb-2 mr-9'>
                        <input onChange={contactusForm.handleChange}
                        value={contactusForm.values.company} 
                        className='px-5 py-2 w-full border-2 border-black' type="text" name="company" placeholder='Company' />

                        </div>

                        </div>
                      
                     
                      </div>

                      {/* phone and email  */}

                      <div>
                        <div className='flex md:flex-row flex-col'>
                        <div className='lg:w-1/2'>
                        <div className='mb-2'>
                        <label htmlFor="" className='text-gray-500'>Phone</label>

                        </div>
                        {contactusForm.errors.tel && contactusForm.touched.tel ?(
                          <div className='text-red-500 text-sm'>
                            {contactusForm.errors.tel }
                          </div>
                        ): null }


                        <div className='mb-2 mr-8'>
                        <input onChange={contactusForm.handleChange}
                        value={contactusForm.values.tel}
                        className='px-5 py-2 w-full border-2 border-black' type="tel" name="tel" placeholder='Phone number'/>

                        </div>
                        

                        </div>
                        <div className='lg:w-1/2'>
                        <div className='mb-2'>
                        <label htmlFor="" className='text-gray-500'>Email</label>

                        </div>
                        {contactusForm.errors.email && contactusForm.touched.email ?(
                          <div className='text-red-500 text-sm '>
                            {contactusForm.errors.email }

                          </div>
                        ): null}
                        
                        <div className='mb-2 mr-9'>
                        <input 
                        onChange={contactusForm.handleChange}
                        value={contactusForm.values.email}
                        className='px-5 py-2 w-full border-2 border-black' type="text" name="email" placeholder='Email' /> 

                        </div>
                        
                        

                        </div>

                        </div>
                        </div>
                       

                        {/* subject  */}

                        <div className='mr-9'>
                          <div className='mb-2'>
                          <label htmlFor="" className='text-gray-500'>Subject</label>

                          </div>
                          {contactusForm.errors.subject && contactusForm.touched.subject ? (
                            <div className='text-red-500 text-sm'>
                              {contactusForm.errors.subject}
                            </div>
                          ): null}
                          <div className='mb-2'>
                          <input 
                          onChange={contactusForm.handleChange} 
                          value={contactusForm.values.subject}
                          className='px-4 py-2 w-full border-2 border-black' type="text" name="subject" placeholder='Subject' /> 

                          </div>
                        
                        

                        </div>

                        {/* message  */}

                        <div className='mr-9'>
                          <div className='mb-2'>
                          <label htmlFor="">Message</label>

                          </div>
                          {contactusForm.errors.message && contactusForm.touched.message ? (
                            <div className='text-red-500 text-sm'>
                             {contactusForm.errors.message}
                            </div>
                          ): null}

                          <div className='mb-2'>
                          <textarea onChange={contactusForm.handleChange}
                          value={contactusForm.values.message} className='px-4 py-2 w-full border-2 border-black' name="message" rows={3} id="message" placeholder='Message'></textarea>

                          </div>
                          
                         
                        </div >

                        {/* button  */}
                        <div className='mr-9 mb-10 text-center'>
                        <button type='submit' className='py-2 w-full border bg-blue-900 hover:bg-blue-200'>submit</button>

                        </div>

                        
                      
                     
                      


                    </div>
                   
                    

                    </form>

                  </div>
                  
                </div>

            </div>

        </div>
    </div>
  )
}

export default Contactus