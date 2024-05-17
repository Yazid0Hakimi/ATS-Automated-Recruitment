import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { FaPlus } from 'react-icons/fa6'

const CreateJobPage = () => {
    const [requiredSkills, setRequiredSkills] = useState([''])

    const handleAddSkill = () => {
        setRequiredSkills([
            ...requiredSkills,
            ''
        ])
    }
// requiredSkills
    return (
        <>
        <Navbar />
        <div>
            <div className='w-[80%] mx-auto'>
                <h2 className='text-3xl font-bold text-[#2D82B7] mb-4'>Post a job</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="jobTitle" className="block text-sm font-medium text-black">Job Title</label>
                        <input
                            type="text"
                            id="jobTitle"
                            placeholder="Enter a job title"
                            className="w-full mt-1 p-2 rounded-lg outline-none border border-black"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="jobType" className="block text-sm font-medium text-black">Job Type</label>
                        <select id="jobType">
                            <option value="full-time">Full Time</option>
                            <option value="part-time">Part Time</option>
                            <option value="internship">Internship</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="jobDomaine" className="block text-sm font-medium text-black">Job Domaine</label>
                        <input
                            type="text"
                            id="jobDomaine"
                            placeholder="Enter a job domaine"
                            className="w-full mt-1 p-2 rounded-lg outline-none border border-black"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="city" className="block text-sm font-medium text-black">City</label>
                        <input
                            type="text"
                            id="city"
                            placeholder="Enter a city"
                            className="w-full mt-1 p-2 rounded-lg outline-none border border-black"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="salary" className="block text-sm font-medium text-black">Salary</label>
                        <input
                            type="text"
                            id="salary"
                            placeholder="Enter a salary"
                            className="w-full mt-1 p-2 rounded-lg outline-none border border-black"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="jobDescription" className="block text-sm font-medium text-black">Job Description</label>
                        <textarea
                            id="jobDescription"
                            placeholder="Describe the job post"
                            className="w-full mt-1 p-2 rounded-lg resize-none outline-none border border-black"
                            rows="8"
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <div className='flex justify-between items-center mb-2'>
                            <label htmlFor="skills" className="block text-sm font-medium text-black">Required Skills</label>
                            <button type='button' onClick={handleAddSkill}><FaPlus /></button>
                        </div>
                        {requiredSkills.map((skill, index) => (
                            <input
                                key={index}
                                type="text"
                                id="skills"
                                placeholder="Enter a skill"
                                className="w-full mt-1 p-2 rounded-lg outline-none border border-black"
                            />
                        ))}
                    </div>
                    <div className='mb-4'>
                        <button
                            type='submit'
                            className='w-full bg-[#2D82B7] text-white p-2 rounded-lg font-semibold'
                        >
                            Post Job
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default CreateJobPage