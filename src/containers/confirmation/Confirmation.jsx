import React from 'react';
import './confirmation.css';
import { FaCheck } from 'react-icons/fa';

const dismissMessage = () => {
    const baseURL =
      process.env.NODE_ENV === 'production'
        ? `${window.location.origin}/newsletter-sign-up-with-success-message-main`
        : `${window.location.origin}/newsletter-sign-up-with-success-message-main`;
    window.location.href = `${baseURL}/`; // Redirects in the same window
};


const Confirmation = () => {
  return (
    <div className="container_confirmation">
      <FaCheck className="container_confirmation_check-icon"/>
      <h1 className="container__text__h1">Thanks for subscribing!</h1>
      <p className="container__text__p">A confirmation email has been sent to <a href="mailto:ash@loremcompany.com">ash@loremcompany.com</a>. 
      Please open it and click the button inside to confirm your subscription.</p>
      <button className='container__text__email_button' onClick={dismissMessage}>
      Dismiss message
      </button>
    </div>
  );
};

export default Confirmation;
