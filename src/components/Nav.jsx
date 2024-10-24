// TODO when moving to a react-router, this will be the Rootas must appear in every page
// TODO include logo of a pen de esos de tinta
// TODO sign in / sign up for the courses

import React from 'react'
import { navItems } from '../constants'
import { hamburguer } from '../assets/icons';
import { NavLink } from 'react-router-dom';
import PenIcon from './Icons/PenIcon'

const Nav = () => {
    return (
        <header className='bg-black text-white p-8 sticky top-0 z-10 shadow-sm shadow-white'>
            <nav className='flex justify-between'>
                <NavLink to="/" className={`text-4xl tracking-wider`} >
                    <PenIcon width={34} height={34} className={`inline-block`} /> Think
                </NavLink>
                <ul className='hidden sm:flex gap-6 items-center font-mono'>
                    {navItems.map(navItem => (
                        <li key={navItem.text}>
                            <NavLink to={navItem.href} end className={({ isActive }) => `hover:text-gray-400 ${isActive && 'text-gray-400'}`}>{navItem.text}</NavLink>
                        </li>
                    ))}
                </ul>
                <img src={hamburguer} alt="menu icon"
                    height={25} width={25} className='block sm:hidden' />
            </nav>
        </header >
    )
}

export default Nav
