import React from 'react';
import Navbar from './common/Navbar';
import Footer from './Common/Footer';

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
