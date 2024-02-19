import './globals.css'

import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import { Header } from '@/app/components/header'




const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '700']
})

export const metadata: Metadata = {
    title: 'Ignite Shop',
    description: 'Fictional ecommerce',
}

export default function RootLayout({
    children,
}: Readonly<{ 
  children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${roboto.className} bg-gray900 text-gray100`}>
                <div className="flex flex-col items-center justify-center">
                    <Header />
                    {children}
                </div>
            </body>
        </html>
    )
}
