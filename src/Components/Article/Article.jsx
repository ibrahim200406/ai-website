import "./article.css";
import PropTypes from "prop-types";

function Article({ imgUrl, title, date }) {
  Article.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  };
  return (
    <div className="gpt4-blog-container-article">
      <div className="gpt4-blog-container-article-image">
        <img src={imgUrl} alt="blog_image" />
      </div>
      <div className="gpt4-blog-container-article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <a href="">Read Full Article</a>
      </div>
    </div>
  );
}

export default Article;
