"use client";

import '@/styles/global.css'
import Footer from '@/components/Footer'
import Providers from '../utils/providers'

export const metadata = {
    title: "Ritchie's Portfolio",
    description: 'Made with Next.js and Tailwind',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Providers>
                    {children}
                    <Footer />
                </Providers>
            </body>
        </html>
    )
}
