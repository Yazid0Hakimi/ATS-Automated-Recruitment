import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Img from '../assets/job.png';
import { FaCamera, FaEye, FaEyeSlash } from 'react-icons/fa6';

const CompanyRegistrationPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfPassword, setShowConfPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        logo: '',
        phone: '',
        description: '',
        city: '',
        industry: '',
        website: '',
    });
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [id]: value,
        }));
    };

    const handleFileChange = (e) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            logo: e.target.files[0].name,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            const response = await axios.post('http://localhost:8085/companies', formData);
            console.log('Company registered successfully:', response.data);
            alert("Company created succefully, you must wait approve from Admin !")
        } catch (error) {
            console.error('Error registering company:', error);
            alert('Something went wrong')
        }
    };

    return (
        <>
            <Navbar />
            <div className="container mx-auto flex flex-col items-center md:flex-row">
                <div className="w-full md:w-1/2 p-4">
                    <form onSubmit={handleSubmit}>
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
                                <input type="file" id='img' hidden onChange={handleFileChange} />
                            </label>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-black">Company Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter your company name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 rounded-lg outline-none border border-black"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="description" className="block text-sm font-medium text-black">Company Description</label>
                            <textarea
                                id="description"
                                placeholder="Enter your company description"
                                value={formData.description}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 rounded-lg resize-none outline-none border border-black"
                                rows="8"
                            ></textarea>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-black">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 rounded-lg outline-none border border-black"
                            />
                        </div>
                        <div className='mb-4'>
                            <label htmlFor="password" className="block text-sm font-medium text-black">Password</label>
                            <div className='relative w-full'>
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    id="password" 
                                    placeholder="Enter your password" 
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full mt-1 p-2 rounded-lg outline-none border border-black pr-10" 
                                />
                                <button 
                                    type='button' 
                                    className="absolute inset-y-0 right-0 px-3 py-2"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <FaEyeSlash/> : <FaEye />}
                                </button>
                            </div>
                        </div>
                        <div className='mb-4'>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-black">Confirm Password</label>
                            <div className='relative w-full'>
                                <input 
                                    type={showConfPassword ? "text" : "password"} 
                                    id="confirmPassword" 
                                    placeholder="Confirm your password" 
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="w-full mt-1 p-2 rounded-lg outline-none border border-black pr-10" 
                                />
                                <button 
                                    type='button' 
                                    className="absolute inset-y-0 right-0 px-3 py-2"
                                    onClick={() => setShowConfPassword(!showConfPassword)}
                                >
                                    {showConfPassword ? <FaEyeSlash/> : <FaEye />}
                                </button>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phone" className="block text-sm font-medium text-black">Phone</label>
                            <input
                                type="tel"
                                id="phone"
                                placeholder="Enter your phone number"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 rounded-lg outline-none border border-black"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="industry" className="block text-sm font-medium text-black">Industry</label>
                            <input
                                type="text"
                                id="industry"
                                placeholder="Enter your company industry"
                                value={formData.industry}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 rounded-lg outline-none border border-black"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="city" className="block text-sm font-medium text-black">City</label>
                            <input
                                type="text"
                                id="city"
                                placeholder="Enter your city"
                                value={formData.city}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 rounded-lg outline-none border border-black"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="website" className="block text-sm font-medium text-black">Website</label>
                            <input
                                type="url"
                                id="website"
                                placeholder="Enter your company website"
                                value={formData.website}
                                onChange={handleChange}
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
                <div className="hidden md:block md:w-1/2">
                    <img src={Img} alt="Company" className="w-full h-auto" />
                </div>
            </div>
        </>
    );
};

export default CompanyRegistrationPage;
