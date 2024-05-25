import React from 'react'

const CompanyCard = ({company}) => {
    return (
        <div className="bg-white shadow rounded-lg p-6 flex flex-col justify-between transform transition-transform hover:scale-105 hover:shadow-lg">
            <div className="flex items-center mb-4">
                {company.logo && (
                    <img src={company.logo} alt={`${company.name} logo`} className="w-12 h-12 object-cover mr-4" />
                )}
                <h2 className="text-2xl font-semibold text-gray-800">{company.name}</h2>
            </div>
            <div>
                <p className="text-gray-700"><strong>Email:</strong> {company.email}</p>
                <p className="text-gray-700"><strong>Phone:</strong> {company.phone}</p>
                <p className="text-gray-700"><strong>Industry:</strong> {company.industry}</p>
                <p className="text-gray-700"><strong>City:</strong> {company.city}</p>
                <a href={`http://${company.website}`} 
                className="text-[#2D82B7] hover:underline mt-2 block" 
                target="_blank" 
                rel="noopener noreferrer">
                    Visit Website
                </a>
            </div>
        </div>
    )
}

export default CompanyCard