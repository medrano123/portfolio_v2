import React from 'react'
import Image from 'next/image';

import { wow } from '@/constants';
import { WOWBubbles } from '../morerent';

const JobItWIW = () => {
    return (
        <>
            <div className='sm:px-52 px-6 bg-[#151E2C] w-full xxxl:min-h-fit sm:pt-16 pt-10'>
                <div className='max-w-screen-xxxl xxxl:mx-auto'>
                    <div className='pb-6'>
                        <div className='text-[#428DFF] techstack_sub pb-6 xxxl:text-[45px] xxxxl:text-[55px] xxxl:mt-10'>
                            Way of Work
                        </div>
                        <div className='techstack_head xxxl:text-[40px] xxxxl:text-[50px] xxxl:mt-10'>
                            My Process
                        </div>
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
            <div className='sm:px-52 px-6 bg-[#151E2C] w-full xxxl:min-h-fit pb-16'>
                <div className='max-w-screen-xxxl xxxl:mx-auto'>
                    <div className='pb-6'>
                        <div className='text-[#428DFF] techstack_sub pb-6 xxxl:text-[45px] xxxxl:text-[55px]'>
                            Problem
                        </div>
                        <div className='techstack_head xxxl:text-[40px] xxxxl:text-[50px] xxxl:mt-10'>
                            Challenges & Learnings
                        </div>
                    </div>
                </div>
                <div className='bg-[#192333] sm:p-10 p-6 rounded-lg mt-4 max-w-screen-xxxl xxxl:mx-auto'>
                    <div className='text-[#E15A46] challanges_heading xxxl:text-[40px] xxxxl:text-[50px]'>
                        Challanges
                    </div>
                    <div className='mt-8 flex gap-4 items-start challanges_text xxxl:text-[28px] xxxxl:text-[30px]'>
                        <Image
                            src='/assets/morerent/challange.png'
                            width={18}
                            height={18}
                            alt="challanges"
                            className='object-contain mt-2 flex-none'
                        />
                        Handling an inconsistent API was a major challenge during development, requiring extensive troubleshooting to ensure accurate data retrieval and display.                    </div>
                    <div className='mt-8 flex gap-4 items-start challanges_text xxxl:text-[28px] xxxxl:text-[30px]'>
                        <Image
                            src='/assets/morerent/challange.png'
                            width={18}
                            height={18}
                            alt="challanges"
                            className='object-contain mt-2 flex-none'
                        />
                        Performance optimization was an ongoing challenge that required ensuring smooth operation on various devices and networks while minimizing load times                    </div>
                    <div className='mt-8 flex gap-4 items-start challanges_text xxxl:text-[28px] xxxxl:text-[30px]'>
                        <Image
                            src='/assets/morerent/challange.png'
                            width={18}
                            height={18}
                            alt="challanges"
                            className='object-contain mt-2 flex-none'
                        />
                        Ensuring that the codebase remains clean, readable, and maintainable was a significant challenge during the development process.                   </div>
                </div>
                <div className='bg-[#192333] sm:p-10 p-6 rounded-lg sm:mt-12 mt-10 max-w-screen-xxxl xxxl:mx-auto'>
                    <div className='text-[#02BC7D] challanges_heading xxxl:text-[40px] xxxxl:text-[50px]'>
                        Learnings
                    </div>
                    <div className='mt-8 flex gap-4 items-start challanges_text xxxl:text-[28px] xxxxl:text-[30px]'>
                        <Image
                            src='/assets/morerent/tick.png'
                            width={18}
                            height={18}
                            alt="challanges"
                            className='object-contain mt-2 flex-none'
                        />
                        Acquired proficiency in React and Redux-toolkit and implemented various features utilizing industry-standard best practices.
                    </div>
                    <div className='mt-4 flex gap-4 items-start challanges_text xxxl:text-[28px] xxxxl:text-[30px]'>
                        <Image
                            src='/assets/morerent/tick.png'
                            width={18}
                            height={18}
                            alt="challanges"
                            className='object-contain mt-2 flex-none'
                        />
                        Acquired skills in rapid and aesthetically pleasing frontend development using Tailwind.
                    </div>
                    <div className='mt-4 flex gap-4 items-start challanges_text xxxl:text-[28px] xxxxl:text-[30px]'>
                        <Image
                            src='/assets/morerent/tick.png'
                            width={18}
                            height={18}
                            alt="challanges"
                            className='object-contain mt-2 flex-none'
                        />
                        Successfully worked and collaborated with an online team consisting of members with different background from different countries. 
                   </div>
                    {/* <div className='mt-4 flex gap-4 items-start challanges_text xxxl:text-[28px] xxxxl:text-[30px]'>
                        <Image
                            src='/assets/morerent/tick.png'
                            width={18}
                            height={18}
                            alt="challanges"
                            className='object-contain mt-2 flex-none'
                        />
                        Acquired proficiency in NextJS and implemented various features utilizing industry-standard best practices.
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default JobItWIW