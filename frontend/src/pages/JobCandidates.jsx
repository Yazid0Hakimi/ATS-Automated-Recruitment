import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { FaSearch } from 'react-icons/fa'
import { FiChevronsRight } from "react-icons/fi";
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

const JobCandidates = () => {
    const [candidateForJob, setCandidateForJob] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const fetchCandidates = async () => {
            try {
                const res = await axios.get(`http://localhost:8085/applications/job/${id}`);
                console.log(res.data);
                setCandidateForJob(res.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchCandidates();
    }, [])
    
    return (
        <>
            <Navbar />
            <div className='container w-[90%] mx-auto mt-8'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-3xl font-bold'>Candidates to Job</h1>
                    <div className='relative'>
                        <input 
                        type="text" 
                        placeholder='Search here...' 
                        className="border border-[#282828] rounded-md p-4 outline-none w-96"
                        />
                        <FaSearch
                        className="h-6 w-6 absolute right-3 top-1/2 transform -translate-y-1/2 text-[#282828]"
                        />
                    </div>
                </div>
                <div className='mt-20'>
                    <table className="w-full text-left text-black">
                        <thead className="uppercase border-b border-black">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    First Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Last Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Phone
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Score Matching
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Gender
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Applied At
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {candidateForJob.map(candidate => (
                                <tr key={candidate.id} className="bg-white border-b border-black">
                                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap ">
                                        {candidate.firstName}
                                    </th>
                                    <td className="px-6 py-4">
                                        {candidate.lastName}
                                    </td>
                                    <td className="px-6 py-4">
                                        {candidate.phone}
                                    </td>
                                    <td className="px-6 py-4">
                                        52 %
                                    </td>
                                    <td className="px-6 py-4">
                                        {candidate.gender}
                                    </td>
                                    <td className="px-6 py-4">
                                        {candidate.application_date}
                                    </td>
                                    <td className="px-6 py-4">
                                        <Link to={`/candidates/${candidate.id}`}>
                                            <button className='bg-[#2D82B7] text-white p-2 rounded text-xl'><FiChevronsRight /></button>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default JobCandidates