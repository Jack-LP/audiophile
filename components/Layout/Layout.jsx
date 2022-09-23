import React from 'react';
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
