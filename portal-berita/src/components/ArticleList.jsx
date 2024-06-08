import React from 'react';
import Article from './Article';
import './ArticleList.css';

const articles = [
  { id: 1, title: 'Article 1', content: 'Content of Article 1', author: 'Author 1' },
  { id: 2, title: 'Article 2', content: 'Content of Article 2', author: 'Author 2' },
];

const ArticleList = () => {
  return (
    <div className="article-list">
      {articles.map(article => (
        <Article key={article.id} title={article.title} content={article.content} author={article.author} />
      ))}
    </div>
  );
};

export default ArticleList;