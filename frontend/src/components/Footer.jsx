import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="bg-[#2D82B7] py-6">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="text-white">
                        <img src="/logo.png" alt="Logo" className="h-8" />
                    </div>
                    {/* Links */}
                    <div className="flex space-x-4">
                        <Link to="/" className="text-white hover:text-gray-400">Home</Link>
                        <Link to="/jobs" className="text-white hover:text-gray-400">Jobs</Link>
                        <Link to="/about" className="text-white hover:text-gray-400">About</Link>
                        <Link to="/contact" className="text-white hover:text-gray-400">Contact</Link>
                        <Link to="/login" className="text-white hover:text-gray-400">Login</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer