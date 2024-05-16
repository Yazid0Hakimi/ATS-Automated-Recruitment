import React from 'react'

const HowItWorksCard = ({icon: Icon, title, description}) => {
    return (
        <div className='flex flex-col items-center'>
            <div className='w-20 h-20 bg-[#2D82B7] rounded-full flex items-center justify-center'>
                <Icon className='text-white text-4xl' />
            </div>
            <h3 className='text-2xl font-semibold mt-4'>{title}</h3>
            <p className='text-center text-gray-500 text-base'>{description}</p>
        </div>
    )
}

export default HowItWorksCard