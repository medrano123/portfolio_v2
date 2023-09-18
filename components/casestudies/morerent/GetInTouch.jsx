import React from 'react'
import Link from 'next/link'
import { HiArrowLongRight } from 'react-icons/hi2'

const GetInTouch = () => {
    return (
        <div className='sm:px-14 px-6 bg-[#151E2C] w-full xxxl:min-h-fit sm:py-16 py-10'>
            <div className='bg-[#FFBE62] rounded-lg sm:px-16 px-8 py-12 w-full flex flex-col sm:flex-row sm:justify-between sm:items-end'> {/* Added justify-between and items-end */}  
                <div className='max-w-[520px] text-black sm:pb-0 pb-8 getInTouch'>
                    Have a project in mind that requires technical expertise? 
                </div>
                <div className='bg-[#428DFF] rounded-full py-4 px-8 flex justify-center'>
                    <Link href='/#contact'>
                        <div className='flex xxl:items-center xxl:justify-center getInTouchText sm:text-[18px] gap-2'>
                            Get In Touch With Me
                            <div className='flex items-center justify-center'>
                                <HiArrowLongRight size={25} />
                            </div>
                        </div>
                        
                    </Link>
                </div>
            </div>            
        </div>
    )
}

export default GetInTouch