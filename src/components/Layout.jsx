import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children }) => {
  return (
    <div className="main-wrapper">
      {children}
      <ToastContainer />
    </div>
  );
};

export default Layout;
