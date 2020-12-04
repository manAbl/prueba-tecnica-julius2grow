import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <div className="main-wrapper">
      {children}
      <ToastContainer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired
}

export default Layout;
