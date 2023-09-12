import { Feature } from "../../Components";
import robot from "../../assets/robot.png";
import "./features.css";

const featuresData = [
  {
    id: 1,
    title: "The Evolution of Machine Learning Algorithms",
    text: "   Vero dolores libero odit numquam pariatur ipsam magnam incidunt voluptates ratione tempora necessitatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero odit numquam pariatur ipsam magnam incidunt voluptates ratione ",
  },
  {
    id: 2,
    title: "Ethical Implications of Artificial Intelligence",
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolores libero odit numquam pariatur ipsam magnam incidunt voluptates ratione tempora necessitatibus.Vero dolores libero odit numquam pariatur ipsam magnam incidunt voluptates ratione tempora necessitatibus",
  },  {
    id: 3,
    title: "Challenges in Natural Language Processing (NLP)",
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolores libero odit numquam pariatur ipsam magnam incidunt voluptates ratione tempora necessitatibus.",
  },
  {
    id: 4,
    title: "Deep Learning and Neural Networks",
    text: " Magnam incidunt voluptates ratione tempora necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolores libero odit numquam pariatur ipsam magnam incidunt voluptates ratione tempora necessitatibus.",
  },

];

function Features() {
  return (
    <div className="gpt4-features section-padding" id="features">
      <div className="gpt4-features-heading">
        <h1 className="gradient-text">
          The Future is Now and You Just Need To Realize It. Step Into Future
          Today & Make it Happen
        </h1>
        <p>Request Early Access to Get Started</p>
        <div className="features-image">
          <img src={robot} alt="robot" />
        </div>
      </div>
      <div className="gpt4-features-container">
        {featuresData.map((item) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.id}
            className="wgpt4-2"
          />
        ))}
      </div>
    </div>
  );
}

export default Features;
