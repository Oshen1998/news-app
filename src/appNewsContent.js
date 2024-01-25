import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "./newsCard";

function AppNewsContent({ match, history, location }) {
  const [news, setNews] = useState([
    {
      id: "",
      title: "",
      description: "",
      imageUrl: "",
      author: "",
      newsUrl: "",
      content: "",
    },
  ]);
  const [loading, setLoading] = useState(true);

  const fetchNews = (selectedCategory) => {
    setLoading(true);
    axios
      .get("https://newsapi.org/v2/everything", {
        params: {
          q: selectedCategory,
          apiKey: "31301f4162c74e08b0708538030e99eb",
        },
      })
      .then((response) => {
        const newsResponse = response.data.articles.filter(
          (news) =>
            news.title &&
            news.description &&
            news.urlToImage &&
            news.url &&
            news.content
        );

        const formattedResponse = newsResponse.map((news) => {
          return {
            id: new Date().getDate(),
            title: news.title,
            description: news.description,
            author: news.author,
            newsUrl: news.url,
            imageUrl: news.urlToImage,
            content: news.content,
          };
        });

        setNews([...formattedResponse]);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      })
      .catch((error) => setLoading(false));

    // axios
    //   .get("https://api.worldnewsapi.com/search-news", {
    //     params: {
    //       "api-key": "f987644c1232471bab7c6ea5603c83e9",
    //       text: selectedCategory,
    //       number: 100
    //     },
    //   })
    //   .then((response) => {
    //     const newsResponse = response.data.news.filter(
    //       (news) =>
    //         news.id &&
    //         news.title &&
    //         news.author &&
    //         news.image !== null &&
    //         news.url &&
    //         news.text
    //     );

    //       const formattedResponse = newsResponse.map((news) => {
    //         return {
    //           id: news.id || new Date().getDate(),
    //           title: news.title,
    //           description: news.text,
    //           author: news.author,
    //           newsUrl: news.url,
    //           imageUrl: news.image,
    //           content: news.text,
    //         };
    //       });

    //       setNews([...formattedResponse]);
    //       setLoading(false);
    //     })
    //     .catch((error) => setLoading(false));
  };

  useEffect(() => {
    const { name } = match.params;
    fetchNews(name);
  }, [match]);

  return (
    <div className="card-content">
      <div className="container-fluid news-content">
        {!loading ? (
          <div className="row m-2">
            {news.map((item) => {
              return (
                <div className="col" key={item.id}>
                  <NewsCard
                    description={item.description}
                    title={item.title}
                    author={item.author}
                    image={item.imageUrl}
                    newsUrl={item.newsUrl}
                    content={item.content}
                    key={item.id}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "70vh",
            }}
          >
            <div
              className="spinner-grow text-dark"
              style={{ width: "3rem", height: "3rem" }}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AppNewsContent;
