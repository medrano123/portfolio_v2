import React from 'react'

const MoreRentMyRole = () => {
    return (
        <div className='sm:px-52 px-6 bg-[#151E2C] justify-between items-center md:flex py-10'>
            <div className='sm:py-0 py-4'>
                <p className='myrole_sub text-[#778295]'>
                    My Role
                </p>
                <h1 className='myrole_software sm:mt-4 mt-2'>
                    Software Engineer
                </h1>
            </div>
            <div className='sm:py-0 py-4'>
                <p className='myrole_sub text-[#778295]'>
                    Start Date
                </p>
                <h1 className='myrole_software text-[24px] font-bold sm:mt-4 mt-2'>
                    24/01/2023
                </h1>
            </div>
            <div className='sm:py-0 py-4'>
                <p className='myrole_sub text-[#778295]'>
                    End Date
                </p>
                <h1 className='myrole_software sm:mt-4 mt-2'>
                    02/03/2023
                </h1>
            </div>
            
        </div>
    )
}

export default MoreRentMyRole