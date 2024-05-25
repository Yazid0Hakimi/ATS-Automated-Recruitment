import React, { useState } from 'react'
import Sidebar from '../components/Admin/Sidebar'

const AdminDashboard = () => {
    const [applicationStatistics] = useState({
        totalApplications: 100,
        applicationsPerJob: [
            { jobId: 1, jobTitle: 'Data Scientist', applications: 30 },
            { jobId: 2, jobTitle: 'Software Engineer', applications: 45 },
            { jobId: 3, jobTitle: 'UX Designer', applications: 25 }
        ]
    })

    return (
        <div className="flex">
            {/* Add the AdminSidebar component */}
            <Sidebar />
            
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-semibold text-gray-800 mb-8">Application Statistics</h1>
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Total Applications: {applicationStatistics.totalApplications}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {applicationStatistics.applicationsPerJob.map(job => (
                            <div key={job.jobId} className="bg-gray-100 rounded-lg p-4">
                                <h3 className="text-lg font-semibold mb-2">{job.jobTitle}</h3>
                                <p className="text-gray-600">Applications: {job.applications}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard