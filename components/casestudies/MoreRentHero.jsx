import React from 'react'
import Image from 'next/image'

const MoreRentHero = () => {
    return (
        <div className='sm:px-14 px-6 bg-[#192333] w-full min-h-screen' id="herosection">
            <section className='sm:pt-[150px] pt-[110px] flex items-center justify-center flex-col'> 
                <p className='text-[#428DFF] webdev sm:py-0 py-10'>
                    Web Dev Project
                </p>
                {/* <div className='sm:flex morerenttitle sm:text-[64px] text-[38px] mt-6'>
                    <h1 className='flex font-bold'>
                            <span>
                                MoreRent
                                <div className='h-3 bg-[#ffbe62] w-full sm:-mt-9 -mt-5 z-0' />
                            </span> 
                            <span className='ml-2'>
                                - A Car Rental Website
                            </span>
                    </h1>
                </div> */}
                <div className='flex morerenttitle sm:text-[64px] text-[37px] font-bold py-4'>
                    MoreRent - A Car Rental Website
                </div>
                
                <div className='flex justify-center items-center sm:py-4 py-4'>
                    <Image
                        src='/assets/morerent/computer.png'
                        width={600}
                        height={350}
                        alt='computer'
                        className='object-contain'
                    />
                    <Image
                        src='/assets/morerent/phone.png'
                        width={150}
                        height={50}
                        alt='computer'
                        className='object-contain mt-10 hidden md:block'
                    />
                </div>
                <div className='flex py-8 lg:gap-60 gap-10 text-[#428DFF] morerenttitle font-bold'> 
                    <a href='https://morerent.vercel.app/' target="_blank">
                        <div className='flex gap-2'>
                                <Image
                                    src='/assets/morerent/visit.png'
                                    width={20}
                                    height={20}
                                    alt='social'
                                    className='object-contain'
                                />                       
                                Demo Site
                                <Image
                                    src='/assets/morerent/arrow.png'
                                    width={24}
                                    height={24}
                                    alt='arrow'
                                    className='object-contain hidden sm:block'
                                />
                        </div>
                    </a>
                    <a href='https://github.com/medrano123/' target="_blank">
                        <div className='flex gap-2'>
                                <Image
                                    src='/assets/morerent/git.png'
                                    width={20}
                                    height={20}
                                    alt='social'
                                    className='object-contain'
                                />                       
                                Source Code
                                <Image
                                    src='/assets/morerent/arrow.png'
                                    width={24}
                                    height={24}
                                    alt='arrow'
                                    className='object-contain hidden sm:block'
                                />
                        </div>
                    </a>
                </div>
            </section>
        </div>
    )
}

export default MoreRentHero