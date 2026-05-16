import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles))
      .catch((err) => console.error("API Error:", err));
  }, [category, apiKey]);

  return (
    <div className="container text-center">
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      <div className="d-flex flex-wrap justify-content-center">
        {articles.map((news, index) => {
          return (
            <NewsItem
              key={index}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewsBoard;
