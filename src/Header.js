// src/Header.js
import React from 'react';

function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>My Blog</h1>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#282c34',
    padding: '20px',
    textAlign: 'center',
  },
  title: {
    color: 'white',
  },
};

export default Header;
