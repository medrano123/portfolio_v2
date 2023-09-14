"use client"
import React from 'react'
import { motion } from "framer-motion";

import { skills } from '../constants'
import { SkillsBubble } from '.'
import { fadeIn, slideIn, textVariant } from "../utils/motion/motion.js";
import SectionWrapper from '@/hoc/SectionWrapper'

const Skills = () => {
    return (
        <motion.div className='sm:px-14 px-6 bg-[#151E2C] justify-center items-center xs:flex xs:flex-col' id="skills">
            <motion.div variants={textVariant(0.2)}> 
                <div className="flex flex-col items-center justify-center">
                    <div className='text-white font-black lg:text-[50px] sm:text-[35px] text-[40px] pt-[40px] z-10'>
                        My Skills
                    </div>
                    <div className='h-3 bg-[#ffbe62] w-full -mt-6 z-0' />
                </div>
            </motion.div>

            <div className='flex flex-wrap justify-center gap-6 max-w-6xl sm:pb-24 sm:pt-14 py-10'>
                {skills.map((skill, index ) => (
                    <motion.div
                        // Utilize the fadeIn function with proper parameters.
                        variants={fadeIn("up", "spring", 0.5, 1.5)}
                    >
                        <SkillsBubble skill={skill} />    
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}

export default SectionWrapper(Skills, 'skills')