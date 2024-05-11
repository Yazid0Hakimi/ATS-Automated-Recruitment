import React from 'react'
import Img from '../../assets/job.png'

const EducationCard = ({education}) => {
    return (
        <div className='flex gap-5 mb-3 pb-2 border-b border-b-[#2D82B7]'>
            <img 
            src={Img} alt="Experience"
            className='w-12 h-12 border border-[#2D82B7] rounded-lg'
            />
            <div>
                <h3 className='text-xl font-semibold text-black'>{education.school}</h3>
                <h4 className='text-base text-gray-500 font-semibold'>{education.diploma}, {education.speciality}</h4>
                <p className='text-sm text-gray-500'>{education.startDate} | {education.endDate}</p>
            </div>
        </div>
    )
}

export default EducationCard