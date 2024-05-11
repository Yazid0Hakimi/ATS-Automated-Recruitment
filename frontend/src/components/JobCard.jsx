import React from 'react'
import { FaDollarSign} from 'react-icons/fa6'
import { MdWorkHistory, MdDomain } from "react-icons/md";
import image from '../assets/login-image.png'

const JobCard = ({time, jobTitle, companyName, companyCity, domain, jobType, salary}) => {
    return (
        <div className='w-[300px] shadow-md p-5 rounded border border-[#2D82B7]'>
            <div className='flex items-center justify-between mb-2'>
                <img src={image} alt="company logo" className='w-16 h-16 shadow border border-[#2D82B7] rounded' />
                <span className='text-[#868686] text-sm'>{time}</span>
            </div>
            <div className='flex flex-col'>
                <div className='mb-2'>
                    <h3 className='font-bold text-2xl'>{jobTitle}</h3>
                    <h4 className='font-semibold text-lg'>{companyName}</h4>
                    <p className='text-[#868686] text-base'>{companyCity}</p>
                </div>
                <div className='flex items-center gap-2 text-white bg-[#2D82B7] my-1 px-2 py-1 rounded-md'>
                    <MdDomain />
                    <p>{domain}</p>
                </div>
                <div className='flex items-center gap-2 text-white bg-[#2D82B7] my-1 px-2 py-1 rounded-md'>
                    <MdWorkHistory />
                    <p>{jobType}</p>
                </div>
                <div className='flex items-center gap-2 text-white bg-[#2D82B7] my-1 px-2 py-1 rounded-md'>
                    <FaDollarSign />
                    <p>{salary}</p>
                </div>
            </div>
        </div>
    )
}

export default JobCard