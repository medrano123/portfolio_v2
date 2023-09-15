"use client"
import React from 'react';
import { motion } from "framer-motion";

import SectionWrapper from '@/hoc/SectionWrapper.jsx';
import { fadeIn, textVariant } from "../utils/motion/motion.js";
import { testimonials } from "../constants";

const FeedbackCard = ({ testimonial, name, image, company, index, designation }) => (
    <motion.div
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        className="bg-[#192333] p-10 rounded-3xl xxxxl:w-[850px] xxl:w-[480px] lg:w-[398px] xs:w-[320px] w-full"
    >
        <p className='text-white font-black text-[48px]'>"</p>

        <div className="mt-1">
            <p className="text-white tracking-wider text-[24px] xxxl:text-[31px]">
                {testimonial}
            </p>
            <div className="mt-7 flex justify-between items-center gap-1">
                <div className="flex-1 flex flex-col">
                    <p className="text-white font-medium text-[16px]">
                        <span className="blue-text-gradient">@</span> {name}
                    </p>
                    <p className="mt-1 text-secondary text-[12px]">
                        {designation} at {company}
                    </p>
                </div>
                <img 
                    src={image}
                    alt={`feedback-by-${name}`}
                    className="w-10 h-10 rounded-full object-cover"
                />
            </div>
        </div>
    </motion.div>
)


const Testimonials = () => {
    return (
      <motion.div 
          className="sm:px-16 px-6 sm:py-20 py-14 bg-[#192333]" 
      >
          <div className='sm:px-16 px-6 sm:py-16 py-10 bg-[#151E2C] rounded-2xl sm:min-h-[300px] min-h-[230px]'>
              <motion.div variants={textVariant(0.2)}> 
                    <p className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'>
                        What others say
                    </p>
                    
                    <div className="flex flex-col items-start"> {/* Enclosing div */}
                        <h2 className='font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] z-10'>
                            Testimonials.
                            <div className='h-3 bg-[#ffbe62] w-full sm:-mt-8 -mt-4 z-0' />

                        </h2>
                    </div>
              </motion.div>
          </div>
          <div className='sm:px-16 px-6 -mt-20 sm:pb-14 pb-10 flex flex-wrap gap-7 bg-[#151E2C] rounded-2xl justify-between'>
              {testimonials.map((testimonial, index) => (
                  <FeedbackCard
                      key={testimonial.name}
                      index={index}
                      {...testimonial}
                  />
              ))}
          </div>
      </motion.div>
    )
}


export default SectionWrapper(Testimonials, 'testimonials')