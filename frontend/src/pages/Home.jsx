import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'
import Navbar from '../components/Navbar'
import JobCard from '../components/JobCard'
import Filter from '../components/Filter'
import Footer from '../components/Footer'

const Home = () => {
    const [jobs, setJobs] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [jobsPerPage] = useState(8); // Number of jobs per page
    const [totalPages, setTotalPages] = useState(1);

    // Fetch jobs from the backend using axios
    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const res = await axios.get(`http://localhost:8085/jobs`);
                const totalJobs = res.data.length;
                setTotalPages(Math.ceil(totalJobs / jobsPerPage));

                // Slice the fetched jobs based on pagination
                const startIndex = (currentPage - 1) * jobsPerPage;
                const endIndex = startIndex + jobsPerPage;
                setJobs(res.data.slice(startIndex, endIndex));
            } catch (error) {
                console.log(error);
            }
        };

        fetchJobs();
    }, [currentPage, jobsPerPage])

    const getTimeAgo = (date) => {
        return moment(date).fromNow();
    }

    // Pagination logic
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleFilter = (filters) => {
        // Fetch jobs again or filter locally based on the filters
        // Assuming fetchJobs() fetches the data from the backend
        // You might want to implement a better filtering strategy
    };

    return (
        <div>
            <Navbar />
            <div className="container w-[85%] mx-auto mt-8">
                <div className="flex flex-col my-10">
                    <div className="mb-4">
                        <Filter onFilter={handleFilter} />
                    </div>
                    <div>
                        <h1 className="text-3xl text-[#2D82B7] font-bold mb-4">Job Posts</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {jobs.map(job => (
                                <Link
                                    to={`/jobs/${job.id}`}
                                    key={job.id}
                                >
                                    <JobCard
                                        time={getTimeAgo(job.date)}
                                        jobTitle={job.jobTitle}
                                        companyName={job.company.name}
                                        companyCity={job.city}
                                        domain={job.jobDomaine}
                                        jobType={job.workTime}
                                        salary={job.salaire}
                                    />
                                </Link>
                            ))}
                        </div>
                        {/* Pagination */}
                        <div className="flex justify-center mt-4">
                            <ul className="pagination">
                                <li className="page-item">
                                    <button onClick={() => paginate(1)} className="page-link">First</button>
                                </li>
                                <li className="page-item">
                                    <button onClick={() => paginate(currentPage - 1)} className="page-link">Previous</button>
                                </li>
                                {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => (
                                    <li key={i} className="page-item">
                                        <button
                                            onClick={() => paginate(i + 1)}
                                            className={`page-link ${currentPage === i + 1 ? 'active' : ''}`}
                                        >
                                            {i + 1}
                                        </button>
                                    </li>
                                ))}
                                <li className="page-item">
                                    <button onClick={() => paginate(currentPage + 1)} className="page-link">Next</button>
                                </li>
                                <li className="page-item">
                                    <button onClick={() => paginate(totalPages)} className="page-link">Last</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home