import React from 'react'
import Image from 'next/image'

const FilmpireProblemStatement = () => {
    return (
        <div className='sm:px-52 px-6 bg-[#151E2C] w-full xxxl:min-h-fit sm:py-16 py-10'>
                <div className='max-w-screen-xxxl xxxl:mx-auto'>
                <div className='pb-4'>
                    <div className='text-[#428DFF] techstack_sub pb-6 xxxl:text-[45px] xxxxl:text-[55px] xxxl:mt-10'>
                        Problem
                    </div>
                    <div className='techstack_head xxxl:text-[40px] xxxxl:text-[50px] xxxl:mt-10'>
                        Problem Statement
                    </div>
                </div>
                <div className='caseStudyDescription pb-8 max-w-6xl xxxl:text-[40px] xxxxl:text-[50px] xxxl:leading-none xxxl:max-w-full'>
                    In today's digital age, movie enthusiasts and cinephiles are often left wanting when searching for a comprehensive platform to cater to their cinematic interests. One of the primary challenges they face is sifting through numerous scattered databases just to explore, review, and watch the latest and trending movie trailers. This fragmentation makes the pursuit of film knowledge and entertainment more tedious than it needs to be. Furthermore, film professionals, critics, and avid movie fans who are eager to share insights, rate movies, or delve into detailed actor profiles frequently find themselves navigating a complex web of incomplete and unrefined platforms. The absence of a centralized, user-friendly, and expansive platform denies them the seamless and enriched experience they truly desire in their film exploration journey.
                </div>
                <div>
                    <Image
                        src='/assets/filmpire/film2.png'
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

export default FilmpireProblemStatement;