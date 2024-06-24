'use client';

import { RecoilRoot } from 'recoil';
import { Inter } from 'next/font/google';

import Header from '@/components/header';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        <RecoilRoot>{children}</RecoilRoot>
      </body>
    </html>
  );
}
