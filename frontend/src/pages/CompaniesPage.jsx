import React, { useEffect, useState } from 'react'
import CompanyCard from '../components/CompanyCard';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const CompaniesPage = () => {
    const [companies, setCompanies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [jobsPerPage] = useState(9); // Number of jobs per page
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        // Fetch companies from the backend
        const fetchCompanies = async () => {
            try {
                // const res = await axios.get('http://localhost:8085/companies');
                // setCompanies(res.data);
                const res = await axios.get(`http://localhost:8085/companies`);
                const totalJobs = res.data.length;
                setTotalPages(Math.ceil(totalJobs / jobsPerPage));

                // Slice the fetched jobs based on pagination
                const startIndex = (currentPage - 1) * jobsPerPage;
                const endIndex = startIndex + jobsPerPage;
                setCompanies(res.data.slice(startIndex, endIndex));
            } catch (error) {
                console.error('Error fetching companies:', error);
            }
        };

        fetchCompanies();
    }, [currentPage, jobsPerPage]);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            <Navbar />
            <div className="container w-[85%] mx-auto mt-8">
                <div className='my-10'>
                    <h1 className="text-3xl text-[#2D82B7] font-bold mb-4">Companies</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {companies.map(company => (
                            <Link to={`/companies/${company.id}`}>
                                <CompanyCard key={company.id} company={company} />
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
            <Footer />
        </div>
    )
}

export default CompaniesPage