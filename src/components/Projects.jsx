
import React from "react";
import vpn1 from '../assests/vpn1.webp'
import meal from '../assests/meal.png'
import Footer from './Footer'

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {title=='Snap Shot' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={vpn1} alt="" />
            </a>}
            {title=='Co People' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={copeople} alt="" />
            </a>}
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a>
            </div>
        </div>
    );
};
  
const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        links={item.links}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    );
}


export const project = [
    {
        title:'Meal Planner',
        description:'Designed and built a web application to assist users in planning and organizing their weekly meals based on dietary preferences. Created a User-friendly website for creating own preferred meal for lunch, breakfast and dinner based on own diet.',
        image: {meal},
        git:'https://github.com/ICSI-518-Software-Engineering/web-development-and-deployment-Pranadeepreddy04',
        technologies:['MongoDb' ,'ReactJS' , 'NodeJS']
    },
    {
        title:'Fake News Detection',
        description:'Built a machine learning model to classify and identify fake news articles from authentic ones. Developed and fine-tuned text classification models, achieving high accuracy in detecting misleading content.',
        image: {meal},
        git:'https://github.com/Pranadeepreddy04/Fake-News-Detection',
        technologies:['Python' ,'Machine Learning' , 'NodeJS']
    },
    {
        title:'Advanced Virtual Assistant',
        description:'Created a voice-based virtual assistant with the ability to recognize commands, perform tasks, and interact with users. Programmed features for voice recognition and task automation, significantly enhancing user productivity.',
        image: {meal},
        git:'https://github.com/Pranadeepreddy04/J.A.R.V.I.S',
        technologies:['Python' ,'ReactJS' , 'NodeJS']
    },

    {
        title:'Driver Drowsiness Detection',
        description:' Developed a system to monitor and analyze driver alertness through image processing and machine learning techniques. Implemented facial recognition algorithms to detect drowsiness patterns, reducing potential risks of accidents ',
        image: {vpn1},
        git:"https://github.com/Pranadeepreddy04/Driver-Drowsiness-Detection",
        technologies:[ 'React JS', 'Python']
    }
]

export default Projects;