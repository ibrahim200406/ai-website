import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
function Header() {
  return (
    <div className="gpt4-header section-padding" id="home">
      <div className="header-content">
        <h1 className="gradient-text">
          Let&apos;s Build Something amazing with GPT-4 OPEN AI
        </h1>

        <p className="header-content-1-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
          aperiam quia maxime voluptatibus enim atque nemo! Hic adipisci
          consequuntur deleniti consequatur doloremque dignissimos? Quis nemo
          officiis eius dolores eligendi numquam!
        </p>
        <div className="gpt4-header-content-input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt4-header-content-people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
        <div className="gpt4-header-image">
          <img src={ai} alt="AI" />
        </div>
    </div>
  );
}

export default Header;
