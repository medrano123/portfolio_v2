import React from 'react'
import Image from 'next/image'

const MoreRentHero = () => {
    return (
        <div className='sm:px-14 px-6 bg-[#192333] w-full sm:min-h-screen' id="herosection">
            <section className='sm:pt-[150px] pt-[110px] flex items-center justify-center flex-col'> 
                <p className='text-[#428DFF] webdev xxxxl:text-[70px] xxxl:text-[38px] text-[26px] xxxl:pb-2 sm:py-0 py-8 xxxl:pt-6 xxxxl:pt-36'>
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
                <div className='flex morerenttitle xxxxl:text-[100px] sm:text-[58px] text-[37px] font-bold pt-4'>
                    MoreRent - A Car Rental Website
                </div>
                
                <div className='flex justify-center items-center sm:py-4 py-4'>
                    <Image
                        src='/assets/morerent/computer.png'
                        width={550}
                        height={350}
                        alt='computer'
                        className='object-contain xxxl:w-[750px] xxxxl:w-[1500px]'
                    />
                    <Image
                        src='/assets/morerent/phone.png'
                        width={130}
                        height={50}
                        alt='computer'
                        className='object-contain mt-10 hidden md:block xxxl:w-[160px] xxxxl:w-[300px] xxxxl:mt-12'
                    />
                </div>
                <div className='flex py-8 lg:gap-60 gap-10 text-[#428DFF] morerenttitle font-bold xxxl:pt-[40px]'> 
                    <a href='https://morerent.vercel.app/' target="_blank">
                        <div className='flex gap-2 xxxxl:text-[60px] xxxl:text-[28px]'>
                                <Image
                                    src='/assets/morerent/visit.png'
                                    width={20}
                                    height={20}
                                    alt='social'
                                    className='object-contain xxxl:w-[28px] xxxxl:w-[50px]'
                                />                       
                                Demo Site
                                <Image
                                    src='/assets/morerent/arrow.png'
                                    width={24}
                                    height={24}
                                    alt='arrow'
                                    className='object-contain hidden sm:block xxxl:w-[26px] xxxxl:w-[50px]'
                                />
                        </div>
                    </a>
                    <a href='https://github.com/medrano123/' target="_blank">
                        <div className='flex gap-2 xxxxl:text-[60px] xxxl:text-[28px]'>
                                <Image
                                    src='/assets/morerent/git.png'
                                    width={20}
                                    height={20}
                                    alt='social'
                                    className='object-contain xxxl:w-[28px] xxxxl:w-[50px]'
                                />                       
                                Source Code
                                <Image
                                    src='/assets/morerent/arrow.png'
                                    width={24}
                                    height={24}
                                    alt='arrow'
                                    className='object-contain hidden sm:block xxxl:w-[26px] xxxxl:w-[50px]'
                                />
                        </div>
                    </a>
                </div>
            </section>
        </div>
    )
}

export default MoreRentHero