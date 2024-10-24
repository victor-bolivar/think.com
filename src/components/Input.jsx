import React, { useState } from 'react'
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import TextError from './TextError';

const Input = ({ label, id, name, type = "text", onBlur = undefined, onFocus = undefined, errors = null, ...props }) => {


    const [contentVisible, setContentVisible] = useState(false)

    const [isFocused, setIsFocused] = useState(false)
    const handleOnFocus = (e) => {
        setIsFocused(true)
        if (onFocus) {
            onFocus(e)
        }
    }
    const handleOnBlur = (e) => {
        setIsFocused(false)
        if (onBlur) {
            onBlur(e)
        }
    }

    return (
        <div className='mb-4'>
            <label
                className='block text-sm italic lowercase tracking-wider mb-1'
                htmlFor={id}>{label}</label>
            <div className='flex'>
                <input
                    className='border w-full font-mono py-1 px-2 h-8 outline-none focus:border-black ring-black'
                    type={(type === 'password' && contentVisible) ? 'text' : type}
                    onFocus={handleOnFocus} onBlur={handleOnBlur}
                    id={id} name={name} {...props}
                />
                {
                    type === "password" && <div
                        onClick={() => setContentVisible(prevVisible => !prevVisible)}
                        className={`border h-8 px-3 flex justify-around items-center ${isFocused && 'border-black'}`}>
                        {contentVisible ? <VscEye /> : <VscEyeClosed />}
                    </div>
                }
            </div>
            {
                errors && <div className='mt-0.5'>
                    {errors.map(err => <TextError key={err}>{err}</TextError>)}
                </div>
            }

        </div>
    )
}

export default Input
