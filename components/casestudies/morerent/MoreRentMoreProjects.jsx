import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const MoreRentMoreProjects = () => {
    return (
        <>
            <div className='sm:px-52 px-6 bg-[#192333] w-full sm:pt-16 pt-10'>
                <div className='sm:pb-16 pb-10'>
                    <div className='text-[#428DFF] techstack_sub pb-6'>
                        Projects
                    </div>
                    <div className='techstack_head'>
                        Other Case Studies
                    </div>
                </div>
            </div>
            <div className='sm:px-52 px-6 bg-[#192333] w-full sm:flex justify-center sm:pb-12 gap-10'>
                <div className='max-w-[430px]'>
                    <Image
                        src='/assets/morerent/jobitcard.png'
                        width={430}
                        height={230}
                        alt="challanges"
                        className='object-contain flex-none rounded-t-lg'
                    />
                    <div className='text-[#428DFF] otherprojectheading p-4 bg-[#151E2C]'>
                        JobIt
                    </div>
                    <div className='otherprojectsub px-4 bg-[#151E2C]'>
                        Jobit, a web app made with React and JSearch API, links developers to millions of job openings. It offers easy job search by...
                    </div> 
                    <div className='bg-[#151E2C] px-4 py-6 rounded-b-lg'>
                        <div className='bg-[#428DFF] rounded-full py-4 px-8 flex justify-center'>
                            <Link href='/casestudy/jobit'>
                                <div className='flex xxl:items-center xxl:justify-center'>
                                    See Case Study
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='max-w-[430px] py-12 sm:py-0'>
                    <Image
                        src='/assets/morerent/jobitcard.png'
                        width={430}
                        height={230}
                        alt="challanges"
                        className='object-contain flex-none rounded-t-lg'
                    />
                    <div className='text-[#428DFF] otherprojectheading p-4 bg-[#151E2C]'>
                        JobIt
                    </div>
                    <div className='otherprojectsub px-4 bg-[#151E2C]'>
                        Jobit, a web app made with React and JSearch API, links developers to millions of job openings. It offers easy job search by...
                    </div> 
                    <div className='bg-[#151E2C] px-4 py-6 rounded-b-lg'>
                        <div className='bg-[#428DFF] rounded-full py-4 px-8 flex justify-center'>
                            <Link href='/casestudy/jobit'>
                                <div className='flex xxl:items-center xxl:justify-center'>
                                    See Case Study
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>   
                   
        </>
    )
}

export default MoreRentMoreProjects