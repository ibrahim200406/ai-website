import "./whatgbt4.css";
import Feature from "../../Components/Feature/Feature.jsx";

function WhatGBT4() {
  return (
    <div className="gpt4-whatgpt4 section-padding section-margin" id="wgpt">
      <div className="gpt4-whatgpt4-feature">
        <Feature
          className="whatgpt4"
          title="What is CPT-4?"
          text="
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam labore mollitia ab, sed inventore dicta impedit dolor, laborum, maiores cumque velit laudantium quisquam at! Veritatis aperiam mollitia ducimus ut assumenda.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam labore mollitia ab, sed inventore dicta impedit dolor, laborum, maiores cumque velit laudantium quisquam at! Veritatis aperiam mollitia ducimus ut assumenda.   "
        />
      </div>
      <div className="gpt4-whatgpt4-heading">
        <h1 className="gradient-text">
          The posibilities are beyond your imagination
        </h1>
        <p>Explore The Libary</p>
      </div>
      <div className="gpt4-whatgpt4-container">
        <Feature
          title="Chatbots"
          text="
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam quis temporibus iste soluta suscipit dolorum."
        />
        <Feature
          title="Knowledgebase"
          text="
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam quis temporibus iste soluta suscipit dolorum. "
        />
        <Feature
          title="Education"
          text="
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam quis temporibus iste soluta suscipit dolorum."
        />
      </div>
    </div>
  );
}

export default WhatGBT4;
