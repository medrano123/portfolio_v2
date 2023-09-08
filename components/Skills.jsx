import React from 'react'

import { skills } from '../constants'
import { SkillsBubble } from '.'

const Skills = () => {
    return (
        <div className='sm:px-14 px-6 bg-[#151E2C] justify-center items-center sm:flex sm:flex-col w-full' id="skills">
            <div className='text-[#428DFF] font-black lg:text-[50px] sm:text-[35px] text-[40px] pt-[40px]'>
                My Skills
            </div>
            <div className='flex flex-wrap justify-center gap-4 max-w-6xl sm:py-24 py-10'>
                {skills.map((skill, index ) => (
                    <SkillsBubble skill={skill} />
                ))}
            </div>
        </div>
    )
}

export default Skills