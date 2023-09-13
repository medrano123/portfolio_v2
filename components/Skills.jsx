"use client"
import React from 'react'

import { skills } from '../constants'
import { SkillsBubble } from '.'
import SectionWrapper from '@/hoc/SectionWrapper'

const Skills = () => {
    return (
        <div className='sm:px-14 px-6 bg-[#151E2C] justify-center items-center xs:flex xs:flex-col' id="skills">
            <div className="flex flex-col items-center justify-center">
                <div className='text-white font-black lg:text-[50px] sm:text-[35px] text-[40px] pt-[40px] z-10'>
                    My Skills
                </div>
                <div className='h-3 bg-[#ffbe62] w-full -mt-6 z-0' />
            </div>

            <div className='flex flex-wrap justify-center gap-6 max-w-6xl sm:pb-24 sm:pt-14 py-8'>
                {skills.map((skill, index ) => (
                    <SkillsBubble skill={skill} />
                ))}
            </div>
        </div>
    )
}

export default SectionWrapper(Skills, 'skills')