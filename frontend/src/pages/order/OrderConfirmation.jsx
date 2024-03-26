import React from 'react';
import styles from './Order.module.css'; // Import the CSS module

const OrderConfirmation = () => {
  return (
    <div className={styles.outerContainer}> {/* Apply the CSS class to the outer container */}
      <div className={styles.innerContainer}> {/* Apply the CSS class to the inner container */}
        <img className={styles.img}src="./order.png" alt="Order Placed" />
        <h2>Order is placed successfully!</h2>
        <p>You will be receiving a confirmation email with order details.</p>
        <button className={styles.button} onClick={() => window.location.href = '/'}>Go back to Home page</button>
      </div>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <span>Musicart | All rights reserved</span>
        </div>
      </footer>
    </div>
  );
};

export default OrderConfirmation;
