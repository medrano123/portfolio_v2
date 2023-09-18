import React from 'react'
import Image from 'next/image';

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
            <div className='sm:px-52 px-6 bg-[#151E2C] w-full xxxl:min-h-fit pb-10'>
                <div className='pb-6'>
                    <div className='text-[#428DFF] techstack_sub pb-6'>
                        Problem
                    </div>
                    <div className='techstack_head'>
                        Challenges & Learnings
                    </div>
                </div>
                <div className='bg-[#192333] sm:p-10 p-6 sm:pt-0 pt-8 rounded-lg mt-4'>
                    <div className='text-[#E15A46] challanges_heading'>
                        Challanges
                    </div>
                    <div className='mt-8 flex gap-4 items-start challanges_text'>
                        <Image
                            src='/assets/morerent/challange.png'
                            width={18}
                            height={18}
                            alt="challanges"
                            className='object-contain mt-2 flex-none'
                        />
                        Gained extensive knowledge of full authentication and authorization implementation, including the use of industry-standard security protocols such as JSON Web Tokens.
                    </div>
                    <div className='mt-8 flex gap-4 items-start challanges_text'>
                        <Image
                            src='/assets/morerent/challange.png'
                            width={18}
                            height={18}
                            alt="challanges"
                            className='object-contain mt-2 flex-none'
                        />
                        We conducted brainstorming and carefully weighed our options before making a decision. Furthermore, using NextJS was a new experience for us, and we encountered difficulties while implementing its features. Finally, we had to work under time constraints, which added pressure to the project. 
                    </div>
                    <div className='mt-8 flex gap-4 items-start challanges_text'>
                        <Image
                            src='/assets/morerent/challange.png'
                            width={18}
                            height={18}
                            alt="challanges"
                            className='object-contain mt-2 flex-none'
                        />
                        However, we collaborated effectively to overcome these obstacles and ultimately delivered a high-quality product within the given timeline.                    </div>
                </div>
                <div className='bg-[#192333] sm:p-10 p-6 sm:pt-0 pt-8 rounded-lg mt-4'>
                    <div className='text-[#02BC7D] challanges_heading'>
                        Learnings
                    </div>
                    <div className='mt-8 flex gap-4 items-start challanges_text'>
                        <Image
                            src='/assets/morerent/tick.png'
                            width={18}
                            height={18}
                            alt="challanges"
                            className='object-contain mt-2 flex-none'
                        />
                        Gained extensive knowledge of full authentication and authorization implementation, including the use of industry-standard security protocols such as JSON Web Tokens.                    
                    </div>
                    <div className='mt-4 flex gap-4 items-start challanges_text'>
                        <Image
                            src='/assets/morerent/tick.png'
                            width={18}
                            height={18}
                            alt="challanges"
                            className='object-contain mt-2 flex-none'
                        />
                        Sharpened my backend skills, specifically in optimizing database queries, improving performance, and handling server-side logic.                    
                    </div>
                    <div className='mt-4 flex gap-4 items-start challanges_text'>
                        <Image
                            src='/assets/morerent/tick.png'
                            width={18}
                            height={18}
                            alt="challanges"
                            className='object-contain mt-2 flex-none'
                        />
                        Learned how to properly handle files, including file upload, storage, and retrieval, ensuring that the app's data is organized & easily accessible while keeping it secure.
                    </div>
                    <div className='mt-4 flex gap-4 items-start challanges_text'>
                        <Image
                            src='/assets/morerent/tick.png'
                            width={18}
                            height={18}
                            alt="challanges"
                            className='object-contain mt-2 flex-none'
                        />
                        Acquired proficiency in NextJS and implemented various features utilizing industry-standard best practices.
                    </div>
                </div>
            </div>
        </>
    )
}

export default MoreRentWIW