// src/App.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Article from './Article';

function App() {
  return (
    <div style={styles.container}>
      <Header />
      <Article />
      <Footer />
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
};

export default App;
