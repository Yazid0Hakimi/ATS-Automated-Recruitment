import React, { useEffect, useState } from 'react'
import { FaDollarSign } from 'react-icons/fa'
import { MdDomain, MdWorkHistory } from 'react-icons/md'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import loginImg from '../assets/login-image.png'
import Navbar from '../components/Navbar'

const JobDetails = () => {
    const [job, setJob] = useState({})
    const {id} = useParams()

    // Fetch jobs from the backend using axios
    useEffect(() => {
        axios.get(`http://localhost:8085/jobs/${id}`)
            .then(res => {
                console.log(res.data)
                setJob(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <>
            <Navbar />
            <div className="container w-[90%] mx-auto my-8">
                <div className='shadow_job rounded-xl py-3 px-5 mb-5'>
                    <div className="flex items-center mb-8">
                        <img src={loginImg} alt="Company Logo" className="w-16 h-16 mr-4 border border-[#2D82B7] rounded shadow-md" />
                        <div className="flex-grow">
                            <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
                            <p className="text-[#868686] mb-2">{job.city}</p>
                        </div>
                        <button className="bg-[#2D82B7] text-white font-semibold text-lg px-10 py-2 rounded-full">Apply Now</button>
                    </div>
                    <div className='flex gap-4 relative left-20'>
                        <div className='flex items-center gap-2 text-white bg-[#2D82B7] my-1 px-2 py-1 rounded-md'>
                            <MdDomain />
                            <p>{job.jobDomain}</p>
                        </div>
                        <div className='flex items-center gap-2 text-white bg-[#2D82B7] my-1 px-2 py-1 rounded-md'>
                            <MdWorkHistory />
                            <p>{job.jobType}</p>
                        </div>
                        <div className='flex items-center gap-2 text-white bg-[#2D82B7] my-1 px-2 py-1 rounded-md'>
                            <FaDollarSign />
                            <p>{job.salary}</p>
                        </div>
                    </div>
                </div>
                
                <div className="mb-8">
                    <h2 className="text-3xl font-semibold mb-4">Job Description</h2>
                    <p>{job.description}</p>
                    <div>
                        <h3 className='text-2xl mt-4 font-semibold'>Requirements</h3>
                        <ul>
                            {job.jobSkills && job.jobSkills.map(j => (
                                <li key={j.id} className='list-disc ml-5 mt-4'>{j.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                
                {/* About Company */}
                <div className="p-4 rounded-lg border border-[#2D82B7]">
                    {job.company && (
                        <>
                        <Link to={`/companies/${job.company.id}`} className="text-[#2D82B7] font-bold text-xl mb-4">{job.company.name}</Link>
                        <p>
                        {job.company.description}
                        </p>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export default JobDetails