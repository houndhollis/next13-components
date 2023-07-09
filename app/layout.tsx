import './globals.css';
import { Inter } from 'next/font/google';

import AuthContext from './context/AuthContext';
import ToasterContext from './context/ToasterContext';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Next13 Works',
  description: 'My Next13 Works',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <AuthContext>
        <ToasterContext/>
        {children}
      </AuthContext>
      </body>
    </html>
  )
}
