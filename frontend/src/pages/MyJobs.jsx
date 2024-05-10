import React from 'react'
import Navbar from '../components/Navbar'
import { FaSearch, FaEye } from 'react-icons/fa'
import { PiUsersThreeFill } from "react-icons/pi"
import { MdEdit, MdDelete  } from "react-icons/md"

const MyJobs = () => {
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
                    <table class="w-full text-left text-black">
                        <thead class="uppercase border-b border-black">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Job ID
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Job Title
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Job Type
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Salary
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b border-black">
                                <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap ">
                                    1
                                </th>
                                <td class="px-6 py-4">
                                    Data Scientist
                                </td>
                                <td class="px-6 py-4">
                                    Fulltime
                                </td>
                                <td class="px-6 py-4">
                                    $10000
                                </td>
                                <td class="px-6 py-4 flex gap-1">
                                    <button className='bg-[#2D82B7] text-white p-2 rounded text-xl'><FaEye /></button>
                                    <button className='bg-[#2D82B7] text-white p-2 rounded text-xl'><PiUsersThreeFill /></button>
                                    <button className='bg-[#2D82B7] text-white p-2 rounded text-xl'><MdEdit /></button>
                                    <button className='bg-[#2D82B7] text-white p-2 rounded text-xl'><MdDelete /></button>
                                </td>
                            </tr>
                            <tr class="bg-white border-b border-black">
                                <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap ">
                                    2
                                </th>
                                <td class="px-6 py-4">
                                    Software Engineer
                                </td>
                                <td class="px-6 py-4">
                                    Fulltime
                                </td>
                                <td class="px-6 py-4">
                                    $10000
                                </td>
                                <td class="px-6 py-4 flex gap-1">
                                    <button className='bg-[#2D82B7] text-white p-2 rounded text-xl'><FaEye /></button>
                                    <button className='bg-[#2D82B7] text-white p-2 rounded text-xl'><PiUsersThreeFill /></button>
                                    <button className='bg-[#2D82B7] text-white p-2 rounded text-xl'><MdEdit /></button>
                                    <button className='bg-[#2D82B7] text-white p-2 rounded text-xl'><MdDelete /></button>
                                </td>
                            </tr>
                            <tr class="bg-white border-b border-black">
                                <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap ">
                                    3
                                </th>
                                <td class="px-6 py-4">
                                    Web Developer
                                </td>
                                <td class="px-6 py-4">
                                    Fulltime
                                </td>
                                <td class="px-6 py-4">
                                    $10000
                                </td>
                                <td class="px-6 py-4 flex gap-1">
                                    <button className='bg-[#2D82B7] text-white p-2 rounded text-xl'><FaEye /></button>
                                    <button className='bg-[#2D82B7] text-white p-2 rounded text-xl'><PiUsersThreeFill /></button>
                                    <button className='bg-[#2D82B7] text-white p-2 rounded text-xl'><MdEdit /></button>
                                    <button className='bg-[#2D82B7] text-white p-2 rounded text-xl'><MdDelete /></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default MyJobs