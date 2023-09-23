"use client"
import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { AiFillEye, AiFillGithub } from 'react-icons/ai';

import { projects } from "../constants";
import { fadeIn, slideIn, textVariant } from "../utils/motion/motion.js";
import SectionWrapper from '@/hoc/SectionWrapper'

const ProjectCard = ({ name, description, index, tags, image, source_code_link, deployed_link}) => {

	return (
        <>

            <motion.div
                // variants={slideIn('right', "tween", 0.2, 1)}
                variants={fadeIn('up', 'spring', index * 0.4, 0.5)}
                className="hidden sm:block"
            >
                <Tilt 
                    options={{
                        max: 45,
                        scale: 1,
                        speed: 450,
                        opacity:1,
                    }}
                    className="bg-[#192333] p-5 rounded-2xl sm:w-[360px] w-full min-h-[430px]"
                >
                    <div className="relative w-full h-[230px]">
                        <img
                            src={image}
                            alt={name}
                            className="w-[360px] h-[230px] object-cover rounded-2xl"
                        />
                        <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-1">
                            <div
                                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                                onClick={() => window.open(deployed_link, "_blank")}
                            >	
                                <AiFillEye
                                    size={22}
                                />
                            </div>
                            <div
                                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                                onClick={() => window.open(source_code_link, "_blank")}
                            >	
                                <AiFillGithub
                                    size={22}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <h3 className="text-white font-bold text-[24px]">
                            {name}
                        </h3>
                        <p className="mt-2 text-secondary text-[14px]">
                            {description}
                        </p>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                                #{tag.name}
                            </p>
                        ))}
                    </div>
                </Tilt>
            </motion.div>
            <motion.div
			variants={slideIn('right', "tween", 0.2, 1)}
			// variants={fadeIn('up', 'spring', index * 0.4, 0.5)}
            className="sm:hidden"
        >
			<Tilt 
				options={{
					max: 45,
					scale: 1,
					speed: 450,
                    opacity:1,
				}}
				className="bg-[#192333] p-5 rounded-2xl sm:w-[360px] w-full min-h-[430px]"
			>
				<div className="relative w-full h-[230px]">
					<img
						src={image}
						alt={name}
						className="w-[360px] h-[230px] object-cover rounded-2xl"
					/>
					<div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-1">
						<div
							className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
							onClick={() => window.open(deployed_link, "_blank")}
						>	
							<AiFillEye
								size={22}
							/>
						</div>
						<div
							className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
							onClick={() => window.open(source_code_link, "_blank")}
						>	
							<AiFillGithub
								size={22}
							/>
						</div>
					</div>
				</div>
				<div className="mt-5">
					<h3 className="text-white font-bold text-[24px]">
						{name}
					</h3>
					<p className="mt-2 text-secondary text-[14px]">
						{description}
					</p>
				</div>
				<div className="mt-4 flex flex-wrap gap-2">
					 {tags.map((tag) => (
						<p key={tag.name} className={`text-[14px] ${tag.color}`}>
							#{tag.name}
						</p>
					 ))}
				</div>
			</Tilt>
		</motion.div>
        </>
	)
}


const HonorableMentions = () => {
    return (
        <div className='sm:px-14 px-6  bg-[#151E2C] justify-center items-center flex flex-col sm:pb-16 pb-14' id="projects">
            <motion.div variants={textVariant(0.2)}> 
                <div className='flex font-black lg:text-[50px] sm:text-[35px] text-[30px] sm:pt-[50px] pt-[40px] max-w-screen-xxxl'>
                    <div className='sm:mr-4 mr-2'>
                        Honorable
                    </div>
                    <div>
                        <div className='z-10'>
                            Mentions
                        </div>
                        <div className='h-3 bg-[#ffbe62] w-full sm:-mt-6 -mt-4 z-0' />
                    </div>
                </div>
            </motion.div>   
            <motion.div
                variants={fadeIn("up", "spring", 1 * 0.5, 0.75)}
                className='bg-[#151E2C] justify-center items-center flex flex-col sm:flex-row pb-2 flex-wrap gap-7 sm:mt-10 mt-8'
            >
                {projects.map((project, index)=>(
                        <ProjectCard
                            key={`project-${index}`}
                            {...project}
                            index={index}
                        />
                    ))}
            </motion.div>
        </div>
    )
}

export default SectionWrapper(HonorableMentions, 'honorablementions')
