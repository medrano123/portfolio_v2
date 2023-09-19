import React from 'react'
import Image from 'next/image'

const MoreRentProblemStatement = () => {
    return (
        <div className='sm:px-52 px-6 bg-[#151E2C] w-full xxxl:min-h-fit sm:py-16 py-10'>
                <div className='max-w-screen-xxxl xxxl:mx-auto'>
                <div className='pb-6'>
                    <div className='text-[#428DFF] techstack_sub pb-6 xxxl:text-[45px] xxxxl:text-[55px] xxxl:mt-10'>
                        Problem
                    </div>
                    <div className='techstack_head xxxl:text-[40px] xxxxl:text-[50px] xxxl:mt-10'>
                        Problem Statement
                    </div>
                </div>
                <div className='caseStudyDescription py-6 max-w-6xl xxxl:text-[40px] xxxxl:text-[50px] xxxl:leading-none xxxxl:max-w-full'>
                    One of the main problems that people face when looking to rent a car is the hassle of finding a reliable and user-friendly platform to search for and book rental cars. In addition, car owners who want to rent out their vehicles often struggle to find a suitable platform to list their cars and manage their rentals.           
                </div>
                <div>
                    <Image
                        src='/assets/morerent/car.png'
                        width={575}
                        height={330}
                        alt='car'
                        className='object-contain w-full'
                    />

                </div>
            </div>
        </div>
    )
}

export default MoreRentProblemStatement