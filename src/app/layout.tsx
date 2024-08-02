import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const bryantlg = localFont({
  src: [
    {
      path: '../assets/fonts/UTM_BryantLG.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/UTM_BryantLG_B.ttf',
      weight: '700',
      style: 'bold',
    },
  ],
})

export const metadata: Metadata = {
  title: '12T1 Gallery',
  description: '12T1 class (2022-2023) - Collège de Mytho - image gallery',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={bryantlg.className}>{children}</body>
    </html>
  )
}
