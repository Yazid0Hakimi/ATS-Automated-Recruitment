import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from '../components/Admin/Sidebar';

const AddNewAdminPage = () => {
    // State variables to store form data
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        password: '',
        email: ''
    });

    // Handle form input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Here you can handle form submission logic, such as sending data to the server
        console.log(formData);
        try {
            const response = await axios.post('http://localhost:8085/admin', formData);
            console.log('Admin created successfully:', response.data);
            alert("Admin created Successfully!");
        } catch (error) {
            console.error('Error creating admin:', error);
            alert("Something went wrong!");
        }
        // Reset form after submission
        setFormData({
            firstName: '',
            lastName: '',
            password: '',
            email: ''
        });
    };

    return (
        <div className="flex">
            {/* Add the AdminSidebar component */}
            <Sidebar />
            
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-semibold text-gray-800 mb-8">Add New Admin</h1>
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                    <div className="mb-4">
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="Enter first name"
                            className="w-full mt-1 p-2 rounded-lg outline-none border border-gray-300"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Enter last name"
                            className="w-full mt-1 p-2 rounded-lg outline-none border border-gray-300"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter password"
                            className="w-full mt-1 p-2 rounded-lg outline-none border border-gray-300"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter email"
                            className="w-full mt-1 p-2 rounded-lg outline-none border border-gray-300"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full"
                    >
                        Add Admin
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddNewAdminPage;
