import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaEye, FaEyeSlash } from 'react-icons/fa6'
import loginImg from '../assets/login-image.png'

const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfPassword, setShowConfPassword] = useState(false)
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confPassword, setConfPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email)
        console.log(username)
        console.log(password)
        console.log(confPassword)
    }

    return (
        <div className='container'>
            <nav className='p-5'>
                <Link to="/" className='font-black text-xl'>Logo</Link>
            </nav>
            <div className='flex items-center' >
                <div className='flex-1 max-w-xs border border-[#878787] mx-auto p-5 shadow_login rounded-md'>
                    <h3 className='text-xl font-extralight mb-5'>Welcome !</h3>
                    <h2 className='text-3xl font-semibold mb-5'>Sign Up</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-3'>
                            <label htmlFor="email"
                            className="block text-[#1D0805] text-md mb-1"
                            >Email</label>
                            <input 
                            type="email" 
                            id='email' 
                            placeholder='Enter your email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border border-[#282828] rounded w-full py-3 px-4 text-[#282828] leading-tight outline-none"
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="username"
                            className="block text-[#1D0805] text-md mb-1"
                            >Username</label>
                            <input type="text" id='username' placeholder='Enter your username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="border border-[#282828] rounded w-full py-3 px-4 text-[#282828] leading-tight outline-none"
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="password"
                            className="block text-[#1D0805] text-md mb-1"
                            >Password</label>
                            <div className='relative w-full'>
                                <input 
                                type={showPassword ? "text":"password"} id="password" placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                                className="border border-[#282828] rounded w-full py-3 px-4 text-[#282828] leading-tight outline-none" />
                                <button 
                                type='button' 
                                className="absolute inset-y-0 right-0 px-3 py-2"
                                onClick={e => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <FaEye />:<FaEyeSlash/>}
                                </button>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="confirm-password"
                            className="block text-[#1D0805] text-md mb-1"
                            >Confirm Password</label>
                            <div className='relative w-full'>
                                <input 
                                type={showConfPassword ? "text":"password"} id="confirm-password" placeholder="Confirm your password"
                                value={confPassword}
                                onChange={(e) => setConfPassword(e.target.value)}
                                className="border border-[#282828] rounded w-full py-3 px-4 text-[#282828] leading-tight outline-none" />
                                <button 
                                type='button' 
                                className="absolute inset-y-0 right-0 px-3 py-2"
                                onClick={e => setShowConfPassword(!showConfPassword)}
                                >
                                    {showConfPassword ? <FaEye />:<FaEyeSlash/>}
                                </button>
                            </div>
                        </div>
                        <button type="submit"
                        className="bg-[#000000] mt-4 mb-8 text-white w-full font-bold py-2 px-4 rounded outline-none"
                        >
                            Register
                        </button>
                    </form>
                    <p className='text-center text-[#7D7D7D]'>Already have an Account ? 
                    <Link to="/login" className='text-[#000] font-bold'> Login</Link> </p>
                </div>
                <div className='hidden md:flex md:flex-1 md:max-w-xl md:mx-auto'>
                    <img src={loginImg} alt="Login Image" className='text-center' />
                </div>
            </div>
        </div>
    )
}

export default Register