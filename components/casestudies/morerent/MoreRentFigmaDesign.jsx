import React from 'react';
import Image from 'next/image';

const MoreRentFigmaDesign = () => {
    return (
        <>
            <div className='bg-[#428DFF] w-full xxxl:min-h-fit sm:py-8 py-2 flex flex-col items-center justify-center HFD sm:text-[32px] text-[14px]'>
                High-Fidelity Figma Design
            </div>
            <Image
                src='/assets/morerent/hfd.png'
                width={575}
                height={330}
                alt='car'
                className='object-contain w-full'
            />
        </>
    )
}

export default MoreRentFigmaDesign