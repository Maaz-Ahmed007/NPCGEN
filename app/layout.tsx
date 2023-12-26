import type { Metadata } from 'next'
import { Lusitana } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/navigation/navigation'

const lusitana = Lusitana({ weight: "400", subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'NPC GEN Application',
    description: 'NPC GEN application can contain NPCs and it can also create NPCs.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={lusitana.className}>
                <Navigation />
                {children}
            </body>
        </html>
    )
}