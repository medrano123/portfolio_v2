"use client"

import React from 'react'
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import { motion } from "framer-motion";
  import "react-vertical-timeline-component/style.min.css";
  import { textVariant } from "../utils/motion/motion.js";

  import { education } from '../constants'


const EducationCard = ({ education }) => {
	return (
	  	<VerticalTimelineElement
			contentStyle={{
				background: "#151E2C",
				color: "#fff",
			}}
			contentArrowStyle={{ borderRight: "7px solid  #232631" }}
			date={education.year}
			iconStyle={{ background: education.iconBg }}
			icon={
				<div className='flex justify-center items-center w-full h-full bg-[#151E2C] rounded-full'>
					<img
					src={education.icon}
					alt={education.icon}
					className='w-[60%] h-[60%] object-contain bg-[#151E2C]'
				/>
				</div>
			}
	  	>
			<div>
				<h3 className='text-[#428DFF] text-[24px] font-bold'>{education.major}</h3> {/* Play around with it maybe chose different colors*/}
				<p
					className='text-secondary text-[16px] font-semibold'
					style={{ margin: 0 }}
				>
					{education.name}
				</p>
			</div>
  
			<ul className='mt-5 list-disc ml-5 space-y-2'>
		  		{education.points.map((point, index) => (
					<li
						key={`education-point-${index}`}
						className='text-white-100 text-[14px] pl-1 tracking-wider'
					>
						{point}
					</li>
		 		 ))}
			</ul>
	  	</VerticalTimelineElement>
	);
  };
const Education = () => {
  	return (
        <div className='sm:px-14 px-6 bg-[#192333] justify-between w-full min-h-screen pt-20' id="education">
			<motion.div variants={textVariant()}>
				<p className={`sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider`}>
					What I have learned so far
				</p>
				<h2 className={`font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-[#428DFF]`}>
					Education
				</h2>
			</motion.div> 

			<div className=' flex flex-col'>
			<VerticalTimeline>
				{education.map((education, index) => (
					<EducationCard
					key={`education-${index}`}
					education={education}
					/>
				))}
			</VerticalTimeline>
		</div>
		</div>
  	)
}

export default Education