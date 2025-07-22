import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
    <div style={{ backgroundColor: '#f3f4f6', minHeight: '100vh' }}>
      <Navbar />
      <main className="container my-4">{children}</main>
      <Footer />
    </div>
    </>
  );
}
