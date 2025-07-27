import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css';
import Link from 'next/link';
import { Button } from '@/components/ui/button'
export const metadata: Metadata = {
  title: 'Telegram bot',
  description: 'Created with Telegram bot',
  generator: 'Telegram bot',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        <header style={{margin:"1rem",display:'flex',gap:"10px"}}>
          <Button >
            <Link href={"/"}>
              Document 1
            </Link>
          </Button>
          <Button >
            <Link href={"/new-policy-schedule"}>
              Document 2
            </Link>
          </Button>
          <Button >
            <Link href={"/Statement-of-Fact-or-Ageas-policy-TCV-MOT-44072540"}>
              Document 3
            </Link>
          </Button>
        </header>
        {children}</body>
    </html>
  )
}
