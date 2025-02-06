import React, { useState } from 'react';
import './card.css';
import { FaCheck } from 'react-icons/fa';

const Card = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);

  // Function to validate email format
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Handle form submission
  const handleSubscribe = () => {
    if (validateEmail(email)) {
      setIsValid(true);
  
      // Ensure correct path for both localhost and GitHub Pages
      const baseURL = window.location.origin + "/newsletter-sign-up-with-success-message-main";
  
      window.location.href = `${baseURL}/#/confirmation`; // HashRouter requires "#"
    } else {
      setIsValid(false);
    }
  };
  
  

  return (
    <div className='container' role="main">
      <div className="container__text">
        <h1 className='container__text__h1'>Stay updated!</h1>
        <p className='container__text__p'>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul className='container__text__ul'>
          <li className='container__text__li'><FaCheck className="check-icon" />Product discovery and building what matters</li>
          <li className='container__text__li'><FaCheck className="check-icon" />Measuring to ensure updates are a success</li>
          <li className='container__text__li'><FaCheck className="check-icon" />And much more!</li>
        </ul>
        
        {/* Email Input Section */}
        <div className='container__text__input'>
          <div className="container__text__input_email-row">
            <p className='container__text__email'>Email address</p>
            {!isValid && <span className="container__text__error">Valid email required</span>}
          </div>
          <input 
            type="email" 
            className={`container__text__input-field ${!isValid ? 'container__text__error-border' : ''}`} 
            placeholder="email@company.com" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <button className='container__text__email_button' onClick={handleSubscribe}>
            Subscribe to monthly newsletter
          </button>
        </div>
      </div>
      <div className="container__img"></div>
    </div>
  );
};

export default Card;
