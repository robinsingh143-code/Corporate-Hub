'use client'
import React, { useState, useEffect } from 'react';
 
import axios from 'axios';
import toast from 'react-hot-toast';
import Link from 'next/link'

const Manageregister = () => {

  const [userList, setUserList]= useState([])

  const featchUserList = () => {
    axios.get('http://localhost:5000/register/getall')
    .then((res) => {
      console.log(res.status)
      console.table(res.data)
      setUserList(res.data)
      
    }).catch((err) => {
      console.log('failed to fetch user list')
      
    });
  }
  useEffect(( )  =>  {
    featchUserList()
  },[])

  const deleteUser = (id) => {
    axios.delete('http://localhost:5000/register/delete/' + id)
    .then((result) => {
      toast.success('User deleted successfully')
      featchUserList()
      
    }).catch((err) => {
      console.log(err)
      toast.error('Failed to delete user')
      
    });
  }



  return (
    <div className='lg:max-w-[100%] mx-auto py-10'>
      <div className=''>
       
        <h1 className='text-center font-bold text-3xl mb-5 '>manage register</h1>
        <hr />

        <table className='w-full'>
          <thead className='bg-violet-700 text-white'>
            <tr>
              <th className='p-2 border border-white'>ID</th>
              <th className='p-2 border border-white'>TITLE</th>
              <th className='p-2 border border-white'>FIRST NAME</th>
              <th className='p-2 border border-white'>SECOND NAME</th>
              <th className='p-2 border border-white'>POSTION</th>
              <th className='p-2 border border-white'>COMPANY</th>
              <th className='p-2 border border-white'>BUSINESS</th>
              <th className='p-2 border border-white'>EMPLOYESS</th>
              <th className='p-2 border border-white'>STREET</th>
              <th className='p-2 border border-white'>ADDITION INFOMATION</th>
              <th className='p-2 border border-white'>ZIP CODE</th>
              <th className='p-2 border border-white'>PLACE</th>
              <th className='p-2 border border-white'>COUNTRY</th>
               
              <th className='p-2 border border-white'>PHONE</th>
              <th className='p-2 border border-white'>EMAIL</th>
              
              <th colSpan={2}>Actions</th>

            </tr>

          </thead>
          <tbody className='bg-violet-200'>

            {
              userList.map((user) => {

                // key is required for each element in the list to uniquely identify it,
                return <tr key={user._id}>
                  <td className='p-2 border border-violet-700'>{user._id}</td>
                  <td className='p-2 border border-violet-700'>{user.title}</td>
                  <td className='p-2 border border-violet-700'>{user.firstname}</td>
                  <td className='p-2 border border-violet-700'>{user.secondname}</td> 
                  <td className='p-2 border border-violet-700'>{user.position}</td> 
                  <td className='p-2 border border-violet-700'>{user.company}</td> 
                  <td className='p-2 border border-violet-700'>{user.business}</td> 
                  <td className='p-2 border border-violet-700'>{user.employees}</td> 
                  <td className='p-2 border border-violet-700'>{user.street}</td> 
                  <td className='p-2 border border-violet-700'>{user.additionalinformation}</td> 
                  <td className='p-2 border border-violet-700'>{user.zipcode}</td> 
                  <td className='p-2 border border-violet-700'>{user.place}</td> 
                  <td className='p-2 border border-violet-700'>{user.company}</td> 
                    <td className='p-2 border border-violet-700'> {user.tel} </td>
                    <td className='p-2 border border-violet-700'>{user.email} </td>
                    <td className='p-2 border border-violet-700'>
                      <button onClick={() => deleteUser(user._id)} className='bg-red-500 text-white px-4 py-2 rounded-lg'>Delete</button>
                    </td>
                    {/* <td className='p-2 border border-violet-700'>
                      <Link href={'/updateregister/' + user._id} className='bg-blue-500 text-white px-4 py-2 rounded-lg'>Update</Link>
                    </td> */}
                </tr>
              })
            }
          </tbody>

        </table>
      </div>
    </div>
  )
}

export default Manageregister