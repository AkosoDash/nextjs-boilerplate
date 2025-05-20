import type { Metadata, Viewport } from 'next'
import { Epilogue } from 'next/font/google'

import DashboardNavbar from '@/components/shared/navbar/DashboardNavbar'
import DashboardSidebar from '@/components/shared/sidebar/DashboardSidebar'
import { Providers } from './providers'

import './globals.css'

const epilogue = Epilogue({
  subsets: ['latin'],
  variable: '--font-epilogue',
  display: 'swap',
  weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'Next JS Boilerplate',
  description: 'Codebase made for any project that using Next JS as Framework',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico'
  },
  manifest: '/site.webmanifest'
}

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${epilogue.variable} antialiased`}>
        <Providers>
          <div className='flex min-h-screen w-full flex-col md:flex-row'>
            <DashboardSidebar />
            <div className='flex flex-1 flex-col'>
              <DashboardNavbar />
              <main className='flex-1'>{children}</main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  )
}
