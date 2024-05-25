import React, { useState } from 'react'
import axios from 'axios'
import { FaPlus } from 'react-icons/fa6'
import Navbar from '../components/Navbar'

const CreateJobPage = () => {
    const [formData, setFormData] = useState({
        time: "2024-04-29",
        jobTitle: '',
        companyName: 'Adria',
        companyCity: '',
        domain: '',
        jobType: 'full-time',
        salary: '',
        description: ''
    })

    // {
    //     "time": "2024-03-01",
    //     "jobTitle": "Software Engineer",
    //     "companyName": "Microsoft",
    //     "companyCity": "Redmond",
    //     "domain": "IT",
    //     "jobType": "fulltime",
    //     "salary": "110000",
    //     "description": "Microsoft is looking for a software engineer to join our team in Redmond. The ideal candidate will have a strong background in computer science and experience with C#, .NET, and Azure. The candidate will work on a variety of projects, including developing new features for our cloud services and improving the performance of our operating systems. The candidate will also have the opportunity to work on cutting-edge technologies, such as artificial intelligence and machine learning. The candidate will work in a fast-paced environment and will have the opportunity to collaborate with a team of talented engineers. The candidate will also have the opportunity to work on projects that have a real impact on people's lives, such as improving access to information and connecting people with the information they need."
    // }
    // const [requiredSkills, setRequiredSkills] = useState([''])

    // const handleAddSkill = () => {
    //     setRequiredSkills([
    //         ...requiredSkills,
    //         ''
    //     ])
    // }

    const handleFormChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(formData)
        try {
            // Make a POST request to send form data to the backend
            const response = await axios.post('http://localhost:3000/jobs', formData);
            console.log('Job posted successfully:', response.data);
            // Optionally, redirect the user to a different page or perform any other action upon successful submission
        } catch (error) {
            console.error('Error posting job:', error);
            // Handle error, display error message to the user, etc.
        }
    }

    return (
        <>
        <Navbar />
        <div>
            <div className='w-[80%] mx-auto'>
                <h2 className='text-3xl font-bold text-[#2D82B7] mb-4'>Post a job</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="jobTitle" className="block text-sm font-medium text-black">Job Title</label>
                        <input
                            type="text"
                            id="jobTitle"
                            name="jobTitle"
                            value={formData.jobTitle}
                            onChange={handleFormChange}
                            placeholder="Enter a job title"
                            className="w-full mt-1 p-2 rounded-lg outline-none border border-black"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="jobType" className="block text-sm font-medium text-black">Job Type</label>
                        <select 
                        id="jobType" 
                        name="jobType"
                        value={formData.jobType}
                        onChange={handleFormChange}
                        className="w-full mt-1 p-2 rounded-lg outline-none border border-black">
                            <option value="full-time">Full Time</option>
                            <option value="part-time">Part Time</option>
                            <option value="internship">Internship</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="domain" className="block text-sm font-medium text-black">Job Domaine</label>
                        <input
                            type="text"
                            id="domain"
                            name="domain"
                            value={formData.domain}
                            onChange={handleFormChange}
                            placeholder="Enter a job domaine"
                            className="w-full mt-1 p-2 rounded-lg outline-none border border-black"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="companyCity" className="block text-sm font-medium text-black">City</label>
                        <input
                            type="text"
                            id="companyCity"
                            name="companyCity"
                            value={formData.companyCity}
                            onChange={handleFormChange}
                            placeholder="Enter a city"
                            className="w-full mt-1 p-2 rounded-lg outline-none border border-black"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="salary" className="block text-sm font-medium text-black">Salary</label>
                        <input
                            type="text"
                            id="salary"
                            name="salary"
                            value={formData.salary}
                            onChange={handleFormChange}
                            placeholder="Enter a salary"
                            className="w-full mt-1 p-2 rounded-lg outline-none border border-black"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-sm font-medium text-black">Job Description</label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleFormChange}
                            placeholder="Describe the job post"
                            className="w-full mt-1 p-2 rounded-lg resize-none outline-none border border-black"
                            rows="8"
                        ></textarea>
                    </div>
                    {/* <div className="mb-4">
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
                    </div> */}
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