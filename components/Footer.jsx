import React from 'react'

import { SocialMedia } from '.'

const Footer = () => {
    return (
        <div className='sm:px-14 px-6 flex justify-between' id="footer">
            <p>
            © 2023 Adrian. All rights reserved.
            </p>
            <p>
                <SocialMedia />
            </p>
        </div>
    )
}

export default Footer