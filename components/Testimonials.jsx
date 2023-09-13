"use client"
import React from 'react';
import { motion } from "framer-motion";

import SectionWrapper from '@/hoc/SectionWrapper.jsx';
import { fadeIn, textVariant } from "../utils/motion/motion.js";
import { testimonials } from "../constants";

const FeedbackCard = ({ testimonial, name, image, company, index, designation }) => (
    <motion.div
        // Set the initial and animate states.
        initial="hidden"
        animate="show"
        // Utilize the fadeIn function with proper parameters.
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        className="bg-[#192333] p-10 rounded-3xl xs:w-[398px] w-full"
    >
        <p className='text-white font-black text-[48px]'>"</p>

        <div className="mt-1">
            <p className="text-white tracking-wider text-[21px]">
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
      // Wrap the parent in a motion.div and provide the initial and animate props
      <motion.div 
          className="sm:px-16 px-6 py-12 bg-[#192333]" 
          initial="hidden" 
          animate="show"
      >
          <div className='sm:px-16 px-6 sm:py-16 py-10 bg-[#151E2C] rounded-2xl min-h-[300px]'>
              <motion.div variants={textVariant(0.2)}> 
                  <p className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'>
                      What others say
                  </p>
                  <h2 className='font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-[#428DFF]'>
                      Testimonials.
                  </h2>
              </motion.div>
          </div>
          <div className='sm:px-16 px-6 -mt-20 pb-14 flex flex-wrap gap-7 bg-[#151E2C]'>
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