import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import { FaRegTrashAlt } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa6';

const CreateJobPage = () => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        city: "",
        postedAt: new Date(),
        jobType: 'full-time',
        jobDomain: "",
        salary: "",
        company: { id: 1 },
    });
    
    const [skills, setSkills] = useState([
        {
            name: '',
            level: 0,
        },
    ]);

    const handleFormChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSkillChange = (index, e) => {
        const newSkills = [...skills];
        newSkills[index][e.target.name] = e.target.value;
        setSkills(newSkills);
    };

    const handleAddSkill = () => {
        setSkills([...skills, { name: '', level: 0 }]);
    };

    const handleRemoveSkill = (index) => {
        const newSkills = skills.filter((_, i) => i !== index);
        setSkills(newSkills);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const completeData = { ...formData, skills };
        console.log(completeData);
        try {
            const response = await axios.post('http://localhost:8085/jobs', completeData);
            console.log('Job posted successfully:', response.data);
            alert("Job Created Succefully !")
        } catch (error) {
            console.error('Error posting job:', error);
            alert("Something went wrong !")
        }
    };

    return (
        <>
            <Navbar />
            <div>
                <div className='w-[80%] mx-auto'>
                    <h2 className='text-3xl font-bold text-[#2D82B7] mb-4'>Post a job</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="title" className="block text-sm font-medium text-black">Job Title</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={formData.title}
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
                                className="w-full mt-1 p-2 rounded-lg outline-none border border-black"
                            >
                                <option value="full-time">Full Time</option>
                                <option value="part-time">Part Time</option>
                                <option value="internship">Internship</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="jobDomain" className="block text-sm font-medium text-black">Job Domain</label>
                            <input
                                type="text"
                                id="jobDomain"
                                name="jobDomain"
                                value={formData.jobDomain}
                                onChange={handleFormChange}
                                placeholder="Enter a job domain"
                                className="w-full mt-1 p-2 rounded-lg outline-none border border-black"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="city" className="block text-sm font-medium text-black">City</label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                value={formData.city}
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
                        <div className="mb-4">
                            <div className="flex justify-between items-center mb-2">
                                <label htmlFor="skills" className="block text-sm font-medium text-black">Skills</label>
                                <button type="button" onClick={handleAddSkill}><FaPlus /></button>
                            </div>
                            {skills.map((skill, index) => (
                                <div className="grid grid-cols-4 items-center gap-2 my-2" key={index}>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Skill name"
                                        value={skill.name}
                                        onChange={(e) => handleSkillChange(index, e)}
                                        className="p-2 rounded-lg outline-none border border-black col-span-3"
                                    />
                                    <div className="flex col-span-1">
                                        <div className="relative">
                                            <input
                                                type="text"
                                                name="level"
                                                placeholder="Your level"
                                                value={skill.level}
                                                onChange={(e) => handleSkillChange(index, e)}
                                                className="p-2 w-full rounded-lg outline-none border border-black pr-8"
                                            />
                                            <span className="absolute right-2 top-1/2 transform -translate-y-1/2">/ 10</span>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => handleRemoveSkill(index)}
                                            className="text-black ml-2 flex justify-end items-center"
                                        >
                                            <FaRegTrashAlt />
                                        </button>
                                    </div>
                                </div>
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
    );
}

export default CreateJobPage;
