import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'
import { TbUsers } from "react-icons/tb"
import { HiOutlineBuildingLibrary } from "react-icons/hi2"
import { MdOutlineWorkOutline } from "react-icons/md"
import { IoIosArrowDropright } from "react-icons/io"
import Navbar from '../components/Navbar'
import Hero from '../components/LandingPage/Hero'
import CountCard from '../components/LandingPage/CountCard'
import JobCard from '../components/JobCard'
import HowItWorksCard from '../components/LandingPage/HowItWorksCard'

const LandingPage = () => {
    const [jobs, setJobs] = useState([])
    const howItWorksList = [
        {icon: TbUsers, title: "Create an Account", description: "Create an account to get started"},
        {icon: HiOutlineBuildingLibrary, title: "Post Job", description: "Post a job and start receiving applications"},
        {icon: MdOutlineWorkOutline, title: "Apply for Job", description: "Apply for job and get hired"},
    ]

    // Fetch jobs from the backend using axios
    useEffect(() => {
        axios.get('http://localhost:8085/jobs')
            .then(res => {
                console.log(res.data)
                setJobs(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const getTimeAgo = (date) => {
        return moment(date).fromNow();
    }

    return (
        <>
        <Navbar />
        <Hero />
        <div className='w-[80%] mx-auto py-20'>
            <div className='grid grid-cols-3 gap-4'>
                <CountCard icon={TbUsers} title='Candidate' count={100} />
                <CountCard icon={HiOutlineBuildingLibrary} title='Company' count={100} />
                <CountCard icon={MdOutlineWorkOutline} title='Job' count={100} />
            </div>
        </div>
        <div className='w-[80%] mx-auto'>
            <h2 className='text-center mb-10 text-4xl font-semibold'>New <span className='text-[#2D82B7]'>Jobs</span></h2>
            <div className='flex justify-center'>
                <div className="grid grid-cols-3 gap-10">
                    {jobs.map(job => (
                        <Link
                            to={`/jobs/${job.id}`}
                            key={job.id}
                        >
                            <JobCard
                                time={getTimeAgo(job.date)}
                                jobTitle={job.jobTitle}
                                companyName={job.enterpriseName}
                                companyCity={job.city}
                                domain={job.jobDomaine}
                                jobType={job.workTime}
                                salary={job.salaire}
                            />
                        </Link>
                    ))}
                </div>
            </div>
            <div className='flex justify-center my-10'>
                <Link to='/home'
                className='flex justify-around items-center bg-[#2D82B7] border border-[#2D82B7] text-white px-6 py-3 rounded font-semibold hover:bg-transparent hover:text-[#2D82B7] transition duration-300'
                >
                    <p className='mr-4'>Browse Jobs</p>
                    <IoIosArrowDropright className='text-xl' />
                </Link>
            </div>
        </div>
        <div className='w-[80%] mx-auto'>
            <h2 className='text-center mb-10 text-4xl font-semibold'>How It <span className='text-[#2D82B7]'>Works</span></h2>
            <div className='flex justify-center mb-10'>
                <div className='grid grid-cols-3 gap-14'>
                {howItWorksList.map((item, index) => (
                    <HowItWorksCard key={index} icon={item.icon} title={item.title} description={item.description} />
                ))}
                </div>
            </div>
        </div>
        </>
    )
}

export default LandingPage