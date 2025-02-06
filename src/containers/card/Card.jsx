import React from 'react'
import './card.css';
import { FaCheck } from 'react-icons/fa'; // Import the check icon


const Footer = () => {
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
        <div className='container__text__input'>
          <p className='container__text__email'>Email address</p>
          <input type="email" className='container__text__input-field' placeholder="email@company.com" />
          <button className='container__text__email_button'>Subscribe to monthly newsletter</button>
        </div>
      </div>
      <div className="container__img">
      </div>
    </div>

  )
}

export default Footer