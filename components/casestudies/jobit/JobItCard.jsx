import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HiArrowLongRight } from 'react-icons/hi2'

const JobItCard = () => {
    return (
        <div className='bg-[#0BAB7C] rounded-lg sm:flex w-full py-14 justify-between sm:mt-12 mt-8 '>
            <div className='sm:flex justify-center items-center hidden'>
                <Image
                    src='/assets/projects/jobitfreatured.png'
                    width={575}
                    height={330}
                    alt='morerentfeatured'
                    className='object-contain'
                />
                <Image
                    src='/assets/projects/jobitsmall.png'
                    width={100}
                    height={100}
                    alt='morerentfeatured'
                    className='object-contain mt-16'
                />
            </div>
            <div className='flex flex-1 flex-col items-center justify-center'>
                <div className='sm:px-0 px-4'>
                    <div className='flex lg:text-[2.5rem] text-[2rem] font-bold sm:w-[480px]'> {/* Work on Interactivity some more */}
                        JobIT - A Job Finding Application
                    </div>
                    <div className='flex gap-2 mt-2 sm:text-[1rem] text-[.99rem]'>
                        <p className='p-2 h-[42px] bg-white/20 rounded-lg'>
                            ReactJS, Next.js
                        </p>
                        <p className='p-2 h-[42px] bg-white/20 rounded-lg'>
                            Node.js, RapidAPI
                        </p>
                    </div>
                    <Link href='/casestudy/jobit'>
                        <div className='flex mt-6 gap-2'>
                            <p className='hover:underline'>
                                See Project Details
                            </p>
                            <HiArrowLongRight size={25} />
                        </div>
                    </Link>
                </div>
            </div>
            <div className='flex justify-center items-center sm:hidden py-2'>
                <Image
                    src='/assets/projects/jobitfreatured.png'
                    width={575}
                    height={330}
                    alt='morerentfeatured'
                    className='object-contain'
                />
                <Image
                    src='/assets/projects/jobitsmall.png'
                    width={100}
                    height={100}
                    alt='morerentfeatured'
                    className='object-contain mt-16'
                />
            </div>
        </div>
    )
}

export default JobItCard