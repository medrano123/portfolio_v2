"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from "framer-motion";

import { fadeIn, slideIn, textVariant } from "../utils/motion/motion.js";
import { JobItCard } from './casestudies/jobit';
import { MoreRentCard } from './casestudies/morerent';
import SectionWrapper from '@/hoc/SectionWrapper'

const Projects = () => {
    return (
        <div className='sm:px-14 px-6  bg-[#151E2C] justify-center items-center flex flex-col sm:pb-24 pb-14' id="projects">
            <motion.div variants={textVariant(0.2)}> 
                <div className='flex font-black lg:text-[50px] sm:text-[35px] text-[30px] sm:pt-[50px] pt-[40px] max-w-screen-xxxl'>
                    <div className='sm:mr-4 mr-2'>
                        Featured
                    </div>
                    <div>
                        <div className='z-10'>
                            Projects
                        </div>
                        <div className='h-3 bg-[#ffbe62] w-full sm:-mt-6 -mt-4 z-0' />
                    </div>
                </div>
            </motion.div>   
            <motion.div
                variants={fadeIn("up", "spring", 1 * 0.5, 0.75)}
                className="w-full max-w-screen-xxxl"
            >
                <MoreRentCard />
            </motion.div>
            <motion.div
                variants={fadeIn("up", "spring", 2 * 0.5, 0.75)}
                className="w-full max-w-screen-xxxl"
            >
                <JobItCard />  
            </motion.div>
        </div>
    );
}

export default SectionWrapper(Projects, 'projects')
