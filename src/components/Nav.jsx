// TODO when moving to a react-router, this will be the Rootas must appear in every page
// TODO include logo of a pen de esos de tinta
// TODO sign in / sign up for the courses

import React from 'react'
import { navItems } from '../constants'
import { hamburguer } from '../assets/icons';

const Nav = () => {
    return (
        <header className='bg-black text-white p-8'>
            <nav className='flex justify-between'>
                <a href="/" className='text-4xl hover:text-gray-400 tracking-wider'>Think</a>
                <ul className='hidden sm:flex gap-6 items-center font-mono'>
                    {navItems.map(navItem => (
                        <li>
                            <a href={navItem.href} className='hover:text-gray-400'>{navItem.text}</a>
                        </li>
                    ))}
                </ul>
                <img src={hamburguer} alt="menu icon"
                    height={25} width={25} className='block sm:hidden' />
            </nav>
        </header>
    )
}

export default Nav
