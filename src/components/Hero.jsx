import React, { useState } from 'react'
import { marcusAurelius, plato } from '../assets/images'

const Hero = () => {

    const headersCommonClasses = "text-white bg-black inline-block self-end absolute p-4 md:px-8 md:py-6 right-1 md:right-2 xl:right-14"

    return (
        <div className='flex flex-col relative'>
            <img className='lg:w-11/12' src={marcusAurelius} alt="marcus aurelius" />
            <img className='lg:w-4/5 self-end' src={plato} alt="plato" />

            {/* TODO que el texto aparezca con un ease-in cuando recien se renderiza */}
            <h1 className={`text-xl sm:text-3xl md:text-4xl xl:text-6xl font-mono top-4 sm:top-10 md:top-14 ${headersCommonClasses}`}>
                What did you accomplished
                <br className='sm:hidden' />
                <span className={`text-xl sm:text-3xl md:text-5xl xl:text-7xl font-semibold`}> today</span> ?
            </h1>
            <p className={`italic font-serif text-xl xl:text-6xl top-[7rem] sm:top-[8rem] md:top-[11rem] lg:top-[14rem] ${headersCommonClasses}`}>Let me guess...</p>
            <p className={`font-serif text-xl xl:text-4xl top-[11.25rem] sm:top-[13rem] md:top-[18rem] lg:top-[23rem] ${headersCommonClasses}`}>
                <span className='italic'>Just </span>
                <span className='font-mono font-semibold'> "scroll"</span>
            </p>

        </div>
    )
}

export default Hero



// What did you accomplish today ?
//     Just scroll ? Really ?
//         That's who you really are?

// Discover a new way to live
// Or better, to start living