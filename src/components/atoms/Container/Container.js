import React from 'react';
import { ToastContainer } from 'react-toastify';
import './styles.scss';
import 'react-toastify/dist/ReactToastify.css';

const Container = ({ children }) => (
  <div className="Container">
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      pauseOnHover
    />
    {children}
  </div>
);

export default Container;