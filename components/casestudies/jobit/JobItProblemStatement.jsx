import React from 'react'
import Image from 'next/image'

const JobItProblemStatement = () => {
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
                <div className='caseStudyDescription py-6 max-w-6xl xxxl:text-[40px] xxxxl:text-[50px] xxxl:leading-none xxxl:max-w-full'>
					In today's dynamic and rapidly changing job market, the competition for available job positions has become increasingly intense. This poses a challenge for both job seekers and employers as they struggle to find the right fit for their needs. The situation is worsened by the vast array of online job postings, which have made it harder to identify job opportunities that align with individual career goals and qualifications.         
                </div>
				<div className='caseStudyDescription py-6 max-w-6xl xxxl:text-[40px] xxxxl:text-[50px] xxxl:leading-none xxxl:max-w-full'>
					Jobit seeks to address the issue of job search for developers by providing a contemporary job posting web application. It is designed to offer free access to a vast pool of job postings while connecting developers with prospective employers. The JSearch API is a central component of Jobit, allowing users to find job opportunities that meet their particular requirements by presenting comprehensive details about job postings and salary projections to help candidates make educated decisions.                </div>
                <div>
                    <Image
                        src='/assets/jobit/usingcomputer.svg'
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

export default JobItProblemStatement