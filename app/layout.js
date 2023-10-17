"use client";

import '@/styles/global.css'
import Head from 'next/head';
import Footer from '@/components/Footer'
import NavBar from '@/components/Nav';
import Providers from '../utils/providers'

export const metadata = {
    title: "Ritchie's Portfolio",
    description: 'Full-Stack React Developer',
}

export default function RootLayout({ children }) {
    return (
        <>
            <Head>
                <title>{metadata.title}</title>
            </Head>
            <Providers>
                <NavBar />
                {children}
            </Providers>
        </>
    );
}
