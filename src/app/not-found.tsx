'use client';

import Link from 'next/link';
import React, { useEffect } from 'react';
import './globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Sidebar from './components/sidebar';
import { useRouter } from 'next/navigation';

const font = Plus_Jakarta_Sans({ subsets: ['latin'] });
const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => router.push('/'), 3000);
  }, []);
  return (
    <html lang="en">
      <body className={font.className}>
        <Sidebar />
        <div className="ml-60">
          <h2>Not Found</h2>
          <p>Could not find requested resource</p>
          <Link href="/">Return Home</Link>
        </div>
      </body>
    </html>
  );
};
export default NotFound;
