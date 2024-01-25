import React, { useState } from "react";
import CustomModal from "./modal";

export default function NewsCard({
  newsUrl,
  title,
  description,
  image,
  author,
  content,
}) {
  const [isShow, setIsShow] = useState(false);

  const onTriggerReadMore = () => {
    setIsShow(true);
  };

  return (
    <div>
      <div className="card news-card">
        <div className="col">
          <div className="row image-row">
            <img className="card-img-top card-img" src={image} alt="Card_cap" />
          </div>
          <div className="row text-container">
            <div className="">
              <h5 className="card-title p-1">{`Author:  ${author}`}</h5>
            </div>
            <div className="text-body">
              <h5 className="card-title p-1">{title}</h5>
              <p className="card-text p-2">{description}</p>
            </div>
          </div>
          <div className="row" style={{ height: "4rem" }}>
            <div className="card-btn">
              <button
                className="card-btn-text w-100 m-2"
                onClick={onTriggerReadMore}
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <CustomModal
          isOpen={isShow}
          title={title}
          image={image}
          content={description}
          newsUrl={newsUrl}
        />
      </div>
    </div>
  );
}
