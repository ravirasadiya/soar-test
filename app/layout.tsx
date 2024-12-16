import { Toaster } from '@/components/ui/custom-sonner'
import { UserProvider } from '@/contexts/providers/UserProvider'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Header } from './components/header'
import { Sidebar } from './components/sidebar'
import './globals.css'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Financial Dashboard',
  description: 'Modern financial dashboard built with Next.js and shadcn/ui',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <UserProvider>
          <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 lg:pl-[280px]">
              <Header /> {children}
            </main>
          </div>
        </UserProvider>
        <Toaster />
      </body>
    </html>
  )
}
