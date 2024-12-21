'use client'
import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import useAppContext from '@/context/appContext'



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
  const { setLoggedIn, setCurrentUser } = useAppContext();

  const router = useRouter()

  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);

      axios.post('http://localhost:5000/user/authenticate', values)

        .then((response) => {
          console.log(response.status)
          localStorage.setItem('user', JSON.stringify(response.data))
          setLoggedIn(true)
          resetForm()
          toast.success('login successfully')
          router.push('/edit')
        }).catch((err) => {
          console.log(err)
          toast.error('Invalid Credentials')

        });
      // resetForm()
      // toast.success("signin successfully")

    },
    validationSchema: LoginSchema
  })

  return (
    <div>
      <section className="bg-gray-100 min-h-screen flex items-center justify-center ">
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
          <div className="md:w-1/2 px-16">
            <h2
              className="font-bold 
          text-2xl 
          text-[#002074]"
            >
              login
            </h2>
            <p className="text-sm mt-4 text-[#002074]">
              if you alredy a member, easily log in
            </p>
            <form onSubmit={loginForm.handleSubmit} action="" className="flex flex-col gap-4">
              {loginForm.errors.email && loginForm.touched.email ? (
                <div className='text-red-500 text-sm'>{loginForm.errors.email}</div>
              ) : null}
              <input
                onChange={loginForm.handleChange}
                value={loginForm.values.email}
                className="p-2 rounded-xl border"
                type="text"
                name="email"
                placeholder="Email"
              />
              <div className="relative">
                {loginForm.errors.password && loginForm.touched.password ? (
                  <div className='text-red-500 text-sm'>{loginForm.errors.password}</div>
                ) : null}
                <input
                  onChange={loginForm.handleChange}
                  value={loginForm.values.password}
                  className="p-2 rounded-xl border w-full"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className=" w-4 h-4 absolute top-1/2 right-3 -translate-y-1/2"
                  viewBox="0 0 576 512"
                >
                  {/*!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                  <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
                </svg>
              </div>
              <button  className="bg-[#002074] rounded-xl text-white py-2 hover:scale-105 duration-300">
                login
              </button>
            </form>
            {/* <div >
              <hr>
              <p>or</p>
              <hr>
          </div> */}
            <div className="mt-10 grid grid-cols-3 items-center text-gray-600">
              <hr className="border-gray-500" />
              <p className="text-center tex-sm">or</p>
              <hr className="border-gray-500" />
            </div>
            <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 488 512"
              >
                {/*!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
              </svg>
              login with google
            </button>
            <p className="mt-5 text-xs  border-b py-4">
              forgot your password
            </p>
            <div className="mt-3 text-xs flex justify-between items-center">
              <p>if you don't have an account...</p>
              <button className="py-2 px-5 bg-white bg-border rounded-xl ">
                Register
              </button>
            </div>
          </div>
          <div className="md:block hidden w-1/2 ">
            <img
              className="rounded-2xl"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFlV1se32uN1mkH6_J1o_v1S7DepJgdfF13Q&s"
              alt=""
            />
          </div>
        </div>
      </section>

    </div>
  )
}

export default Login
