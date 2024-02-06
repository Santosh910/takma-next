"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import axios from 'axios';
import { useRouter } from 'next/navigation';

const page = () => {
    const router = useRouter();
    const [user, setUser] = useState({ name: "", email: "", password: "" })

    

    const handleChange = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (user.name && user.email && user.password) {
            try {
                const response = await axios.post("/api/register", user);
                
                    console.log("signup successfull:", response.data);
                     router.push('/login');
                

            } catch (error) {
                console.log("something went wrong:", error)

            }
        } else {
            alert('all data is mmandotory')
        }


    }
    return (
        <div className='flex justify-center my-28 w-full h-full'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">name:</label><br />
                    <input type="text" name="name" onChange={handleChange} /><br />
                </div><br />
                <div>
                    <label htmlFor="email">email:</label><br />
                    <input type="email" name="email" onChange={handleChange} /><br />
                </div><br />
                <div>
                    <label htmlFor="password">password:</label><br />
                    <input type="password" name="password" onChange={handleChange} /><br />
                </div><br />
                <input type="submit" value="submit" className='bg-blue-900 w-20 rounded h-8'/>
                <div>
                    <Link href={'/login'}>existing user?Login</Link>
                </div>
            </form>
        </div>
    )
}

export default page