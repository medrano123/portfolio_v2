import React from 'react'
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
    return (
        <div className='sm:px-14 px-6 sm:flex sm:justify-between sm:pt-0 pt-10' id="footer">
            <div className='flex flex-col sm:flex-row sm:items-end justify-center items-center text-'>
                <p className='sm:mr-2 text-[#778295]'>
                    © 2023 Giovanni. All rights reserved.
                </p>
                {/* <p>
                    All rights reserved.
                </p> */}
            </div>
            <div className='flex flex-start flex-cols justify-center items-center gap-4 mt-4 sm:mt-0'>
                <div>
                    <a target="_blank" href="https://github.com/medrano123"><AiFillGithub size={40}  color='#778295'/></a>
                </div>
                <div>
                    <a target="_blank" href ="https://www.linkedin.com/in/giovanni-m-0682a71ba/"><AiFillLinkedin size={40} color='#778295' /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer