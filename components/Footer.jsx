import React from 'react'
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import { SocialMedia } from '.'

const Footer = () => {
    return (
        <div className='sm:px-14 px-6 flex justify-between' id="footer">
            <p>
            © 2023 Giovanni. All rights reserved.
            </p>
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