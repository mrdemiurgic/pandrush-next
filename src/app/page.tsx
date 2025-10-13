'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { BrowserView } from 'react-device-detect';

import '@/lib/fontawesome-config';
import About from '@/sections/About';
import Contact from '@/sections/Contact';
import RecentWork from '@/sections/RecentWork';
import Book from '@/sections/Book';
import FixedNav from '@/components/FixedNav';
import Footer from '@/components/Footer';
import ModalProvider from '@/contexts/Modal';
import NavDropdownProvider from '@/contexts/NavDropdown';

// Dynamically import Home section
const Home = dynamic(() => import('@/sections/Home'), {
  ssr: false,
});

export default function HomePage() {
  return (
    <ModalProvider>
      <NavDropdownProvider>
        <BrowserView>
          <FixedNav />
        </BrowserView>
        <Home />
        <About />
        <RecentWork />
        <Book />
        <Contact />
        <Footer />
      </NavDropdownProvider>
    </ModalProvider>
  );
}
