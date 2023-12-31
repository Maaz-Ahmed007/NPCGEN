'use client'

import { useState } from 'react'

import Navbar from '@/components/navigation/navbar'
import Sidebar from '@/components/navigation/sidebar'

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Navbar isOpen={isOpen} toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
        </>
    )
}