import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'
import Navbar from '../components/Navbar'
import JobCard from '../components/JobCard'
import Filter from '../components/Filter'

const Home = () => {
    const [jobs, setJobs] = useState([])

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
        <div>
            <Navbar />
            <div className="container w-[90%] mx-auto mt-8">
                <div className="flex">
                    <div className="w-1/4">
                        <Filter />
                    </div>
                    <div className="w-3/4 py-4 px-10">
                        <h1 className="text-3xl text-[#2D82B7] font-bold mb-4">Job Posts</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                </div>
            </div>
        </div>
    )
}

export default Home