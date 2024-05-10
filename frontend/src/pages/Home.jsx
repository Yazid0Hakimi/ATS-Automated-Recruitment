import React from 'react'
import Navbar from '../components/Navbar'
import JobCard from '../components/JobCard'
import Filter from '../components/Filter'
import { Link } from 'react-router-dom'

const Home = () => {
    const jobs = [
        {
            id: 1,
            jobTitle: 'Software Developer',
            companyName: 'Google',
            companyCity: 'Bangalore, India',
            domain: 'Engineering',
            jobType: 'Full-time',
            salary: '10000'
        },
        {
            id: 2,
            jobTitle: 'Data Scientist',
            companyName: 'Amazon',
            companyCity: 'New York, USA',
            domain: 'Data Science',
            jobType: 'Part-time',
            salary: '5000'
        },
        {
            id: 3,
            jobTitle: 'Product Manager',
            companyName: 'Facebook',
            companyCity: 'London, UK',
            domain: 'Management',
            jobType: 'Full-time',
            salary: '8000'
        },
        {
            id: 4,
            jobTitle: 'Software Developer',
            companyName: 'Google',
            companyCity: 'Bangalore, India',
            domain: 'Engineering',
            jobType: 'Full-time',
            salary: '10000'
        },
        {
            id: 5,
            jobTitle: 'Data Scientist',
            companyName: 'Amazon',
            companyCity: 'New York, USA',
            domain: 'Data Science',
            jobType: 'Part-time',
            salary: '5000'
        },
        {
            id: 6,
            jobTitle: 'Product Manager',
            companyName: 'Facebook',
            companyCity: 'London, UK',
            domain: 'Management',
            jobType: 'Full-time',
            salary: '8000'
        },
        {
            id: 7,
            jobTitle: 'Software Developer',
            companyName: 'Google',
            companyCity: 'Bangalore, India',
            domain: 'Engineering',
            jobType: 'Full-time',
            salary: '10000'
        },
        {
            id: 8,
            jobTitle: 'Data Scientist',
            companyName: 'Amazon',
            companyCity: 'New York, USA',
            domain: 'Data Science',
            jobType: 'Part-time',
            salary: '5000'
        },
        {
            id: 9,
            jobTitle: 'Product Manager',
            companyName: 'Facebook',
            companyCity: 'London, UK',
            domain: 'Management',
            jobType: 'Full-time',
            salary: '8000'
        },
        {
            id: 10,
            jobTitle: 'Software Developer',
            companyName: 'Google',
            companyCity: 'Bangalore, India',
            domain: 'Engineering',
            jobType: 'Full-time',
            salary: '10000'
        },
        {
            id: 11,
            jobTitle: 'Data Scientist',
            companyName: 'Amazon',
            companyCity: 'New York, USA',
            domain: 'Data Science',
            jobType: 'Part-time',
            salary: '5000'
        },
        {
            id: 12,
            jobTitle: 'Product Manager',
            companyName: 'Facebook',
            companyCity: 'London, UK',
            domain: 'Management',
            jobType: 'Full-time',
            salary: '8000'
        },
    ]
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
                                        jobTitle={job.jobTitle}
                                        companyName={job.companyName}
                                        companyCity={job.companyCity}
                                        domain={job.domain}
                                        jobType={job.jobType}
                                        salary={job.salary}
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