"use client";

import '@/styles/global.css'
import { useState } from 'react';
import EmailModal from '@/components/EmailModal';
import Head from 'next/head';
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar';
import Providers from '../utils/providers'

export default function RootLayout({ children }) {

    return (
        <html lang="en">
            <body>
                <Head>
                    <title>Ritchie's Portfolio</title>
                    <meta name="description" content="Full-Stack React Developer" />
                </Head>
                <Providers>
                    <NavBar />
                    {children}
                </Providers>
            </body>
        </html>
    );
}
