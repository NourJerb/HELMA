import './SubscribeButtonsFooter.css';
import React, { useState } from 'react';



function SubscribeButtonsFooter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
  }

  return (
    <div className="email-subscription">
      <form onSubmit={handleSubmit} className="email-form">
        <input  className='input-btn' type="email" placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)} />
      </form>
      <button className=" subscribe-button">Subscribe</button>
    </div>
  );
}

export default SubscribeButtonsFooter;
