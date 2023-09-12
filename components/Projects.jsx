import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { MoreRentCard, JobItCard } from './casestudies';

const Projects = () => {
    return (
        <div className='sm:px-14 px-6  bg-[#151E2C] w-full pb-12' id="projects">
            <div className='text-[#428DFF] flex items-center justify-center font-black lg:text-[50px] sm:text-[35px] text-[40px] pt-[40px]'>
                Featured Projects
            </div>
            <MoreRentCard />
            <JobItCard />  
        </div>
    );
}

export default Projects;


