import React from 'react';
import Image from 'next/image';

const JobItFigmaDesign = () => {
    return (
        <>
            <div className='bg-[#0BAB7C] w-full xxxl:min-h-fit sm:py-8 py-2 flex flex-col items-center justify-center HFD sm:text-[32px] text-[14px]'>
                High-Fidelity Figma Design
            </div>
            <Image
                src='/assets/jobit/hfd.svg'
                width={575}
                height={330}
                alt='car'
                className='object-contain w-full'
            />
        </>
    )
}

export default JobItFigmaDesign