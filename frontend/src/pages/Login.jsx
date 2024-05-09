import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaEye, FaEyeSlash } from 'react-icons/fa6'
import Img from '../assets/job.png'
import Navbar from '../components/Navbar'

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email)
        console.log(password)
    }

    return (
        <>
            <Navbar />
            <div className="container mx-auto flex flex-col items-center md:flex-row">
                <div className="w-full md:w-1/2 p-4">
                    <form onSubmit={handleSubmit}>
                        <h2 className="text-xl text-[#2D82B7] font-semibold mb-2">Sign IN</h2>
                        <div className="flex justify-between items-center mb-4">
                            <div>
                                <p className="text-base text-black">Welcome back !</p>
                            </div>
                            <div>
                                <p className="text-sm text-[#7D7D7D]">Don't have an account? <Link to='/register' className='text-[#2D82B7] font-semibold' > Register</Link></p>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-black">email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className="w-full mt-1 p-2 rounded-lg outline-none border border-black"
                            />
                        </div>
                        <div className='mb-4'>
                            <label htmlFor="password"
                            className="block text-sm font-medium text-black"
                            >password</label>
                            <div className='relative w-full'>
                                <input 
                                type={showPassword ? "text":"password"} 
                                id="password" 
                                placeholder="Enter your password" 
                                // value={password}
                                // onChange={(e) => setPassword(e.target.value)}
                                className="w-full mt-1 p-2 rounded-lg outline-none border border-black pr-10" />
                                <button 
                                type='button' 
                                className="absolute inset-y-0 right-0 px-3 py-2"
                                onClick={e => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <FaEyeSlash/>:<FaEye />}
                                </button>
                            </div>
                        </div>
                        <button
                        type="submit"
                        className="bg-[#2D82B7] text-white px-4 py-2 rounded-lg w-full"
                        >
                        Sign In
                        </button>
                    </form>
                </div>
                {/* Image Section */}
                <div className="hidden md:block md:w-1/2">
                    <img
                        src={Img}
                        alt="Image"
                        className="w-full h-auto"
                    />
                </div>
            </div>
        </>
    )
}

export default Login