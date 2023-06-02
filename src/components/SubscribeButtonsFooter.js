import styles from './SubscribeButtonsFooter.module.css';
import React, { useState } from 'react';



function SubscribeButtonsFooter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
  }

  return (
    <div className={styles.email}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input  className={styles.btn} type="email" placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)} />
      </form>
      <button className={styles.sub}>Subscribe</button>
    </div>
  );
}

export default SubscribeButtonsFooter;
