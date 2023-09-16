import React from 'react'

import { SkillsBubble } from '..'
import { moreRentStack } from '@/constants'

const TechStack = () => {
    return (
        <>
            <div className='sm:px-14 px-6 bg-[#151E2C] w-full xxxl:min-h-fit sm:pt-16 pt-10'>
                <div className='pb-6'>
                    <div className='text-[#428DFF] techstack_sub pb-6'>
                        Technologies used
                    </div>
                    <div className='techstack_head'>
                        Tech Stack
                    </div>
                </div>
            </div>
            <div className='sm:px-14 px-6 bg-[#151E2C] justify-center items-center xs:flex xs:flex-col' id="skills">
                <div className='flex flex-wrap items-center justify-center gap-6 max-w-4xl xxxl:max-w-[1500px] sm:pb-24 sm:pt-14 py-10'>  {/* Consider making width changes */}
                    {moreRentStack.map((skill, index ) => (
                        <SkillsBubble skill={skill} />    
                    ))}
                </div>
            </div>
        </>
    )
}

export default TechStack