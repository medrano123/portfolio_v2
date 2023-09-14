import React from 'react'
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
    return (
        <div className='sm:px-14 px-6 flex justify-between sm:pt-0 pt-10' id="footer">
            <div className='flex flex-col sm:flex-row'>
                <p className='sm:mr-2'>
                    © 2023 Giovanni. 
                </p>
                <p>
                    All rights reserved.
                </p>
            </div>
            <div className='flex flex-start flex-cols items-center gap-4'>
                <div>
                    <a target="_blank" href="https://github.com/medrano123"><AiFillGithub size={40}  /></a>
                </div>
                <div>
                    <a target="_blank" href ="https://www.linkedin.com/in/giovanni-m-0682a71ba/"><AiFillLinkedin size={40} /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer