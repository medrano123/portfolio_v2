"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { navLinks } from '../constants';


const NavBar = () => {
    const [active, setActive] = useState("");
	const [toggle, setToggle] = useState(false);

    return (
    	<nav className='sm:px-14 px-6 w-full flex items-centered py-5 fixed top-0 z-20 bg-[#192333] border-indigo-500'> {/*add border fix this */}
			<div className='flex w-full justify-between items-center mx-auto h-[60px] max-w-screen-xxxl'>
                <Link
                    href='/'
                    className="flex items-center gap-2"
                    onClick={() => {
                        setActive("");
                        window.scrollTo({
                        top: 100,
                        left: 100,
                        behavior: "smooth",
                        });
                    }}
                >
                    {/* <Image 
                        src='/assets/glogo.png'
                        width={45} //make smaller in smaller devices i could use more divs but lets look for a better solution
                        height={45}
                        alt="logo"
                        className='object-contain md:w-16 md:h-16'
                    /> */}
                    <div className='initial_background w-[45px] h-[45px] flex items-center justify-center text-[22px] rounded-full logo-font object-contain'>
                        G
                    </div>
                </Link>
                <ul className='list-none hidden md:flex flex-row gap-10 justify-end items-end'>
                    {navLinks.map((link) => (
                        <li 
                            key={link.id}
                            className={`${
                                active === link.title
                                ? 'text-white' 
                                : 'text-secondary' 
                            } hover:text-white text-[18px] font-medium cursor-pointer`}
                            onClick={() => setActive(link.title)}
                        >
                            <a href={`/#${link.id}`}>
                                {link.title}
                            </a>
                        </li>
					))}
				</ul>
                    
				<div className='md:hidden flex flex-1 justify-end items-center'>
					<Image
						src={toggle ? '/assets/close.svg' : '/assets/menu.svg'}
						alt="menu"
                        width={22}
                        height={22}
						className='object-contain cursor-pointer'
						onClick={() => setToggle(!toggle)}
					/>
					<div className={`${!toggle ?  'hidden' : 'flex' } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
						<ul className='list-none flex justify-end items-start flex-col gap-4 '>
							{navLinks.map((link) => (
								<li 
									key={link.id}
									className={`${
									active === link.title
										? 'text-white' 
										: 'text-secondary' 
										} hover:text-white text-[18px] font-medium cursor-pointer`} //changes could be made here but i like this style for now
									onClick={() => {
										setActive(link.title)
										setToggle(!toggle)
									}}
								>
									<a href={`/#${link.id}`}>
										{link.title}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
            </div>
        </nav>
    )
}

export default NavBar