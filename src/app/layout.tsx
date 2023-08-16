"use client"
import Notification from '@/components/Notification'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import { useState } from 'react'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Foogler',
  description: 'Foogler is a food app on which you can order food at any time!!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [show,setShow] = useState(true);
  return (
    <html lang="en">
      <body className={inter.className}>
        {show &&
        <Notification setHideNotification={setShow}/>
        }
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
