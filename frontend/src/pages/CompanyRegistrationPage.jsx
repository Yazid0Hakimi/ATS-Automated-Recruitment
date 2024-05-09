import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Img from '../assets/job.png'
import { FaCamera, FaEye, FaEyeSlash } from 'react-icons/fa6'

const CompanyRegistrationPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfPassword, setShowConfPassword] = useState(false);

    return (
        <>
            <Navbar />
            <div className="container mx-auto flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 p-4">
                    <form>
                        <h2 className="text-xl text-[#2D82B7] font-semibold mb-2">Sign UP As Company</h2>
                        <div className="flex justify-between items-center mb-4">
                            <div>
                                <p className="text-base text-black">Create an account</p>
                            </div>
                            <div>
                                <p className="text-sm text-[#7D7D7D]">Already have an account? <Link to='/login' className='text-[#2D82B7] font-semibold' > Login</Link></p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center'>
                            <label htmlFor='img' className='flex flex-col justify-center items-center text-center text-white w-[100px] h-[100px] bg-[#2D82B7] rounded-full cursor-pointer'>
                                <FaCamera className='text-xl' />
                                <p className='text-sm'>Add Your <br /> logo</p>
                                <input type="file" id='img' hidden />
                            </label>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="company-name" className="block text-sm font-medium text-black">company name</label>
                            <input
                                type="text"
                                id="company-name"
                                placeholder="Enter your company name"
                                className="w-full mt-1 p-2 rounded-lg outline-none border border-black"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="company-description" className="block text-sm font-medium text-black">company description</label>
                            <textarea
                                id="company-description"
                                placeholder="Enter your company description"
                                className="w-full mt-1 p-2 rounded-lg resize-none outline-none border border-black"
                                rows="8"
                            ></textarea>
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
                        <div className='mb-4'>
                            <label htmlFor="confirm-password"
                            className="block text-sm font-medium text-black"
                            >confirm password</label>
                            <div className='relative w-full'>
                                <input 
                                type={showConfPassword ? "text":"password"} 
                                id="confirm-password" 
                                placeholder="Enter your password" 
                                // value={password}
                                // onChange={(e) => setPassword(e.target.value)}
                                className="w-full mt-1 p-2 rounded-lg outline-none border border-black pr-10" />
                                <button 
                                type='button' 
                                className="absolute inset-y-0 right-0 px-3 py-2"
                                onClick={e => setShowConfPassword(!showConfPassword)}
                                >
                                    {showConfPassword ? <FaEyeSlash/>:<FaEye />}
                                </button>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phone" className="block text-sm font-medium text-black">phone</label>
                            <input
                                type="phone"
                                id="tel"
                                placeholder="Enter your phone number"
                                className="w-full mt-1 p-2 rounded-lg outline-none border border-black"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="industry" className="block text-sm font-medium text-black">industry</label>
                            <input
                                type="text"
                                id="industry"
                                placeholder="Enter your company industry"
                                className="w-full mt-1 p-2 rounded-lg outline-none border border-black"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="city" className="block text-sm font-medium text-black">city</label>
                            <input
                                type="text"
                                id="city"
                                placeholder="Enter your city"
                                className="w-full mt-1 p-2 rounded-lg outline-none border border-black"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="website" className="block text-sm font-medium text-black">website</label>
                            <input
                                type="url"
                                id="website"
                                placeholder="Enter your company website"
                                className="w-full mt-1 p-2 rounded-lg outline-none border border-black"
                            />
                        </div>
                        <button
                        type="submit"
                        className="bg-[#2D82B7] text-white px-4 py-2 rounded-lg w-full"
                        >
                        Submit
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

export default CompanyRegistrationPage