import React from 'react'

const Filter = () => {
    return (
        <div className="bg-transparent p-4">
            <h2 className="text-2xl font-bold mb-4 border-b border-[#000] pb-5">Filter Jobs</h2>
            <div className="mb-4 border-b border-[#000] pb-5">
                <label className="block text-lg font-medium text-black mb-1">Job Type</label>
                <ul>
                    <li className="flex items-center mb-2">
                        <input
                            type="checkbox"
                            id="fullTime"
                            name="fullTime"
                            className="mr-1"
                        />
                        <label htmlFor="fullTime" className="mr-4">Full Time</label>
                    </li>
                    <li className="flex items-center">
                        <input
                            type="checkbox"
                            id="partTime"
                            name="partTime"
                            className="mr-1"
                        />
                        <label htmlFor="partTime">Part Time</label>
                    </li>
                    <li className='flex items-center'>
                        <input
                            type="checkbox"
                            id="internship"
                            name="internship"
                            className="mr-1"
                        />
                        <label htmlFor="internship">Internship</label>
                    </li>
                </ul>
            </div>
            <div className="mb-4 border-b border-[#000] pb-5">
                <label className="block text-lg font-medium text-black mb-1">Education</label>
                <ul>
                    <li className="flex items-center mb-2">
                        <input
                            type="checkbox"
                            id="bachelors"
                            name="bachelors"
                            className="mr-1"
                        />
                        <label htmlFor="bachelors" className="mr-4">Bachelors</label>
                    </li>
                    <li className="flex items-center">
                        <input
                            type="checkbox"
                            id="masters"
                            name="masters"
                            className="mr-1"
                        />
                        <label htmlFor="masters">Masters</label>
                    </li>
                </ul>
            </div>
            <div className="mb-4 border-b border-[#000] pb-5">
                <label className="block text-lg font-medium text-black mb-1">Experience</label>
                <ul>
                    <li className="flex items-center mb-2">
                        <input
                            type="checkbox"
                            id="no_experience"
                            name="no_experience"
                            className="mr-1"
                        />
                        <label htmlFor="no_experience" className="mr-4">No experience</label>
                    </li>
                    <li className="flex items-center">
                        <input
                            type="checkbox"
                            id="one_year"
                            name="one_year"
                            className="mr-1"
                        />
                        <label htmlFor="one_year">1 Year</label>
                    </li>
                </ul>
            </div>
            <div className="mb-4">
                <label className="block text-lg font-medium text-black mb-1">Salary Range</label>
                <ul>
                    <li className="flex items-center mb-2">
                        <input
                            type="checkbox"
                            id="range_one"
                            name="range_one"
                            className="mr-1"
                        />
                        <label htmlFor="range_one" className="mr-4">$ 1 - $ 5000</label>
                    </li>
                    <li className="flex items-center">
                        <input
                            type="checkbox"
                            id="range_two"
                            name="range_two"
                            className="mr-1"
                        />
                        <label htmlFor="range_two">$ 5000 - $ 10000</label>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Filter