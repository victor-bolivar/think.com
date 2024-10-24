import React from 'react'
import { CiWarning } from "react-icons/ci";

const TextError = ({ children }) => {
    return (
        <p className='bg-[#fde9eb] text-[#7f4c51] block px-2 py-1 text-xs'>
            <CiWarning className='inline' /> {children}
        </p>
    )
}

export default TextError
