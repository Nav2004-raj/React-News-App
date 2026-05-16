import {} from "react";

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-flex flex-column mx-3"
      style={{ width: "300px", height: "480px" }}
    >
      <img
        src={src}
        style={{ height: "200px", width: "100%", objectFit: "cover" }}
        className="card-img-top"
        alt={title}
      />
      <div className="card-body d-flex flex-column flex-grow-1 overflow-hidden">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p
          className="card-text flex-grow-1 overflow-hidden"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {description ? description.slice(0, 90) : "No description available."}
        </p>
        <a
          href={url}
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
