import React from 'react'

import { wow } from '@/constants';
import { WOWBubbles } from '.';

const MoreRentWIW = () => {
    return (
        <>
            <div className='sm:px-52 px-6 bg-[#151E2C] w-full xxxl:min-h-fit sm:pt-16 pt-10'>
                <div className='pb-6'>
                    <div className='text-[#428DFF] techstack_sub pb-6'>
                        Way of Work
                    </div>
                    <div className='techstack_head'>
                        My Process
                    </div>
                </div>
            </div>
            <div className='sm:px-52 px-6 bg-[#151E2C] justify-center items-center xs:flex xs:flex-col' id="skills">
                <div className='flex flex-wrap items-center justify-start w-full xxxl:max-w-[1500px] sm:pb-24 sm:pt-14 py-10 gap-4'>  
                    {wow.map((skill, index ) => (
                        <div className="mx-auto"> {/* Centering each item */}
                            <WOWBubbles skill={skill} />    
                        </div>
                    ))}
                </div>
            </div>
            <div className='sm:px-52 px-6 bg-[#151E2C] w-full xxxl:min-h-fit'>
                <div className='pb-6'>
                    <div className='text-[#428DFF] techstack_sub pb-6'>
                        Problem
                    </div>
                    <div className='techstack_head'>
                        Challenges & Learnings
                </div>
                </div>
            </div>
        </>
    )
}

export default MoreRentWIW