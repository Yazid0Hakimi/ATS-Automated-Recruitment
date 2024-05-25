import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { FaSearch, FaEye } from 'react-icons/fa'
import { PiUsersThreeFill } from "react-icons/pi"
import { MdEdit, MdDelete  } from "react-icons/md"
import axios from 'axios'

const MyJobs = () => {
    const [myJobs, setMyJobs] = useState([])

    useEffect(() => {
        const fetchMyJobs = async () => {
            try {
                const res = await axios.get(`http://localhost:8085/jobsByCandidateId/1`);
                console.log(res.data);
                setMyJobs(res.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchMyJobs();
    }, [])


    return (
        <>
            <Navbar />
            <div className='container w-[90%] mx-auto mt-8'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-3xl font-bold'>My Jobs</h1>
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
                                    Job ID
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Company Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Job Title
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Job Domaine
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Application Date
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {myJobs.map((job, index) => (
                                <tr key={index} class="bg-white border-b border-black">
                                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap ">
                                        {job.jobId}
                                    </th>
                                    <td class="px-6 py-4">
                                        {job.company.name}
                                    </td>
                                    <td class="px-6 py-4">
                                        {job.jobTitle}
                                    </td>
                                    <td class="px-6 py-4">
                                        {job.jobDomaine}
                                    </td>
                                    <td class="px-6 py-4">
                                        {job.applicationDate}
                                    </td>
                                    <td class="px-6 py-4 flex gap-1">
                                        <button className='bg-[#2D82B7] text-white p-2 rounded text-xl'><FaEye /></button>
                                        <button className='bg-[#2D82B7] text-white p-2 rounded text-xl'><PiUsersThreeFill /></button>
                                        <button className='bg-[#2D82B7] text-white p-2 rounded text-xl'><MdEdit /></button>
                                        <button className='bg-[#2D82B7] text-white p-2 rounded text-xl'><MdDelete /></button>
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

export default MyJobs