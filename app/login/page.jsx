"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import axios from 'axios';
import { useRouter } from 'next/navigation';

const page = () => {
const router = useRouter();
    const [user,setUser] = useState({email:"",password:""})

    

    const handleChange = (event)=>{
        setUser({...user,[event.target.name]:event.target.value})
    }

    const handleSubmit = async(event)=>{
        event.preventDefault()
        if(user.email && user.password){
            try{
                const response = await axios.post("/api/login",user);
                
                    console.log("login successfull",response.data);
                    setUser({email:"",password:""})
                    router.push('/')
                
            }catch(error){
                console.log("something went wrong")
                console.log(error)
            }
        }
    }

  return (
    <div className='flex justify-center  my-28 w-full h-full'>
        <form onSubmit={handleSubmit}>
            
            <div>
                <label htmlFor="email">Email:</label><br />
                <input type="email" name='email' onChange={handleChange} /><br />
            </div><br />
            <div>
                <label htmlFor="password">Password:</label><br />
                <input type="password" name='password' onChange={handleChange}  /><br />
            </div><br />
            <button className='bg-blue-900 w-20 rounded h-8' type='submit' >Submit</button><br/><br />
            <div>
                <Link className='underline-blue-500' href={'/register'}>existing user?Register</Link>
            </div><br />
        </form>
    </div>
  )
}

export default page