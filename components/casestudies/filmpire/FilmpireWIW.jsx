import React from 'react'
import Image from 'next/image';

import { wow } from '@/constants';
import { WOWBubbles } from '../morerent';

const FilmpireWIW = () => {
    return (
        <>
            <div className='sm:px-52 px-6 bg-[#151E2C] w-full xxxl:min-h-fit sm:pt-16 pt-10'>
                <div className='max-w-screen-xxxl xxxl:mx-auto'>
                    <div className='pb-6'>
                        <div className='text-[#428DFF] techstack_sub pb-6 xxxl:text-[45px] xxxxl:text-[55px] xxxl:mt-10'>
                            Way of Work
                        </div>
                        <div className='techstack_head xxxl:text-[40px] xxxxl:text-[50px] xxxl:mt-10'>
                            My Process
                        </div>
                    </div>
                </div>
            </div>
            <div className='sm:px-52 px-6 bg-[#151E2C] justify-center items-center xs:flex xs:flex-col' id="skills">
                <div className='flex flex-wrap items-center justify-start w-full xxxl:max-w-[1500px] sm:pb-24 sm:pt-14 py-10 gap-4'>  
                    {wow.map((skill, index ) => (
                        <div className="mx-auto"> {/* Centering each item */}
                            <WOWBubbles skill={skill} />    
                        </div>
                    ))}
                </div>
            </div>
            <div className='sm:px-52 px-6 bg-[#151E2C] w-full xxxl:min-h-fit pb-16'>
                <div className='max-w-screen-xxxl xxxl:mx-auto'>
                    <div className='pb-6'>
                        <div className='text-[#428DFF] techstack_sub pb-6 xxxl:text-[45px] xxxxl:text-[55px]'>
                            Problem
                        </div>
                        <div className='techstack_head xxxl:text-[40px] xxxxl:text-[50px] xxxl:mt-10'>
                            Challenges & Learnings
                        </div>
                    </div>
                </div>
                <div className='bg-[#192333] sm:p-10 p-6 rounded-lg mt-4 max-w-screen-xxxl xxxl:mx-auto'>
                    <div className='text-[#E15A46] challanges_heading xxxl:text-[40px] xxxxl:text-[50px]'>
                        Challanges
                    </div>
                    <div className='mt-8 flex gap-4 items-start challanges_text xxxl:text-[28px] xxxxl:text-[30px]'>
                        <Image
                            src='/assets/morerent/challange.png'
                            width={18}
                            height={18}
                            alt="challanges"
                            className='object-contain mt-2 flex-none'
                        />
                        Transitioning to and mastering React wasn't a walk in the park. Its component-based architecture, while powerful, demanded a complete shift in our development mindset. React's unique lifecycle methods, state management, and the virtual DOM introduced a plethora of concepts that took time and effort to assimilate. Crafting responsive and dynamic interfaces with React required meticulous attention to detail and a profound understanding of how the library operates under the hood.                    </div>
                    <div className='mt-8 flex gap-4 items-start challanges_text xxxl:text-[28px] xxxxl:text-[30px]'>
                        <Image
                            src='/assets/morerent/challange.png'
                            width={18}
                            height={18}
                            alt="challanges"
                            className='object-contain mt-2 flex-none'
                        />
                        As if grasping React wasn't challenging enough, our journey into React-Redux added another layer of complexity. React-Redux, as a tool for state management, urged us to reconceptualize how we approached data flow in our application. Ensuring that components effectively subscribed to relevant parts of the application state and dispatched actions appropriately became a critical focus. Debugging issues related to state changes and propagation forced us to dive deep into the intricacies of Redux.                    </div>
                    <div className='mt-8 flex gap-4 items-start challanges_text xxxl:text-[28px] xxxxl:text-[30px]'>
                        <Image
                            src='/assets/morerent/challange.png'
                            width={18}
                            height={18}
                            alt="challanges"
                            className='object-contain mt-2 flex-none'
                        />
                        My goal wasn't just to fetch data from an API but to do so in a way that ensured seamless user experience, with real-time responsiveness and minimal latency. Understanding the API's endpoints, structuring our requests optimally, handling potential errors, and ensuring that the fetched data was seamlessly integrated into our application's state were challenges that demanded strategic planning and execution.                                           </div>
                    </div>
                <div className='bg-[#192333] sm:p-10 p-6 rounded-lg sm:mt-12 mt-10 max-w-screen-xxxl xxxl:mx-auto'>
                    <div className='text-[#02BC7D] challanges_heading xxxl:text-[40px] xxxxl:text-[50px]'>
                        Learnings
                    </div>
                    <div className='mt-8 flex gap-4 items-start challanges_text xxxl:text-[28px] xxxxl:text-[30px]'>
                        <Image
                            src='/assets/morerent/tick.png'
                            width={18}
                            height={18}
                            alt="challanges"
                            className='object-contain mt-2 flex-none'
                        />
                        Through the course of the project, we delved deeply into React, a game-changing front-end library. This journey offered insights into its component-based development approach, allowing for a modular and maintainable codebase. We got hands-on experience with React's unique lifecycle methods, state and prop management, and the intricacies of the virtual DOM, revolutionizing how we perceive and build user interfaces.                    </div>
                    <div className='mt-4 flex gap-4 items-start challanges_text xxxl:text-[28px] xxxxl:text-[30px]'>
                        <Image
                            src='/assets/morerent/tick.png'
                            width={18}
                            height={18}
                            alt="challanges"
                            className='object-contain mt-2 flex-none'
                        />
                        With the goal of building a visually appealing and responsive UI, we explored the depths of Material-UI. This robust framework allowed us to craft sleek, modern, and consistent user interfaces, all while ensuring compatibility across devices. We familiarized ourselves with a multitude of components and custom theming, pushing the boundaries of what we could achieve aesthetically.                    </div>
                    <div className='mt-4 flex gap-4 items-start challanges_text xxxl:text-[28px] xxxxl:text-[30px]'>
                        <Image
                            src='/assets/morerent/tick.png'
                            width={18}
                            height={18}
                            alt="challanges"
                            className='object-contain mt-2 flex-none'
                        />
                        Our journey into Redux was transformative, reshaping how we managed and thought about state in our applications. We learned the art of creating actions, reducers, and store, ensuring a single source of truth for our application's state. Integrating Redux with React, we could efficiently manage global state, making data flow more predictable and debugging easier.                    </div>
                    <div className='mt-4 flex gap-4 items-start challanges_text xxxl:text-[28px] xxxxl:text-[30px]'>
                        <Image
                            src='/assets/morerent/tick.png'
                            width={18}
                            height={18}
                            alt="challanges"
                            className='object-contain mt-2 flex-none'
                        />
                        As our application needed to interact with external data, understanding and managing API endpoints became crucial. We learned the nuances of API requests, from structuring the calls to handling various response types and errors. This ensured not only that our application was data-rich but also that the user experienced smooth and timely data retrieval.                    </div>
                </div>
            </div>
        </>
    )
}

export default FilmpireWIW;