import React from 'react'
import Img from '../../assets/job.png'

const ExperienceCard = ({experience}) => {
    const formatDate = (date) => {
        return new Date(date).toISOString().slice(0, 10);
    };

    return (
        <div className='flex gap-5 mb-3 pb-2 border-b border-b-[#2D82B7]'>
            <img 
            src={Img} alt="Experience"
            className='w-12 h-12 border border-[#2D82B7] rounded-lg'
            />
            <div>
                <h3 className='text-xl font-semibold text-black'>{experience.title}</h3>
                <h4 className='text-base text-gray-500 font-semibold'>{experience.company}</h4>
                <p className='text-sm text-gray-500'>{formatDate(experience.startDate)} | {experience.endDate ? formatDate(experience.endDate) : 'Now'}</p>
                <p className='text-sm text-gray-500'>{experience.city}</p>
            </div>
        </div>
    )
}

export default ExperienceCard