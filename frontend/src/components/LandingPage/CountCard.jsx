import React from 'react'

const CountCard = ({ icon: Icon, title, count }) => {
    return (
        <div className="flex items-center justify-center rounded-lg p-4">
            <div className="mr-4 p-3 text-[#2D82B7] rounded-full">
                <Icon className="text-6xl" />
            </div>
            <div>
                <h2 className="text-2xl font-bold">{count}</h2>
                <p className="text-gray-500">{title}</p>
            </div>
        </div>
    )
}

export default CountCard