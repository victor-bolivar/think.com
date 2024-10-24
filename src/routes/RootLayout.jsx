import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'

const RootLayout = () => {
    return (
        <div className='relative'>
            <Nav />

            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout