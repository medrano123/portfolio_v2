"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion'

const SkillsBubble = ({ skill }) => {
    const { name, icon } = skill;
    const [isHovered, setIsHovered] = useState(false);

    const nameWords = name.split(' ');

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative"
        >
            <motion.div
                whileHover={{ scale: 1.25 }}
                className="relative"
            >
                <div className="h-[90px] w-[90px] rounded-full bg-[#192333] flex items-center justify-center drop-shadow-xl">
                    <Image
                        src={icon}
                        width={50}
                        height={50}
                        alt="logo"
                        className='object-contain'
                    />
                </div>
            </motion.div>
            {isHovered && (
                <div className="absolute top-[-65px] left-1/2 transform translate-x-[-50%]">
                    <p className="bg-opacity-80 bg-[#192333] p-2 rounded text-white whitespace-nowrap overflow-hidden overflow-ellipsis">
                        {nameWords.join(' ')}
                    </p>
                </div>
            )}
        </div>
    );
};

export default SkillsBubble;
