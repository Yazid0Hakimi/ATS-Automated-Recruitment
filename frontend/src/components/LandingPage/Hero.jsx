import React from 'react'
import { Link } from 'react-router-dom'
import HeroImg from '../../assets/hero.jpg'

const Hero = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden"> 
            <div className="absolute inset-0 bg-fixed bg-cover bg-center" style={{ backgroundImage: `url(${HeroImg})` }}></div>
            <div className="absolute inset-0 bg-[#2D82B7] opacity-50"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
                <h1 className="text-5xl md:text-6xl font-bold">Welcome to Our Platform</h1>
                <p className="mt-4 text-xl md:text-2xl">Your success starts here</p>
                <Link to="/home" className="mt-8 px-6 py-3 bg-[#2D82B7] text-white border border-[#2D82B7] text-lg font-semibold rounded hover:bg-transparent transition">
                Find Jobs
                </Link>
            </div>
        </div>
    )
}

export default Hero