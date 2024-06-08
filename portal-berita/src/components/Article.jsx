import React from 'react';
import './Article.css';

const Article = ({ title, content, author }) => {
  return (
    <div className="article">
      <h2>{title}</h2>
      <p>{content}</p>
      <small>By {author}</small>
    </div>
  );
};

export default Article;