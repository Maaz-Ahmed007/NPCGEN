'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import HamburgerBtn from '../hamburgerBtn'

import Link from 'next/link'
import UploadCardBtn from '../uploadCardBtn'

export default function Navbar({
    isOpen,
    toggle
}: {
    isOpen: boolean
    toggle: () => void
}) {
    return (
        <>
            {/* For Desktop Version */}
            <nav className='bg-gray-50 border border-b-gray-600 w-full h-20 sticky top-0 px-12 py-4'>
                <div className='container mx-auto px-4 h-full'>
                    <div className='flex justify-between items-center h-full'>
                        {/* LOGO */}
                        <Link
                            href='/'
                            className='text-gray-800 text-2xl font-bold uppercase'
                        >npc-gen</Link>
                        {/* Search bar and other buttons */}
                        <ul className='flex md:flex gap-x-6 text-gray-900 items-center'>
                            <li>
                                <Input
                                    type='search'
                                    placeholder='Search NPC....'
                                />
                            </li>
                            <li className="hidden md:flex">
                                <Link href="/form">
                                    <Button variant='default'>Create NPC</Button>
                                </Link>
                            </li>
                            <li className="hidden md:flex">
                                <UploadCardBtn />
                            </li>
                            <li>
                                <HamburgerBtn className="md:hidden" isOpen={isOpen} toggle={toggle}></HamburgerBtn>
                            </li>
                        </ul>
                        {/* <Button variant='outline' onClick={toggle}>Sidebar</Button> */}
                    </div>
                </div>
            </nav>
        </>
    )
}