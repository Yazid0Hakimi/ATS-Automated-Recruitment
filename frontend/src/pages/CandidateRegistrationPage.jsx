import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Img from '../assets/job.png'
import { Link } from 'react-router-dom';
import { FaCamera, FaEye, FaPlus, FaEyeSlash } from 'react-icons/fa6';

const CandidateRegistrationPage = () => {
    const [showFirstForm, setShowFirstForm] = useState(true);
    const [showSecondForm, setShowSecondForm] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfPassword, setShowConfPassword] = useState(false);
    const [education, setEducation] = useState([
        {
            schoolName: '',
            diploma: '',
            specialization: '',
            startDate: '',
            endDate: ''
        }
    ]);
    const [experience, setExperience] = useState([
        {
            jobTitle: '',
            companyName: '',
            city: '',
            startDate: '',
            endDate: ''
        }
    ]);

    const handleNextButtonClick = () => {
        setShowFirstForm(false);
        setShowSecondForm(true);
    };

    const handleBackButtonClick = () => {
        setShowFirstForm(true);
        setShowSecondForm(false);
    };

    const handleAddEducation = () => {
        setEducation([
            ...education,
            {
                schoolName: '',
                diploma: '',
                specialization: '',
                startDate: '',
                endDate: ''
            }
        ]);
    };
    const handleAddExperience = () => {
        setExperience([
            ...experience,
            {
                jobTitle: '',
                companyName: '',
                city: '',
                startDate: '',
                endDate: ''
            }
        ]);
    };

    return (
        <>
            <Navbar />
            <div className="container mx-auto flex flex-col md:flex-row">
                {/* Form Section */}
                <div className="w-full md:w-1/2 p-4">
                    <form>
                            <h2 className="text-xl text-[#2D82B7] font-semibold mb-2">Sign UP As Candidate</h2>
                            <div className="flex justify-between items-center mb-4">
                                <div>
                                    <p className="text-base text-black">Create an account</p>
                                </div>
                                <div>
                                    <p className="text-sm text-[#7D7D7D]">Already have an account? <Link to='/login' className='text-[#2D82B7] font-semibold' > Login</Link></p>
                                </div>
                            </div>
                    {showFirstForm && (
                        <>
                            <div className='flex justify-center items-center'>
                                <label htmlFor='img' className='flex flex-col justify-center items-center text-center text-white w-[100px] h-[100px] bg-[#2D82B7] rounded-full cursor-pointer'>
                                    <FaCamera className='text-xl' />
                                    <p className='text-sm'>Add profile <br /> photo</p>
                                    <input type="file" id='img' hidden />
                                </label>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="firstname" className="block text-sm font-medium text-black">first name</label>
                                <input
                                    type="text"
                                    id="firstname"
                                    placeholder="Enter your first name"
                                    className="w-full mt-1 p-2 rounded-lg outline-none border border-black"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="lastname" className="block text-sm font-medium text-black">last name</label>
                                <input
                                    type="text"
                                    id="lastname"
                                    placeholder="Enter your last name"
                                    className="w-full mt-1 p-2 rounded-lg outline-none border border-black"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-black">email</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    className="w-full mt-1 p-2 rounded-lg outline-none border border-black"
                                />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor="password"
                                className="block text-sm font-medium text-black"
                                >password</label>
                                <div className='relative w-full'>
                                    <input 
                                    type={showPassword ? "text":"password"} 
                                    id="password" 
                                    placeholder="Enter your password" 
                                    // value={password}
                                    // onChange={(e) => setPassword(e.target.value)}
                                    className="w-full mt-1 p-2 rounded-lg outline-none border border-black pr-10" />
                                    <button 
                                    type='button' 
                                    className="absolute inset-y-0 right-0 px-3 py-2"
                                    onClick={e => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <FaEyeSlash/>:<FaEye />}
                                    </button>
                                </div>
                            </div>
                            <div className='mb-4'>
                                <label htmlFor="confirm-password"
                                className="block text-sm font-medium text-black"
                                >confirm password</label>
                                <div className='relative w-full'>
                                    <input 
                                    type={showConfPassword ? "text":"password"} 
                                    id="confirm-password" 
                                    placeholder="Enter your password" 
                                    // value={password}
                                    // onChange={(e) => setPassword(e.target.value)}
                                    className="w-full mt-1 p-2 rounded-lg outline-none border border-black pr-10" />
                                    <button 
                                    type='button' 
                                    className="absolute inset-y-0 right-0 px-3 py-2"
                                    onClick={e => setShowConfPassword(!showConfPassword)}
                                    >
                                        {showConfPassword ? <FaEyeSlash/>:<FaEye />}
                                    </button>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="phone" className="block text-sm font-medium text-black">phone</label>
                                <input
                                    type="phone"
                                    id="tel"
                                    placeholder="Enter your phone number"
                                    className="w-full mt-1 p-2 rounded-lg outline-none border border-black"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="gender" className="block text-sm font-medium text-black">Gender</label>
                                <select
                                    id="gender"
                                    className="w-full mt-1 p-2 rounded-lg outline-none border border-black"
                                >
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="city" className="block text-sm font-medium text-black">city</label>
                                <input
                                    type="text"
                                    id="city"
                                    placeholder="Enter your city"
                                    className="w-full mt-1 p-2 rounded-lg outline-none border border-black"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="bio" className="block text-sm font-medium text-black">Bio</label>
                                <textarea
                                    id="bio"
                                    placeholder="Enter your bio"
                                    className="w-full mt-1 p-2 rounded-lg resize-none outline-none border border-black"
                                    rows="8"
                                ></textarea>
                            </div>
                            <button
                            type="button"
                            onClick={handleNextButtonClick}
                            className="bg-[#2D82B7] text-white px-4 py-2 rounded-lg w-full"
                            >
                            Next
                            </button>
                        </>
                        )}
                        {showSecondForm && (
                        <>
                            {/* Education Section */}
                            <div className="mb-4">
                                <div className='flex justify-between items-center mb-2'>
                                    <label htmlFor="education" className="block text-sm font-medium text-black">Education</label>
                                    <button type='button' onClick={handleAddEducation}><FaPlus /></button>
                                </div>
                                {education.map((edu, index) => (
                                    <div className="grid grid-cols-1 gap-4 mb-2" key={index}>
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
                                ))}
                            </div>
                            {/* Experience Section */}
                            <div className="mb-4">
                                <div className='flex justify-between items-center mb-2'>
                                    <label htmlFor="education" className="block text-sm font-medium text-black">Experience</label>
                                    <button type='button' onClick={handleAddExperience}><FaPlus /></button>
                                </div>
                                {experience.map((exp, index) => (
                                    <div className="grid grid-cols-1 gap-4 mb-2" key={index}>
                                        <input
                                            type="text"
                                            placeholder="Job poste title"
                                            className="p-2 rounded-lg outline-none border border-black"
                                        />
                                        <div className='grid grid-cols-2 gap-1'>
                                            <input
                                                type="text"
                                                placeholder="company name"
                                                className="p-2 rounded-lg outline-none border border-black"
                                            />
                                            <input
                                                type="text"
                                                placeholder="city"
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
                                ))}
                            </div>
                            {/* Skills Section */}
                            <div className="mb-4">
                                <label htmlFor="skills" className="block text-sm font-medium text-black">Skills</label>
                                <textarea
                                    id="skills"
                                    placeholder="Enter your skills and separate them with comma (,)"
                                    className="w-full mt-1 p-2 rounded-lg resize-none outline-none border border-black"
                                    rows="6"
                                ></textarea>
                            </div>
                            {/* Languages Section */}
                            <div className="mb-4">
                                <label htmlFor="languages" className="block text-sm font-medium text-black">Languages</label>
                                <textarea
                                    id="languages"
                                    placeholder="Enter your languages and separate them with comma (,)"
                                    className="w-full mt-1 p-2 rounded-lg resize-none outline-none border border-black"
                                    rows="4"
                                ></textarea>
                            </div>
                            <div className="flex justify-between gap-1">
                                <button
                                    type="button"
                                    onClick={handleBackButtonClick}
                                    className="bg-gray-500 w-1/2 text-white px-4 py-2 rounded-lg"
                                >
                                    Back
                                </button>
                                <button
                                    type="submit"
                                    className="bg-[#2D82B7] w-1/2 text-white px-4 py-2 rounded-lg"
                                >
                                    Submit
                                </button>
                            </div>
                        </>
                        )}
                    </form>
                </div>
                {/* Image Section */}
                <div className="hidden md:block md:w-1/2">
                    <img
                        src={Img}
                        alt="Image"
                        className="w-full h-auto"
                    />
                </div>
            </div>
        </>
    )
}

export default CandidateRegistrationPage