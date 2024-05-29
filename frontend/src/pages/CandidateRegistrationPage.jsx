import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Img from '../assets/job.png';
import { Link } from 'react-router-dom';
import { FaCamera, FaEye, FaPlus, FaEyeSlash } from 'react-icons/fa6';
import { FaRegTrashAlt } from 'react-icons/fa';

const CandidateRegistrationPage = () => {
    const [showFirstForm, setShowFirstForm] = useState(true);
    const [showSecondForm, setShowSecondForm] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfPassword, setShowConfPassword] = useState(false);

    // State for the first form inputs
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('male');
    const [city, setCity] = useState('');
    const [bio, setBio] = useState('');

    const [education, setEducation] = useState([
        {
            schoolName: '',
            diploma: '',
            specialization: '',
            startDate: '',
            endDate: '',
        },
    ]);

    const [experience, setExperience] = useState([
        {
            jobTitle: '',
            companyName: '',
            city: '',
            startDate: '',
            endDate: '',
        },
    ]);

    const [skills, setSkills] = useState([
        {
            name: '',
            level: 0,
        },
    ]);

    const [languages, setLanguages] = useState([
        {
            name: '',
            level: 0,
        },
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
                endDate: '',
            },
        ]);
    };

    const handleAddSkill = () => {
        setSkills([
            ...skills,
            {
                name: '',
                level: 0,
            },
        ]);
    };

    const handleAddLanguage = () => {
        setLanguages([
            ...languages,
            {
                name: '',
                level: 0,
            },
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
                endDate: '',
            },
        ]);
    };

    const handleRemoveLanguage = (index) => {
        setLanguages(languages.filter((_, i) => i !== index));
    };

    const handleRemoveSkill = (index) => {
        setSkills(skills.filter((_, i) => i !== index));
    };

    const handleRemoveExperience = () => {
        setExperience(experience.slice(0, experience.length - 1));
    };

    const handleRemoveEducation = () => {
        setEducation(education.slice(0, education.length - 1));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const formData = {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            phone,
            gender,
            city,
            bio,
            education,
            experience,
            skills,
            languages,
        };

        console.log('Form Data:', formData);

        // Perform further actions like sending the data to a server
    };

    return (
        <>
            <Navbar />
            <div className="container mx-auto flex flex-col items-center md:flex-row">
                <div className="w-full md:w-1/2 p-4">
                    <form onSubmit={handleFormSubmit}>
                        <h2 className="text-xl text-[#2D82B7] font-semibold mb-2">Sign UP As Candidate</h2>
                        <div className="flex justify-between items-center mb-4">
                            <div>
                                <p className="text-base text-black">Create an account</p>
                            </div>
                            <div>
                                <p className="text-sm text-[#7D7D7D]">
                                    Already have an account? <Link to="/login" className="text-[#2D82B7] font-semibold">Login</Link>
                                </p>
                            </div>
                        </div>
                        {showFirstForm && (
                            <>
                                <div className="flex justify-center items-center">
                                    <label htmlFor="img" className="flex flex-col justify-center items-center text-center text-white w-[100px] h-[100px] bg-[#2D82B7] rounded-full cursor-pointer">
                                        <FaCamera className="text-xl" />
                                        <p className="text-sm">Add profile <br /> photo</p>
                                        <input type="file" id="img" hidden />
                                    </label>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="firstname" className="block text-sm font-medium text-black">First Name</label>
                                    <input
                                        type="text"
                                        id="firstname"
                                        placeholder="Enter your first name"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        className="w-full mt-1 p-2 rounded-lg outline-none border border-black"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="lastname" className="block text-sm font-medium text-black">Last Name</label>
                                    <input
                                        type="text"
                                        id="lastname"
                                        placeholder="Enter your last name"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        className="w-full mt-1 p-2 rounded-lg outline-none border border-black"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-sm font-medium text-black">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full mt-1 p-2 rounded-lg outline-none border border-black"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="password" className="block text-sm font-medium text-black">Password</label>
                                    <div className="relative w-full">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            id="password"
                                            placeholder="Enter your password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="w-full mt-1 p-2 rounded-lg outline-none border border-black pr-10"
                                        />
                                        <button
                                            type="button"
                                            className="absolute inset-y-0 right-0 px-3 py-2"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                                        </button>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="confirm-password" className="block text-sm font-medium text-black">Confirm Password</label>
                                    <div className="relative w-full">
                                        <input
                                            type={showConfPassword ? "text" : "password"}
                                            id="confirm-password"
                                            placeholder="Enter your password"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            className="w-full mt-1 p-2 rounded-lg outline-none border border-black pr-10"
                                        />
                                        <button
                                            type="button"
                                            className="absolute inset-y-0 right-0 px-3 py-2"
                                            onClick={() => setShowConfPassword(!showConfPassword)}
                                        >
                                            {showConfPassword ? <FaEyeSlash /> : <FaEye />}
                                        </button>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="phone" className="block text-sm font-medium text-black">Phone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        placeholder="Enter your phone number"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className="w-full mt-1 p-2 rounded-lg outline-none border border-black"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="gender" className="block text-sm font-medium text-black">Gender</label>
                                    <select
                                        id="gender"
                                        value={gender}
                                        onChange={(e) => setGender(e.target.value)}
                                        className="w-full mt-1 p-2 rounded-lg outline-none border border-black"
                                    >
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="city" className="block text-sm font-medium text-black">City</label>
                                    <input
                                        type="text"
                                        id="city"
                                        placeholder="Enter your city"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                        className="w-full mt-1 p-2 rounded-lg outline-none border border-black"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="bio" className="block text-sm font-medium text-black">Bio</label>
                                    <textarea
                                        id="bio"
                                        placeholder="Enter your bio"
                                        value={bio}
                                        onChange={(e) => setBio(e.target.value)}
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
                                <div className="mb-4">
                                    <div className="flex justify-between items-center mb-2">
                                        <label htmlFor="education" className="block text-sm font-medium text-black">Education</label>
                                        <div className="flex gap-2">
                                            <button type="button" onClick={handleRemoveEducation}><FaRegTrashAlt /></button>
                                            <button type="button" onClick={handleAddEducation}><FaPlus /></button>
                                        </div>
                                    </div>
                                    {education.map((edu, index) => (
                                        <div className="grid grid-cols-1 gap-4 mb-2" key={index}>
                                            <input
                                                type="text"
                                                placeholder="School name"
                                                value={edu.schoolName}
                                                onChange={(e) => {
                                                    const newEducation = [...education];
                                                    newEducation[index].schoolName = e.target.value;
                                                    setEducation(newEducation);
                                                }}
                                                className="p-2 rounded-lg outline-none border border-black"
                                            />
                                            <div className="grid grid-cols-2 gap-1">
                                                <input
                                                    type="text"
                                                    placeholder="Diploma"
                                                    value={edu.diploma}
                                                    onChange={(e) => {
                                                        const newEducation = [...education];
                                                        newEducation[index].diploma = e.target.value;
                                                        setEducation(newEducation);
                                                    }}
                                                    className="p-2 rounded-lg outline-none border border-black"
                                                />
                                                <input
                                                    type="text"
                                                    placeholder="Specialization"
                                                    value={edu.specialization}
                                                    onChange={(e) => {
                                                        const newEducation = [...education];
                                                        newEducation[index].specialization = e.target.value;
                                                        setEducation(newEducation);
                                                    }}
                                                    className="p-2 rounded-lg outline-none border border-black"
                                                />
                                            </div>
                                            <div className="grid grid-cols-2 gap-1">
                                                <input
                                                    type="date"
                                                    placeholder="Start Date"
                                                    value={edu.startDate}
                                                    onChange={(e) => {
                                                        const newEducation = [...education];
                                                        newEducation[index].startDate = e.target.value;
                                                        setEducation(newEducation);
                                                    }}
                                                    className="p-2 rounded-lg outline-none border border-black"
                                                />
                                                <input
                                                    type="date"
                                                    placeholder="End Date"
                                                    value={edu.endDate}
                                                    onChange={(e) => {
                                                        const newEducation = [...education];
                                                        newEducation[index].endDate = e.target.value;
                                                        setEducation(newEducation);
                                                    }}
                                                    className="p-2 rounded-lg outline-none border border-black"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mb-4">
                                    <div className="flex justify-between items-center mb-2">
                                        <label htmlFor="experience" className="block text-sm font-medium text-black">Experience</label>
                                        <div className="flex gap-2">
                                            <button type="button" onClick={handleRemoveExperience}><FaRegTrashAlt /></button>
                                            <button type="button" onClick={handleAddExperience}><FaPlus /></button>
                                        </div>
                                    </div>
                                    {experience.map((exp, index) => (
                                        <div className="grid grid-cols-1 gap-4 mb-2" key={index}>
                                            <input
                                                type="text"
                                                placeholder="Job title"
                                                value={exp.jobTitle}
                                                onChange={(e) => {
                                                    const newExperience = [...experience];
                                                    newExperience[index].jobTitle = e.target.value;
                                                    setExperience(newExperience);
                                                }}
                                                className="p-2 rounded-lg outline-none border border-black"
                                            />
                                            <div className="grid grid-cols-2 gap-1">
                                                <input
                                                    type="text"
                                                    placeholder="Company name"
                                                    value={exp.companyName}
                                                    onChange={(e) => {
                                                        const newExperience = [...experience];
                                                        newExperience[index].companyName = e.target.value;
                                                        setExperience(newExperience);
                                                    }}
                                                    className="p-2 rounded-lg outline-none border border-black"
                                                />
                                                <input
                                                    type="text"
                                                    placeholder="City"
                                                    value={exp.city}
                                                    onChange={(e) => {
                                                        const newExperience = [...experience];
                                                        newExperience[index].city = e.target.value;
                                                        setExperience(newExperience);
                                                    }}
                                                    className="p-2 rounded-lg outline-none border border-black"
                                                />
                                            </div>
                                            <div className="grid grid-cols-2 gap-1">
                                                <input
                                                    type="date"
                                                    placeholder="Start Date"
                                                    value={exp.startDate}
                                                    onChange={(e) => {
                                                        const newExperience = [...experience];
                                                        newExperience[index].startDate = e.target.value;
                                                        setExperience(newExperience);
                                                    }}
                                                    className="p-2 rounded-lg outline-none border border-black"
                                                />
                                                <input
                                                    type="date"
                                                    placeholder="End Date"
                                                    value={exp.endDate}
                                                    onChange={(e) => {
                                                        const newExperience = [...experience];
                                                        newExperience[index].endDate = e.target.value;
                                                        setExperience(newExperience);
                                                    }}
                                                    className="p-2 rounded-lg outline-none border border-black"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mb-4">
                                    <div className="flex justify-between items-center mb-2">
                                        <label htmlFor="skills" className="block text-sm font-medium text-black">Skills</label>
                                        <button type="button" onClick={handleAddSkill}><FaPlus /></button>
                                    </div>
                                    {skills.map((skill, index) => (
                                        <div className="grid grid-cols-4 items-center gap-2 my-2" key={index}>
                                            <input
                                                type="text"
                                                placeholder="Skill name"
                                                value={skill.name}
                                                onChange={(e) => {
                                                    const newSkills = [...skills];
                                                    newSkills[index].name = e.target.value;
                                                    setSkills(newSkills);
                                                }}
                                                className="p-2 rounded-lg outline-none border border-black col-span-3"
                                            />
                                            <div className="flex col-span-1">
                                                <div className="relative">
                                                    <input
                                                        type="text"
                                                        placeholder="Your level"
                                                        value={skill.level}
                                                        onChange={(e) => {
                                                            const newSkills = [...skills];
                                                            newSkills[index].level = e.target.value;
                                                            setSkills(newSkills);
                                                        }}
                                                        className="p-2 w-full rounded-lg outline-none border border-black pr-8"
                                                    />
                                                    <span className="absolute right-2 top-1/2 transform -translate-y-1/2">/ 10</span>
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={() => handleRemoveSkill(index)}
                                                    className="text-black ml-2 flex justify-end items-center"
                                                >
                                                    <FaRegTrashAlt />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mb-4">
                                    <div className="flex justify-between items-center mb-2">
                                        <label htmlFor="languages" className="block text-sm font-medium text-black">Languages</label>
                                        <button type="button" onClick={handleAddLanguage}><FaPlus /></button>
                                    </div>
                                    {languages.map((lang, index) => (
                                        <div className="grid grid-cols-4 items-center gap-2 my-2" key={index}>
                                            <input
                                                type="text"
                                                placeholder="Language name"
                                                value={lang.name}
                                                onChange={(e) => {
                                                    const newLanguages = [...languages];
                                                    newLanguages[index].name = e.target.value;
                                                    setLanguages(newLanguages);
                                                }}
                                                className="p-2 rounded-lg outline-none border border-black col-span-3"
                                            />
                                            <div className="flex col-span-1">
                                                <div className="relative">
                                                    <input
                                                        type="text"
                                                        placeholder="Your level"
                                                        value={lang.level}
                                                        onChange={(e) => {
                                                            const newLanguages = [...languages];
                                                            newLanguages[index].level = e.target.value;
                                                            setLanguages(newLanguages);
                                                        }}
                                                        className="p-2 w-full rounded-lg outline-none border border-black pr-8"
                                                    />
                                                    <span className="absolute right-2 top-1/2 transform -translate-y-1/2">/ 10</span>
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={() => handleRemoveLanguage(index)}
                                                    className="text-black ml-2 flex justify-end items-center"
                                                >
                                                    <FaRegTrashAlt />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
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
                                        onClick={handleFormSubmit}
                                        className="bg-[#2D82B7] w-1/2 text-white px-4 py-2 rounded-lg"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </>
                        )}
                    </form>
                </div>
                <div className="hidden md:block md:w-1/2">
                    <img src={Img} alt="Image" className="w-full h-auto" />
                </div>
            </div>
        </>
    );
};

export default CandidateRegistrationPage;
