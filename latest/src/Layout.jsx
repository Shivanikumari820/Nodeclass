import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <main className="flex-grow-1">
        <div className="container py-4">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
