import React from 'react'

const Button = ({ label, type = "primary", ...props }) => {

    let className;
    switch (type) {
        case 'primary':
            className = 'border border-black shadow-2xl hover:border-gray-600 hover:text-gray-600 focus:border-gray-600 focus:text-gray-600'
            break;
        case 'secondary':
            className = 'border border-gray-500 text-gray-500 shadow-xl hover:border-gray-400 hover:text-gray-400'
            break;
        default:
            break;
    }

    return (
        <button className={`rounded- px-3 py-2 outline-none ${className}`} {...props}
        >{label}</button>
    )
}

export default Button
