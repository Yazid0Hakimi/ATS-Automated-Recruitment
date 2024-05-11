import React, { useEffect, useState } from 'react'
import { FaPlus } from 'react-icons/fa6'
import axios from 'axios'
import Navbar from '../components/Navbar'
import Img from '../assets/job.png'
import ExperienceCard from '../components/Experiences/ExperienceCard'
import EducationCard from '../components/Experiences/EducationCard'

const CandidateProfilePage = () => {
    // const [experiences, setExperiences] = useState([])
    // const [educations, setEducations] = useState([])
    // const [skills, setSkills] = useState([])
    // const [languages, setLanguages] = useState([])
    const experiences = [
        {jobTitle: "Data Scientist", company: "Google", startDate: "21-10-2019", endDate: "21-10-2022", city: "New York"},
        {jobTitle: "Data Scientist", company: "Google", startDate: "21-10-2019", endDate: "21-10-2022", city: "New York"},
        {jobTitle: "Data Scientist", company: "Google", startDate: "21-10-2019", endDate: "21-10-2022", city: "New York"},
    ]

    const educations = [
        {school: "Data Scientist", diploma: "Google", startDate: "21-10-2019", endDate: "21-10-2022", speciality: "New York"},
        {school: "Data Scientist", diploma: "Google", startDate: "21-10-2019", endDate: "21-10-2022", speciality: "New York"},
        {school: "Data Scientist", diploma: "Google", startDate: "21-10-2019", endDate: "21-10-2022", speciality: "New York"},
    ]

    const skills = ["python", "java", "React", "TailwindCSS"]

    const languages = ["Arabic", "Frensh", "English", "Spanish"]

    // useEffect(() => {
    //     axios.get('http://localhost:8085/candidate/1')
    //         .then(res => {
    //             console.log(res.data)
    //             // setJobs(res.data)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }, [])

    return (
        <>
        <Navbar />
        <div className="container w-[90%] mx-auto mt-8">
            <div className="flex items-center space-x-4 border border-[#2D82B7] px-4 py-8 rounded-lg">
                <img src={Img} alt="user profile"
                className='w-24 h-24 rounded-full object-cover border border-[#2D82B7]'
                />
                <div>
                    <h2 className="text-xl font-bold">KOUNDI WAIL</h2>
                    <p className="text-gray-600">[User] is an experienced data scientist specializing in job platforms. With a strong background in statistics and machine learning, they excel in analyzing complex datasets to optimize user experience and predict market trends. Their expertise in Python, R, SQL, and data.</p>
                </div>
            </div>
            {/* Experiences Section */}
            <div className='border border-[#2D82B7] my-4 px-4 py-4 rounded-lg'>
                <div className='flex justify-between items-center  mb-4'>
                    <h3 className="text-2xl font-semibold">Experiences</h3>
                    <button type='button'><FaPlus /></button>
                </div>
                <div>
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} experience={experience} />
                    ))}
                </div>
            </div>
            {/* Educations Section */}
            <div className='border border-[#2D82B7] my-4 px-4 py-4 rounded-lg'>
                <div className='flex justify-between items-center  mb-4'>
                    <h3 className="text-2xl font-semibold">Education</h3>
                    <button type='button'><FaPlus /></button>
                </div>
                <div>
                    {educations.map((education, index) => (
                        <EducationCard key={index} education={education} />
                    ))}
                </div>
            </div>
            {/* Skills Section */}
            <div className='border border-[#2D82B7] my-4 px-4 py-4 rounded-lg'>
                <div className='flex justify-between items-center  mb-4'>
                    <h3 className="text-2xl font-semibold">Skills</h3>
                    <button type='button'><FaPlus /></button>
                </div>
                <div className='flex gap-2'>
                    {skills.map((skill, index) => (
                        <p key={index} className='p-2 border-2 rounded-xl border-[#2D82B7]'>{skill}</p>
                    ))}
                </div>
            </div>
            {/* Languages Section */}
            <div className='border border-[#2D82B7] my-4 px-4 py-4 rounded-lg'>
                <div className='flex justify-between items-center  mb-4'>
                    <h3 className="text-2xl font-semibold">Languages</h3>
                    <button type='button'><FaPlus /></button>
                </div>
                <div className='flex gap-2'>
                    {languages.map((language, index) => (
                        <p key={index} className='p-2 border-2 rounded-xl border-[#2D82B7]'>{language}</p>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}

export default CandidateProfilePage