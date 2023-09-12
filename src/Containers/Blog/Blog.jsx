import "./blog.css";
import { Article } from "../../Components/index";
import { blog02, blog03, blog04, blog05 } from "./imports";

function Blog() {
  return (
    <div className="gpt4-blog section-padding" id="blog">
      <div className="gpt4-blog-heading">
        <h1 className="gradient-text">
          A lot is happening.We are blogging about it.
        </h1>
      </div>
      <div className="gpt4-blog-container">
        <div className="gpt4-blog-container-group">
          <Article
            imgUrl={blog02}
            date={"October 22,2023"}
            title={"GPT-4 and Open AI is the future.Let us exlore how it is?"}
          />
          <Article
            imgUrl={blog04}
            date={"October 22,2023"}
            title={"GPT-4 and Open AI is the future.Let us exlore how it is?"}
          />
          <Article
            imgUrl={blog05}
            date={"October 22,2023"}
            title={"GPT-4 and Open AI is the future.Let us exlore how it is?"}
          />
          <Article
            imgUrl={blog03}
            date={"October 22,2023"}
            title={"GPT-4 and Open AI is the future.Let us exlore how it is?"}
          />
        </div>
      </div>
    </div>
  );
}

export default Blog;
