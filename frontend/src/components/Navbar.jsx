import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [showNav, setShowNav] = useState(false)
    return (
        <nav className='flex justify-between p-8 relative'>
            <div>
                <Link to="/" className='font-black text-xl'>Logo</Link>
            </div>
            <div className='flex justify-center items-center'>
                <Link to='/' className='font-semibold p-2 hover:text-[#2D82B7]'>Home</Link>
                <Link to='/home' className='font-semibold p-2 hover:text-[#2D82B7]'>Find Jobs</Link>
                <Link to='/login' className='bg-transparent border border-[#2D82B7] font-semibold text-[#2D82B7] mx-1 px-4 py-2 rounded-md'>Sign In</Link>
                <Link to='/register' className='bg-[#2D82B7] border border-[#2D82B7] font-semibold text-white mx-1 px-4 py-2 rounded-md'>Sign Up</Link>
            </div>
            {/* Shown When a user is connected */}
            {/* <div className='flex justify-center items-center'>
                <button 
                type='button'
                onClick={() => setShowNav(!showNav)}
                >
                    <p>Username</p>
                </button>
            </div> */}
            {/* {showNav && (
                <div className="absolute z-50 right-2 top-20 w-[200px] bg-white border border-[#7A867A] shadow-md rounded-md p-2">
                    <Link to="/" className='flex items-center w-full text-left p-2 transition hover:bg-[#000] hover:text-white'>
                        Profile
                    </Link>
                    <Link to="/" className='flex items-center w-full text-left p-2 transition hover:bg-[#000] hover:text-white'>
                        Jobs
                    </Link>
                    <button type='button' className='flex items-center w-full text-left p-2 transition hover:bg-[#000] hover:text-white'>
                        Logout
                    </button>
                </div>
            )} */}
        </nav>
    )
}

export default Navbar