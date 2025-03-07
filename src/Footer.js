// src/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2024 My Blog. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#282c34',
    padding: '10px',
    textAlign: 'center',
    color: 'white',
    position: 'fixed',
    bottom: 0,
    width: '100%',
  },
};

export default Footer;
