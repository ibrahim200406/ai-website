import PropTypes from "prop-types";
import "./feature.css";

function Feature({ title, text, className }) {
  Feature.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
  };
  return (
    <div
      className={`gpt4-features-container-feature ${
        className ? className : ""
      }`}
    >
      <div className="gpt4-features-container-feature-title">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="gpt4-features-container-feature-text">
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Feature;
