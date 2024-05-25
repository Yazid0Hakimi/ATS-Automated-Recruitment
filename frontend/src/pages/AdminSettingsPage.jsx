import React, { useState } from 'react'
import Sidebar from '../components/Admin/Sidebar'

const AdminSettingsPage = () => {
    const [adminData, setAdminData] = useState({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        password: 'password123'
    });

    // Handle form input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setAdminData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle form submission logic, such as sending updated data to the server
        console.log('Updated admin data:', adminData);
        // Optionally, you could show a success message or redirect the user
    };
    return (
        <div className="flex">
                {/* Add the AdminSidebar component */}
                <Sidebar />
                
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl font-semibold text-gray-800 mb-8">Settings</h1>
                    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                        <div className="mb-4">
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={adminData.firstName}
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
                                value={adminData.lastName}
                                onChange={handleChange}
                                placeholder="Enter last name"
                                className="w-full mt-1 p-2 rounded-lg outline-none border border-gray-300"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={adminData.email}
                                onChange={handleChange}
                                placeholder="Enter email"
                                className="w-full mt-1 p-2 rounded-lg outline-none border border-gray-300"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={adminData.password}
                                onChange={handleChange}
                                placeholder="Enter password"
                                className="w-full mt-1 p-2 rounded-lg outline-none border border-gray-300"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full"
                        >
                            Update Info
                        </button>
                    </form>
                </div>
            </div>
    )
}

export default AdminSettingsPage