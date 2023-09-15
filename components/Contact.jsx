"use client"
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import EarthCanvas from "./canvas/Earth";
import  SectionWrapper  from "../hoc/SectionWrapper";
import { slideIn } from "../utils/motion/motion.js";
import { SocialMedia } from './'

const Contact = () => {
	const formRef = useRef()

	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	})

	const [loading, setLoading] = useState(false)

	const handleChange= (e) => {
		const { target } = e;
		const { name, value } = target;
	
		setForm({
		  	...form,
		  	[name]: value,
		});
	}

	const handleSubmit= (e) => {
		e.preventDefault();
		setLoading(true);

		emailjs
			.send("service_4zsgiu3","template_ri9wwi9",
				{
					from_name: form.name,
					to_name: "Giovanni Medrano",
					from_email: form.email,
					to_email: "medranoector@gmail.com",
					message: form.message,
				},
				"EZ0c6fUO0sftFFy_G"
			)
			.then(()=> {
				setLoading(false);
				alert("Thank you. I will get back to you as soon as possible.");
	  
				setForm({
					name: "",
					email: "",
					message: "",
				  	});
				},
				(error) => {
					setLoading(false);
					console.error(error);
		  
					alert("Ahh, something went wrong. Please try again.");
				  }
			)
	}

  	return (
    	<div className="sm:px-14 px-6 xl:py-20 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden ">
			<motion.div
				variants={slideIn('left', "tween", 0.2, 1)}
				className="flex-[0.75] bg-[#192333] p-8 rounded-2xl"
			>
				<p className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'>
					Get in touch
				</p>
                <div className="flex flex-col items-start"> {/* Enclosing div */}
                    
                    <h2 className='font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>
                        Contact.
                    <div className='h-3 bg-[#ffbe62] w-full sm:-mt-7 -mt-5 z-0' />
                    </h2>

                </div>
				<form 
					ref={formRef}
					onSubmit={handleSubmit}
					className="mt-12 flex flex-col gap-8"
				>	
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Your Name</span>
						<input
							type='text'
							name='name'
							value={form.name}
							onChange={handleChange}
							placeholder="What's your name?"
							className='bg-[#151E2C] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
						/>
					</label>

					<label className='flex flex-col'>
						<span className='text-white font-medium mb-4'>Your email</span>
							<input
								type='email'
								name='email'
								value={form.email}
								onChange={handleChange}
								placeholder="What's your web address?"
								className='bg-[#151E2C] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
							/>
          			</label>

					<label className='flex flex-col'>
        				<span className='text-white font-medium mb-4'>Your Message</span>
            				<textarea
								rows={7}
								name='message'
								value={form.message}
								onChange={handleChange}
								placeholder='Messege'
								className='bg-[#151E2C] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            				/>
         			</label>

					<div className="flex flex-row justify-between">
						<button
							type='submit'
							className='bg-[#151E2C] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
						>
							{loading ? "Sending..." : "Send"}
						</button>
						{/* <SocialMedia /> */}
					</div>
				</form>
			</motion.div>

			<motion.div
				variants={slideIn('right', "tween", 0.2, 1)}
				className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
			>
        		<EarthCanvas />
			</motion.div>
		</div>
  	)
}

export default SectionWrapper(Contact, 'contact')