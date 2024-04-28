import React from 'react'
import Navbar from '../components/Navbar'
import { FaEye, FaSearch } from 'react-icons/fa'
import { PiUsersThreeFill } from 'react-icons/pi'
import { MdDelete, MdEdit } from 'react-icons/md'

const JobCandidates = () => {
    return (
        <>
            <Navbar />
            <div className='container mx-auto mt-8'>
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
                    <table class="w-full text-left text-black">
                        <thead class="uppercase border-b border-black">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Job Title
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Candidate Name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Applied At
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Score Matching
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Skills
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b border-black">
                                <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap ">
                                    Data Scientist
                                </th>
                                <td class="px-6 py-4">
                                    John Doe
                                </td>
                                <td class="px-6 py-4">
                                    2024-04-21
                                </td>
                                <td class="px-6 py-4">
                                    52 %
                                </td>
                                <td class="px-6 py-4">
                                    Python, Machine Learning, Data Analysis...
                                </td>
                            </tr>
                            <tr class="bg-white border-b border-black">
                                <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap ">
                                    Data Scientist
                                </th>
                                <td class="px-6 py-4">
                                    Jane Doe
                                </td>
                                <td class="px-6 py-4">
                                    2024-04-21
                                </td>
                                <td class="px-6 py-4">
                                    52 %
                                </td>
                                <td class="px-6 py-4">
                                    Python, Machine Learning, Data Analysis...
                                </td>
                            </tr>
                            <tr class="bg-white border-b border-black">
                                <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap ">
                                    Data Scientist
                                </th>
                                <td class="px-6 py-4">
                                    John Doe
                                </td>
                                <td class="px-6 py-4">
                                    2024-04-21
                                </td>
                                <td class="px-6 py-4">
                                    52 %
                                </td>
                                <td class="px-6 py-4">
                                    Python, Machine Learning, Data Analysis...
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default JobCandidates