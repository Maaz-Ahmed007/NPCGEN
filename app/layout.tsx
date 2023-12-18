import type { Metadata } from 'next'
import { Lusitana } from 'next/font/google'
import './globals.css'

const lusitana = Lusitana({ weight: "400", subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'NPC GEN App',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={lusitana.className}>
                {children}
            </body>
        </html>
    )
}