"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion'

const SkillsBubble = ({ skill }) => {
    const { name, icon } = skill;

    return (
        <motion.div
            whileHover={{ scale: 1.25 }}
        >
            <div className="h-[90px] w-[90px] rounded-full bg-[#192333] flex items-center justify-center drop-shadow-2xl">
                <Image
                    src={icon}
                    width={50}
                    height={50}
                    alt="logo"
                    className='object-contain'
                />
            </div>
        </motion.div>

    );
};

export default SkillsBubble;
