'use client'

import Link from "next/link"
import HamburgerBtn from "../hamburgerBtn"
import { Button } from "../ui/button"

export default function Sidebar({
    isOpen,
    toggle
}: {
    isOpen: boolean
    toggle: () => void
}) {
    return (
        <>
            <div
                className="fixed w-full h-full overflow-hidden justify-center bg-white grid pt-[120px] left-0 z-10"
                style={{
                    backdropFilter: isOpen ? 'blur(4px)' : 'none',
                    backgroundColor: isOpen ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0)',
                    opacity: isOpen ? 1 : 0,
                    top: isOpen ? '0' : '-100%',
                    transition: 'backdrop-filter 0.3s, background-color 0.3s, opacity 0.3s, top 0.3s',
                }}
            >
                <HamburgerBtn className="absolute right-0 mt-4 mr-11 p-5" isOpen={isOpen} toggle={toggle}></HamburgerBtn>

                <ul className="space-y-4 text-center leading-relaxed text-xl">
                    <li>
                        <Link href="/form">
                            <Button variant='default' size='default' onClick={toggle}>Create NPC</Button>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <Button variant='outline' size='default' onClick={toggle}>Add NPC</Button>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}