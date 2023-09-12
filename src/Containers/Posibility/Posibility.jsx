import "./posibility.css";
import posibilityImage from "../../assets/possibility.png";
function Posibility() {
  return (
    <div className="gpt4-posibility section-padding" id="posibility">
      <div className="gpt4-posibility-image">
        <img src={posibilityImage} alt="posibility" />
      </div>
      <div className="gpt4-posibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient-text">
          The posibilities are beyond your imagination
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod corrupti
          incidunt temporibus itaque maiores exercitationem enim alias aut ipsum
          cumque.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
}

export default Posibility;
