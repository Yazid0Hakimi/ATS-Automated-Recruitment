import React from 'react'

const ChoiceCard = ({ icon: Icon, title }) => {
    return (
        <div className="group border border-[#2D82B7] rounded-lg px-5 py-10 flex justify-around items-center hover:bg-[#2D82B7]">
            <div className="text-8xl text-[#2D82B7] mr-4 group-hover:text-white"><Icon /></div>
            <div className="text-3xl text-[#2D82B7] text-center group-hover:text-white">{title}</div>
        </div>
    )
}

export default ChoiceCard