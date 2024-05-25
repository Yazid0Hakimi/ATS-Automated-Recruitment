import React, { useEffect, useState } from 'react'
import { FaPlus, FaXmark } from 'react-icons/fa6'
import axios from 'axios'
import Navbar from '../components/Navbar'
import Img from '../assets/job.png'
import ExperienceCard from '../components/Experiences/ExperienceCard'
import EducationCard from '../components/Experiences/EducationCard'
import { useParams } from 'react-router-dom'

const CandidateProfilePage = () => {
    const [user, setUser] = useState({})
    const [isExperienceModalOpen, setIsExperienceModalOpen] = useState(false);
    const [isEducationModalOpen, setIsEducationModalOpen] = useState(false);
    const [isSkillModalOpen, setIsSkillModalOpen] = useState(false);
    const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8085/candidates/${id}`)
            .then(res => {
                console.log(res.data)
                setUser(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    const handleOpenModal = () => {
        setIsExperienceModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsExperienceModalOpen(false);
    };

    const handleEducationOpenModal = () => {
        setIsEducationModalOpen(true);
    };

    const handleEducationCloseModal = () => {
        setIsEducationModalOpen(false);
    };

    const handleSkillOpenModal = () => {
        setIsSkillModalOpen(true);
    };

    const handleSkillCloseModal = () => {
        setIsSkillModalOpen(false);
    };

    const handleLanguageOpenModal = () => {
        setIsLanguageModalOpen(true);
    };

    const handleLanguageCloseModal = () => {
        setIsLanguageModalOpen(false);
    };

    return (
        <>
        <Navbar />
        <div className="container w-[90%] mx-auto mt-8">
            <div className="flex items-center space-x-4 border border-[#2D82B7] px-4 py-8 rounded-lg">
                <img src={user.profilePic} alt="user profile"
                className='w-24 h-24 rounded-full object-cover border border-[#2D82B7]'
                />
                <div>
                    <h2 className="text-xl font-bold">{user.firstName} {user.lastName}</h2>
                    <p className="text-gray-600">{user.bio}</p>
                </div>
            </div>
            {/* Experiences Section */}
            <div className='border border-[#2D82B7] my-4 px-4 py-4 rounded-lg'>
                <div className='flex justify-between items-center  mb-4'>
                    <h3 className="text-2xl font-semibold">Experiences</h3>
                    <button type='button' onClick={handleOpenModal}><FaPlus /></button>
                </div>
                <div>
                    {user.experienceList && user.experienceList.length > 0 && user.experienceList.map((experience, index) => (
                        <ExperienceCard key={index} experience={experience} />
                    ))}
                </div>
            </div>
            {/* Experience Modal */}
            {isExperienceModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
                        <div className="flex justify-between items-center border-b pb-2 mb-4">
                            <h2 className="text-xl font-bold">Add Experience</h2>
                            <button onClick={handleCloseModal} className="text-gray-500 hover:text-gray-800">
                                <FaXmark />
                            </button>
                        </div>
                        <form>
                            <div className="grid grid-cols-1 gap-4 mb-2">
                                <input
                                    type="text"
                                    placeholder="Job post title"
                                    className="p-2 rounded-lg outline-none border border-black"
                                />
                                <div className="grid grid-cols-2 gap-1">
                                    <input
                                        type="text"
                                        placeholder="Company name"
                                        className="p-2 rounded-lg outline-none border border-black"
                                    />
                                    <input
                                        type="text"
                                        placeholder="City"
                                        className="p-2 rounded-lg outline-none border border-black"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-1">
                                    <input
                                        type="date"
                                        placeholder="Start Date"
                                        className="p-2 rounded-lg outline-none border border-black"
                                    />
                                    <input
                                        type="date"
                                        placeholder="End Date"
                                        className="p-2 rounded-lg outline-none border border-black"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <button type="button" onClick={handleCloseModal} className="p-2 bg-[#B72D3A] text-white rounded mr-2">
                                    Cancel
                                </button>
                                <button type="submit" className="p-2 bg-[#2D82B7] text-white rounded">
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            {/* Educations Section */}
            <div className='border border-[#2D82B7] my-4 px-4 py-4 rounded-lg'>
                <div className='flex justify-between items-center  mb-4'>
                    <h3 className="text-2xl font-semibold">Education</h3>
                    <button type='button' onClick={handleEducationOpenModal}><FaPlus /></button>
                </div>
                <div>
                    {user.educationList && user.educationList.length > 0 && user.educationList.map((education, index) => (
                        <EducationCard key={index} education={education} />
                    ))}
                </div>
            </div>
            {/* Education Modal */}
            {isEducationModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
                        <div className="flex justify-between items-center border-b pb-2 mb-4">
                            <h2 className="text-xl font-bold">Add Education</h2>
                            <button onClick={handleEducationCloseModal} className="text-gray-500 hover:text-gray-800">
                                <FaXmark />
                            </button>
                        </div>
                        <form>
                            <div className="grid grid-cols-1 gap-4 mb-2">
                                <input
                                    type="text"
                                    placeholder="School name"
                                    className="p-2 rounded-lg outline-none border border-black"
                                />
                                <div className='grid grid-cols-2 gap-1'>
                                    <input
                                        type="text"
                                        placeholder="Diploma"
                                        className="p-2 rounded-lg outline-none border border-black"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Specialization"
                                        className="p-2 rounded-lg outline-none border border-black"
                                    />
                                </div>
                                <div className='grid grid-cols-2 gap-1'>
                                    <input
                                        type="date"
                                        placeholder="Start Date"
                                        className="p-2 rounded-lg outline-none border border-black"
                                    />
                                    <input
                                        type="date"
                                        placeholder="End Date"
                                        className="p-2 rounded-lg outline-none border border-black"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <button type="button" onClick={handleEducationCloseModal} className="p-2 bg-[#B72D3A] text-white rounded mr-2">
                                    Cancel
                                </button>
                                <button type="submit" className="p-2 bg-[#2D82B7] text-white rounded">
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            {/* Skills Section */}
            <div className='border border-[#2D82B7] my-4 px-4 py-4 rounded-lg'>
                <div className='flex justify-between items-center  mb-4'>
                    <h3 className="text-2xl font-semibold">Skills</h3>
                    <button type='button' onClick={handleSkillOpenModal}><FaPlus /></button>
                </div>
                <div className='flex flex-wrap gap-2'>
                    {user.skillsList && user.skillsList.map((skill, index) => (
                        <p key={index} className='p-2 border-2 rounded-xl border-[#2D82B7]'>{skill.name}</p>
                    ))}
                </div>
            </div>
            {/* Skills Modal */}
            {isSkillModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
                        <div className="flex justify-between items-center border-b pb-2 mb-4">
                            <h2 className="text-xl font-bold">Add Skill</h2>
                            <button onClick={handleSkillCloseModal} className="text-gray-500 hover:text-gray-800">
                                <FaXmark />
                            </button>
                        </div>
                        <form>
                            <div className='grid grid-cols-4 items-center gap-2 my-2'>
                                <input
                                    type="text"
                                    placeholder="Skill name"
                                    className="p-2 rounded-lg outline-none border border-black col-span-3"
                                />
                                <div className='flex col-span-1'>
                                    <div className='relative'>
                                        <input
                                            type='text'
                                            placeholder='level'
                                            className="p-2 w-full rounded-lg outline-none border border-black pr-8"
                                        />
                                        <span className='absolute right-2 top-1/2 transform -translate-y-1/2'>/ 10</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <button type="button" onClick={handleSkillCloseModal} className="p-2 bg-[#B72D3A] text-white rounded mr-2">
                                    Cancel
                                </button>
                                <button type="submit" className="p-2 bg-[#2D82B7] text-white rounded">
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            {/* Languages Section */}
            <div className='border border-[#2D82B7] my-4 px-4 py-4 rounded-lg'>
                <div className='flex justify-between items-center  mb-4'>
                    <h3 className="text-2xl font-semibold">Languages</h3>
                    <button type='button' onClick={handleLanguageOpenModal}><FaPlus /></button>
                </div>
                <div className='flex flex-wrap gap-2'>
                    {user.languagesList && user.languagesList.map((language, index) => (
                        <p key={index} className='p-2 border-2 rounded-xl border-[#2D82B7]'>{language.name}</p>
                    ))}
                </div>
            </div>
            {/* Language Modal */}
            {isLanguageModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
                        <div className="flex justify-between items-center border-b pb-2 mb-4">
                            <h2 className="text-xl font-bold">Add Language</h2>
                            <button onClick={handleLanguageCloseModal} className="text-gray-500 hover:text-gray-800">
                                <FaXmark />
                            </button>
                        </div>
                        <form>
                            <div className='grid grid-cols-4 items-center gap-2 my-2'>
                                <input
                                    type="text"
                                    placeholder="Language name"
                                    className="p-2 rounded-lg outline-none border border-black col-span-3"
                                />
                                <div className='flex col-span-1'>
                                    <div className='relative'>
                                        <input
                                            type='text'
                                            placeholder='level'
                                            className="p-2 w-full rounded-lg outline-none border border-black pr-8"
                                        />
                                        <span className='absolute right-2 top-1/2 transform -translate-y-1/2'>/ 10</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <button type="button" onClick={handleLanguageCloseModal} className="p-2 bg-[#B72D3A] text-white rounded mr-2">
                                    Cancel
                                </button>
                                <button type="submit" className="p-2 bg-[#2D82B7] text-white rounded">
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
        </>
    )
}

export default CandidateProfilePage