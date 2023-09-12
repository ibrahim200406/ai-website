import { google, atlassian, shopify, slack, dropbox } from "./import";
import "./brand.css";

function Brand() {
  return (
    <div className="gpt4-brand section-padding">
      <div>
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={atlassian} alt="atlassian" />
      </div>
      <div>
        <img src={shopify} alt="shopify" />
      </div>
      <div>
        <img src={slack} alt="slcak" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox" />
      </div>
    </div>
  );
}

export default Brand;
