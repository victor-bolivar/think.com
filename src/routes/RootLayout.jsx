import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'

const RootLayout = () => {
    return (
        <div className='relative bg-[#c6cacf] h-screen flex flex-col'>
            <Nav />

            <main className='h-full'>
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout