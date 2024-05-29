import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Img from '../assets/job.png';
import axios from 'axios';
import { FaRegEdit } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import { useParams } from 'react-router-dom';

const CompanyProfilePage = () => {
    const [company, setCompany] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8085/companies/${id}`)
            .then(res => {
                console.log(res.data);
                setCompany(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, [id]);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedCompany = {
            name: company.name,
            email: company.email,
            password: company.password || '1234',
            logo: company.logo || 'https://default.logo.url',
            phone: company.phone,
            description: company.description,
            city: company.city,
            industry: company.industry,
            website: company.website,
            status: company.status || 'ACTIVE'
        };

        try {
            const response = await axios.put(`http://localhost:8085/companies/${id}`, updatedCompany, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setCompany(response.data);
            handleCloseModal();
            alert('Company updated successfully!');
        } catch (error) {
            console.error('Error updating company:', error);
            if (error.response) {
                console.error('Data:', error.response.data);
                console.error('Status:', error.response.status);
                console.error('Headers:', error.response.headers);
            } else if (error.request) {
                console.error('Request:', error.request);
            } else {
                console.error('Message:', error.message);
            }
            alert('Something went wrong!');
        }
    };

    return (
        <>
            <Navbar />
            <div className="container w-[90%] mx-auto mt-8">
                <div className="flex justify-between space-x-4 border border-[#2D82B7] px-4 py-8 rounded-lg">
                    <div className='flex items-center space-x-4'>
                        <img src={Img} alt="company logo"
                            className='w-24 h-24 rounded-full object-cover border border-[#2D82B7]' />
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
                    <div className='flex justify-between items-center mb-4'>
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
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="company-name" className="block text-sm font-medium text-black">Company Name</label>
                                <input
                                    type="text"
                                    id="company-name"
                                    value={company.name}
                                    onChange={(e) => setCompany({ ...company, name: e.target.value })}
                                    placeholder="Enter your company name"
                                    className="w-full mt-1 p-2 rounded-lg outline-none border border-black"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="company-description" className="block text-sm font-medium text-black">Company Description</label>
                                <textarea
                                    id="company-description"
                                    value={company.description}
                                    onChange={(e) => setCompany({ ...company, description: e.target.value })}
                                    placeholder="Enter your company description"
                                    className="w-full mt-1 p-2 rounded-lg resize-none outline-none border border-black"
                                    rows="8"
                                ></textarea>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-black">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={company.email}
                                    onChange={(e) => setCompany({ ...company, email: e.target.value })}
                                    placeholder="Enter your email"
                                    className="w-full mt-1 p-2 rounded-lg outline-none border border-black"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="phone" className="block text-sm font-medium text-black">Phone</label>
                                <input
                                    type="text"
                                    id="phone"
                                    value={company.phone}
                                    onChange={(e) => setCompany({ ...company, phone: e.target.value })}
                                    placeholder="Enter your phone number"
                                    className="w-full mt-1 p-2 rounded-lg outline-none border border-black"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="industry" className="block text-sm font-medium text-black">Industry</label>
                                <input
                                    type="text"
                                    id="industry"
                                    value={company.industry}
                                    onChange={(e) => setCompany({ ...company, industry: e.target.value })}
                                    placeholder="Enter your company industry"
                                    className="w-full mt-1 p-2 rounded-lg outline-none border border-black"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="city" className="block text-sm font-medium text-black">City</label>
                                <input
                                    type="text"
                                    id="city"
                                    value={company.city}
                                    onChange={(e) => setCompany({ ...company, city: e.target.value })}
                                    placeholder="Enter your city"
                                    className="w-full mt-1 p-2 rounded-lg outline-none border border-black"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="website" className="block text-sm font-medium text-black">Website</label>
                                <input
                                    type="url"
                                    id="website"
                                    value={company.website}
                                    onChange={(e) => setCompany({ ...company, website: e.target.value })}
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
    );
};

export default CompanyProfilePage;
