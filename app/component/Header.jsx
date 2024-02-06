"use client"
import React, { useContext } from 'react'
import Link from 'next/link'
// import { authContext } from '../authContext/context'

const Header = () => {

  // const {states,Logout} = useContext(authContext);
  return (
    
    <div >
        <nav className='bg-black h-10' >
            <div className='flex justify-between text-white pt-2'>
                <a href="/">Task Management</a>  

                <Link className='outline text-green-700 px-2 mr-5 ' href={'/login'} type='submit'>Login</Link>

                {/* <div>
                   {states?.user?.id? 
                   <>
                      <div onClick={Logout}>Logout</div>
                   </> */}
                   {/* : */}
                     

                   {/* } */}
                {/* </div>   */}
                
            </div>
        </nav>
    </div>
  )
}

export default Header;
