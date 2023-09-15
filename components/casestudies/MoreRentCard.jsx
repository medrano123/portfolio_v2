import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HiArrowLongRight } from 'react-icons/hi2'

const MoreRentCard = () => {
    return (
        <div className='bg-[#416CEA] rounded-lg sm:flex w-full py-14 justify-between sm:mt-12 mt-8'>
            <div className='flex flex-1 flex-col items-center justify-center'>
                <div className='sm:p-0 p-4'>
                    <div className='flex lg:text-[3rem] text-[2rem] font-bold sm:w-[480px]'>
                        Morrent - A Car Rental Application
                    </div>
                    <div className='flex gap-2 mt-2 sm:text-[1rem] text-[.96rem]'>
                        <p className='p-2 h-[42px] bg-white/20 rounded-lg'>
                            ReactJS, Next.js
                        </p>
                        <p className='p-2 h-[42px] bg-white/20 rounded-lg'>
                            Node.js, MongoDB
                        </p>
                    </div>
                    <Link href='/casestudy/morerent'>
                        <div className='flex mt-6 gap-2'>
                            <p className='hover:underline'>
                                See Project Details
                            </p>
                            <HiArrowLongRight size={25} />
                        </div>
                    </Link>
                </div>
            </div>
            <div className='flex justify-center items-center sm:py-0 py-4'>
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
                    alt='morerentsmall'
                    className='object-contain mt-16 hidden md:block'
                />
            </div>
        </div>
    )
}

export default MoreRentCard