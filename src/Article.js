// src/Article.js
import React from 'react';

function Article() {
  return (
    <article style={styles.article}>
      <h2 style={styles.title}>Understanding React Components</h2>
      <p style={styles.content}>
        React components let you split the UI into independent, reusable pieces, and think about each piece in isolation.
        This page provides an introduction to the idea of components. You can find a detailed component API reference here.
      </p>
    </article>
  );
}

const styles = {
  article: {
    margin: '20px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
  },
  title: {
    marginBottom: '10px',
  },
  content: {
    lineHeight: '1.6',
  },
};

export default Article;
