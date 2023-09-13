import React from 'react';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const SocialMedia = () => {
    return (
        <div className='flex flex-start flex-cols items-center gap-4'>
            <div>
                <a target="_blank" href="https://github.com/medrano123"><AiFillGithub size={40}  /></a>
            </div>
            <div>
                <a target="_blank" href ="https://www.linkedin.com/in/giovanni-m-0682a71ba/"><AiFillLinkedin size={40} /></a>
            </div>
        </div>
    )
}

export default SocialMedia;