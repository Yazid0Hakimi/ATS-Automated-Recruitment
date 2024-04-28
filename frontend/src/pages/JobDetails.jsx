import React from 'react'
import { FaDollarSign } from 'react-icons/fa'
import { MdDomain, MdWorkHistory } from 'react-icons/md'
import loginImg from '../assets/login-image.png'
import Navbar from '../components/Navbar'

const JobDetails = () => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto mt-8">
                <div className='shadow_job rounded-xl py-3 px-5 mb-5'>
                    <div className="flex items-center mb-8">
                        <img src={loginImg} alt="Company Logo" className="w-16 h-16 mr-4 border border-black rounded shadow-md" />
                        <div className="flex-grow">
                            <h1 className="text-3xl font-bold mb-2">Software Engineer</h1>
                            <p className="text-[#868686] mb-2">New York, NY</p>
                        </div>
                        <button className="bg-black text-white font-bold text-lg px-10 py-4 rounded-full">Apply Now</button>
                    </div>
                    <div className='flex gap-4 relative left-20'>
                        <div className='flex items-center gap-2 text-white bg-black my-1 px-2 py-1 rounded-md'>
                            <MdDomain />
                            <p>Tech</p>
                        </div>
                        <div className='flex items-center gap-2 text-white bg-black my-1 px-2 py-1 rounded-md'>
                            <MdWorkHistory />
                            <p>Fulltime</p>
                        </div>
                        <div className='flex items-center gap-2 text-white bg-black my-1 px-2 py-1 rounded-md'>
                            <FaDollarSign />
                            <p>10000</p>
                        </div>
                    </div>
                </div>
                
                <div className="mb-8">
                    <h2 className="text-3xl font-semibold mb-4">Job Description</h2>
                    <p>
                    Position Overview:
We are seeking a highly skilled and experienced Data Scientist to join our dynamic team. 
The ideal candidate will be passionate about leveraging data to drive business decisions, possess 
a strong foundation in statistical analysis, and have a proven ability to develop machine learning 
models. As a Data Scientist, you will be responsible for interpreting and analyzing data, developing 
predictive models, and communicating findings to stakeholders.
Key Responsibilities:
Analyze large, complex datasets to extract actionable insights.
Develop and implement machine learning models for predictive modeling and optimization 
purposes.
Collaborate with cross-functional teams to understand business objectives and identify 
opportunities for leveraging data to drive business solutions.
Design and conduct experiments to test hypotheses and support decision-making.
Clean and preprocess data to ensure accuracy and reliability.
Communicate findings and insights to technical and non-technical stakeholders through data 
visualization and storytelling.
Stay up-to-date with the latest technology trends, tools, and methodologies in data science 
and machine learning.
Requirements:
Master’s or Ph.D. in Computer Science, Statistics, Mathematics, or related field.
Proven experience as a Data Scientist or similar role.
Strong programming skills in languages such as Python, R, or Scala.
Experience with machine learning techniques and algorithms, such as regression, classification, 
clustering, and neural networks.
Proficiency in using data analysis and visualization tools, such as Pandas, NumPy, Matplotlib, 
and Seaborn.
Solid understanding of statistical concepts and techniques.
Experience working with big data technologies, such as Hadoop, Spark, or Kafka, is a plus.
Excellent problem-solving and critical-thinking abilities.
Strong communication and presentation skills, with the ability to explain complex concepts to
non-technical stakeholders.
Ability to work both independently and collaboratively in a fast-paced environment.
Prior experience in [specific industry] is a plus.
Benefits:
Competitive salary
Health, dental, and vision insurance
401(k) retirement plan
Flexible working hours
Remote work options
Professional development opportunities
Casual work environment
                    </p>
                </div>
                
                {/* About Company */}
                <div className="p-4 rounded-lg border border-black">
                    <h2 className="text-xl font-bold mb-4">About Company</h2>
                    <p>
                    [Company Name] is a leading tech company dedicated to leveraging  data-driven insights to revolutionize the [specific industry] sector. Our innovative solutions empower businesses to make smarter decision and drive growth through the power of data science. At [Company Name], we are committed to pushing the boundaries of what's possible, using cutting-edge technology to solve  complex problems and deliver actionable results. Join us in shaping the future of [specific industry] 
through data-driven innovation.
                    </p>
                </div>
            </div>
        </>
    )
}

export default JobDetails