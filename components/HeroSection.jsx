"use client"
import React from 'react'
import Image from 'next/image';
import { ToastContainer } from 'react-toastify';
import { TypeAnimation } from 'react-type-animation';

import { handleCopyToClipboard } from '../utils'


const HeroSection = () => {

    return (
        <div className='sm:px-14 px-6 bg-[#192333] justify-between sm:flex w-full xxl:pt-[80px]' id="herosection">
            <div className='justify-between sm:flex w-full max-w-screen-xxxl xxxl:mx-auto'>
                <section className='max-w-[900px] sm:py-[200px] pt-[120px]'> 
                    <div className='text-secondary font-medium xxl:text-[46px] lg:text-[26px] sm:text-[22px] text-[22px] lg:leading-[40px]'>
                        Hello, I'm <span className='text-white'>Giovanni</span> {/* work on color */}
                    </div>
                    <div className='font-black text-white xxl:text-[70px]  lg:text-[50px] sm:text-[35px] text-[32px]'> {/* look at it in bigger sizes and think of how to change the size to match */}
                        <TypeAnimation 
                            style={{color: '#428DFF'}}
                            sequence={[
                                'Front End Engineer',
                                1500,
                                'Back End Engineer',
                                1500,
                                'Mathematician',
                                1500,
                                'Python Developer',
                                1500,
                            ]}
                            speed={50}
                            wrapper="span"
                            repeat={Infinity}
                        /> 

                    </div>
                    <div className='text-secondary font-medium xxl:text-[24px] lg:text-[18px] sm:text-[14px] text-[12px] text-content xxl:max-w-[700px]  lg:max-w-[500px] break-words'>
                        Transforming the web one line of code at a time: Crafting cutting-edge digital experiences with precision, passion, 
                        and a profound commitment to excellence
                    </div>

                    <section className='sm:flex xxl:mt-[80px] mt-[24px] xxl:max-w-[811px] sm:max-w-[511px] font-medium items-center justify-center gap-6'>
                        <div className='bg-[#428DFF] sm:mt-0 mt-8 rounded-full py-4 px-8 flex justify-center'>
                            <a href='/assets/GiovanniMedranoResume.pdf' download>                            

                                <div className='flex xxl:items-center xxl:justify-center'>
                                Resume
                                    <Image
                                        src='/assets/download.png'
                                        width={20}
                                        height={20}
                                        alt='download'
                                        className='object-contain ml-2  xxl:-mt-[1px] xxl:w-[23px] xxl:h-[23px]  xxl:items-center xxl:justify-center'
                                    />
                                </div>
                            </a>
                        </div>
                        <div className='bg-[#151E2C] rounded-full py-4 px-8 flex sm:mt-0 mt-8 justify-center'>
                            Medranoector@yahoo.com
                            <Image
                                src='/assets/clipboard.png'
                                width={19}
                                height={19}
                                alt='clipboard'
                                className='object-contain ml-2 cursor-pointer'
                                onClick={handleCopyToClipboard}
                            />
                            <ToastContainer />
                        </div>

                    </section>
                </section>
                {/* Computer Man */}
                <section className='sm:py-[120px] py-10 xxl:hidden'>
                    <Image
                        src='/assets/computerman.png'
                        width={750}
                        height={500}
                        alt='computerman'
                    />
                </section>
                <section className='sm:py-[120px] py-10 hidden xxl:block'>
                    <Image
                        src='/assets/computerman.png'
                        width={950}
                        height={600}
                        alt='computerman'
                    />

                </section>
            </div>
        </div>
    )
}

export default HeroSection