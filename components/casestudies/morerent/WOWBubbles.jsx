"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion'

const WOWBubbles = ({ skill }) => {
    const { name, icon } = skill;

    const nameWords = name.split(' ');

    return (
        <div className='px-2'>
                <div className="sm:h-[100px] sm:w-[100px] h-[70px] w-[70px] xxxxl:h-[180px] xxxxl:w-[180px] rounded-full bg-[#192333] flex items-center justify-center drop-shadow-xl">
                    <Image
                        src={icon}
                        width={100}
                        height={100}
                        alt="logo"
                        className='object-contain xxxxl:h-[120px] xxxxl:w-[120px]'
                    />
                </div>
                <div className='flex items-center justify-center WOWText mt-4 sm:text-[20px]'>
                    {name}
                </div>
        </div>
    );
};

export default WOWBubbles;
