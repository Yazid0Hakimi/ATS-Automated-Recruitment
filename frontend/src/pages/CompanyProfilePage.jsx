import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Img from '../assets/job.png'
import axios from 'axios'
import { FaRegEdit } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'
import { useParams } from 'react-router-dom'

const CompanyProfilePage = () => {
    const [company, setCompany] = useState({})
    const [isModalOpen, setIsModalOpen] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8085/companies/${id}`)
            .then(res => {
                console.log(res.data)
                setCompany(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const handleOpenModal = () => {
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    return (
        <>
        <Navbar />
        <div className="container w-[90%] mx-auto mt-8">
            <div className="flex justify-between space-x-4 border border-[#2D82B7] px-4 py-8 rounded-lg">
                <div className='flex items-center space-x-4'>
                    <img src={Img} alt="company logo"
                    className='w-24 h-24 rounded-full object-cover border border-[#2D82B7]'
                    />
                    <div>
                        <h2 className="text-xl font-bold">{company.name}</h2>
                        <ul>
                            <li>Email: {company.email}</li>
                            <li>Phone: {company.phone}</li>
                            <li>Industry: {company.industry}</li>
                            <li>City: {company.city}</li>
                            <li>Website: <a className="underline" target="_blank" rel="noopener noreferrer" href={`http://${company.website}`}>{company.website}</a></li>
                        </ul>
                    </div>
                </div>
                <button type='button' onClick={handleOpenModal}>
                    <FaRegEdit className='text-3xl text-[#2D82B7]' />
                </button>
            </div>
            <div className='border border-[#2D82B7] my-4 px-4 py-4 rounded-lg'>
                <div className='flex justify-between items-center  mb-4'>
                    <h3 className="text-2xl font-semibold">About Company</h3>
                </div>
                <div>
                    <p className="text-gray-600">{company.description}</p>
                </div>
            </div>
        </div>
        {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full max-h-full overflow-y-auto">
                        <div className="flex justify-between items-center border-b pb-2 mb-4">
                            <h2 className="text-xl font-bold">Update Company Infos</h2>
                            <button onClick={handleCloseModal} className="text-gray-500 hover:text-gray-800">
                                <FaXmark />
                            </button>
                        </div>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="company-name" className="block text-sm font-medium text-black">company name</label>
                                <input
                                    type="text"
                                    id="company-name"
                                    value={company.name}
                                    placeholder="Enter your company name"
                                    className="w-full mt-1 p-2 rounded-lg outline-none border border-black"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="company-description" className="block text-sm font-medium text-black">company description</label>
                                <textarea
                                    id="company-description"
                                    value={company.description}
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
                                    value={company.email}
                                    placeholder="Enter your email"
                                    className="w-full mt-1 p-2 rounded-lg outline-none border border-black"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="phone" className="block text-sm font-medium text-black">phone</label>
                                <input
                                    type="phone"
                                    id="tel"
                                    value={company.phone}
                                    placeholder="Enter your phone number"
                                    className="w-full mt-1 p-2 rounded-lg outline-none border border-black"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="industry" className="block text-sm font-medium text-black">industry</label>
                                <input
                                    type="text"
                                    id="industry"
                                    value={company.industry}
                                    placeholder="Enter your company industry"
                                    className="w-full mt-1 p-2 rounded-lg outline-none border border-black"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="city" className="block text-sm font-medium text-black">city</label>
                                <input
                                    type="text"
                                    id="city"
                                    value={company.city}
                                    placeholder="Enter your city"
                                    className="w-full mt-1 p-2 rounded-lg outline-none border border-black"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="website" className="block text-sm font-medium text-black">website</label>
                                <input
                                    type="url"
                                    id="website"
                                    value={company.website}
                                    placeholder="Enter your company website"
                                    className="w-full mt-1 p-2 rounded-lg outline-none border border-black"
                                />
                            </div>
                            <button
                            type="submit"
                            className="bg-[#2D82B7] text-white px-4 py-2 rounded-lg w-full"
                            >
                            Update
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}

export default CompanyProfilePage