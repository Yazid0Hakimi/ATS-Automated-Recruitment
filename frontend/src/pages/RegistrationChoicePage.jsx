import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { MdOutlineHomeWork } from "react-icons/md";
import Navbar from '../components/Navbar'
import ChoiceCard from '../components/Registration/ChoiceCard'
import { Link } from 'react-router-dom'

const RegistrationChoicePage = () => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto">
                <div className="flex justify-center flex-wrap">
                    <Link to="/register/company" className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
                        <ChoiceCard icon={MdOutlineHomeWork} title="Sign UP As Company" />
                    </Link>
                    <Link to="/register/candidate" className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
                        <ChoiceCard icon={FaRegUser} title="Sign UP As Candidate" />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default RegistrationChoicePage