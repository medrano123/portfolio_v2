import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Projects = () => {
    return (
        <div className='sm:px-14 px-6 bg-[#151E2C] justify-center items-center sm:flex flex-col w-full' id="projects">
            <div className='text-[#428DFF] font-black lg:text-[50px] sm:text-[35px] text-[40px] pt-[40px]'>
                Featured Projects
            </div>
            <div className='gap-6 sm:py-24 py-8'>
                {/* MoreRent */}
                <div className='bg-[#416CEA] rounded-lg sm:flex w-full py-14 justify-between'>
                    <div className='flex flex-col items-center justify-center w-full'>
                        <div className='flex items-center justify-center lg:text-[50px] sm:text-[35px] text-[40px] font-medium'>
                            Morrent - A Car <br/> Rental Application
                        </div>
                        <div className='mt-2 gap-2 flex'>
                            <p className='p-2 h-[42px] bg-black rounded-lg'>
                                ReactJS, Next.js
                            </p>
                            <p className='p-2 h-[42px] bg-black rounded-lg'>
                                Node.js, MongoDB
                            </p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <Image
                            src='/assets/projects/morerentfeatured.png'
                            width={575}
                            height={330}
                            alt='morerentfeatured'
                            className='object-contain'
                        />
                        <Image
                            src='/assets/projects/morerentsmall.png'
                            width={100}
                            height={100}
                            alt='morerentfeatured'
                            className='object-contain mt-16'
                         />
                    </div>
                </div>
                {/* Add more projects as needed */}
            </div>
        </div>
    );
}

export default Projects;
