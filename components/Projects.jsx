import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Projects = () => {
    return (
        <div className='sm:px-14 px-6  bg-[#151E2C] w-full pb-12' id="projects">
            <div className='text-[#428DFF] flex items-center justify-center font-black lg:text-[50px] sm:text-[35px] text-[40px] pt-[40px]'>
                Featured Projects
            </div>
                {/* MoreRent */}
                <div className='bg-[#416CEA] rounded-lg sm:flex w-full py-14 justify-between sm:mt-12 mt-8'>
                    <div className='flex flex-1 flex-col items-center justify-center'>
                        <div>
                        <div className='flex lg:text-[3rem] text-[2rem] font-bold sm:w-[480px]'>
                            Morrent - A Car Rental Application
                        </div>
                        <div className='flex gap-2 mt-2'>
                            <p className='p-2 h-[42px] bg-white/20 rounded-lg'>
                                ReactJS, Next.js
                            </p>
                            <p className='p-2 h-[42px] bg-white/20 rounded-lg'>
                                Node.js, MongoDB
                            </p>
                        </div>
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
                {/* Add more projects as needed */}
            </div>
        </div>
    );
}

export default Projects;


