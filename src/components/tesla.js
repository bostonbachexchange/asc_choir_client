import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewsApp = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const apiKey = '19b127d29e484512b32679b792d83166';
      const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

      try {
        const response = await axios.get(url);
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);


 articles.map( arcticle => {if(arcticle.content) {return arcticle.content.slice(0, 25)} })
  return (
    <div>
      <h1>Top Headlines</h1>
      <ul>
        {articles.map((article) => (
        <>
            <h2>
                <li key={article.url}>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                {article.title} 
                </a> by {article.author}

            </li>
            </h2>
            <p>
  {article.content ? article.content.slice(0, 200) : ""}
</p>

            
        </>
        ))}
      </ul>
    </div>
  );
};

export default NewsApp;
