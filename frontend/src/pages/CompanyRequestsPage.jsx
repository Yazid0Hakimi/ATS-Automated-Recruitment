import React, { useState } from 'react'
import Sidebar from '../components/Admin/Sidebar';

const CompanyRequestsPage = () => {
    const [pendingRequests] = useState([
        { id: 1, companyName: 'Company A', email: 'companyA@example.com' },
        { id: 2, companyName: 'Company B', email: 'companyB@example.com' },
        { id: 3, companyName: 'Company C', email: 'companyC@example.com' },
        { id: 4, companyName: 'Company D', email: 'companyD@example.com' },
    ]);

    return (
        <div className="flex">
            {/* Add the AdminSidebar component */}
            <Sidebar />
            
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-semibold text-gray-800 mb-8">Pending Company Account Creation Requests</h1>
                <div className="flex flex-col">
                    {pendingRequests.map(request => (
                        <div key={request.id} className="bg-white rounded-lg shadow-md p-6 mb-4">
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">{request.companyName}</h2>
                            <p className="text-gray-600">Email: {request.email}</p>
                            <div className="mt-4">
                                {/* Approve and Reject buttons */}
                                <button className="bg-green-500 text-white px-4 py-2 rounded-md mr-2">Approve</button>
                                <button className="bg-red-500 text-white px-4 py-2 rounded-md">Reject</button>
                            </div>
                        </div>
                    ))}
                    {pendingRequests.length === 0 && (
                        <p className="text-gray-600">No pending requests found.</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CompanyRequestsPage