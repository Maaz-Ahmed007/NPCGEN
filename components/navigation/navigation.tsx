'use client'

import Navbar from './navbar'
import Sidebar from './sidebar'

import { useState } from 'react'

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar isOpen={isOpen} toggle={toggle} />
        </>
    )
}