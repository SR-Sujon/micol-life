import React from 'react';
import '../css/LatestNews.css'; // You can style this component separately

const LatestNewsUpdate = () => {
  const newsArticles = [
    {
      category: "LINE Delivery",
      date: "2024 / 10 / 07",
      content: "[LINE distribution on October 7th] Here are the products distributed on the official Kikuya Bisyodo LINE!"
    },
    {
      category: "LINE Delivery",
      date: "2024 / 09 / 30",
      content: "[LINE distribution on September 30th] Here are the products distributed on the official LINE of Kikuya Bisyodo! (Updated on October 4th)"
    },
    {
      category: "LINE Delivery",
      date: "2024 / 09 / 24",
      content: "[LINE distribution on September 23rd] Here are the products distributed on the official LINE of Kikuya Bisyodo! (Updated 9/27)"
    }
  ];

  return (
    <div className="latest-news-container">
      <div className="news-header">
        <h2>Latest News</h2>
        <p>MiCOL Weekly Bulletin: Get the latest news on MiCOL's beauty and cosmetic innovations, product launches, exclusive offers, and industry trends. Our weekly updates keep you ahead with must-know insights, expert tips, and exciting announcements from the world of beauty.</p>
        <button className="view-all-btn">View All News</button>
      </div>
      <div className="news-list">
        {newsArticles.map((article, index) => (
          <div key={index} className="news-item">
            <div className="news-meta">
              <span className="news-category">{article.category}</span> &#8226; <span className="news-date">{article.date}</span>
            </div>
            <p className="news-content">{article.content}</p>
            <span className="news-link">→</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNewsUpdate;
