"use client"
import React from 'react'
import Image from 'next/image';
import { ToastContainer } from 'react-toastify';
import { TypeAnimation } from 'react-type-animation';

import { handleCopyToClipboard } from '../utils'


const HeroSection = () => {

    return (
        <div className='sm:px-14 px-6 bg-[#192333] justify-between sm:flex w-full min-h-screen'>
            <section className='max-w-[900px] sm:py-[200px] pt-[90px]'> {/* Might change widths later */}
                <div className='text-secondary font-medium lg:text-[26px] sm:text-[22px] text-[22px] lg:leading-[40px]'>
                    Hello, I'm <span className='text-[#428DFF]'>Giovanni</span>
                </div>
                <div className='font-black text-white lg:text-[50px] sm:text-[35px] text-[40px]'> {/* look at it in bigger sizes and think of how to change the size to match */}
                    <TypeAnimation 
						style={{color: '#428DFF'}}
						sequence={[
							'Full Stack Developer',
							1500,
							'UI/UX Designer',
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
                <div className='text-secondary font-medium lg:text-[18px] sm:text-[14px] text-[12px] text-content lg:max-w-[500px] break-words'>
                    Transforming the web one line of code at a time: Crafting cutting-edge digital experiences with precision, passion, 
                    and a profound commitment to excellence
                </div>

                <section className='sm:flex mt-[24px] sm:max-w-[511px] font-medium items-center justify-center gap-10'>
                    <div className='bg-[#428DFF] sm:mt-0 mt-8 rounded-full py-4 px-8 flex justify-center'>
                        Resume
                        <a href='/assets/GiovanniMedranoResume.pdf' download>                            
                            <Image
                                src='/assets/download.png'
                                width={20}
                                height={20}
                                alt='download'
                                className='object-contain ml-2'
                            />
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
            <section className='sm:py-[100px] py-10'>
                <Image
                    src='/assets/computerman.png'
                    width={750}
                    height={500}
                    alt='computerman'
                />

            </section>
        </div>
    )
}

export default HeroSection