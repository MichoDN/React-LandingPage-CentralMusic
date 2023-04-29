import Divider from "./Divider";
import "./articleCard.css"

const ArticleCard = ({ article, dark }) => {
  return <article
    style={{
      backgroundColor: dark ? "#252525" : "#EAEAEA",
      color: dark ? "white" : "black"
    }}
    className="article"
  >
    <div className="imgContainer">
    <img src={article.image} alt="Article Image" />
    </div>

    <Divider horizontal weight={3} dark={dark}/>

    <div className="info">
      <h5><a>{article.title}</a></h5>
      <p className="subtitle">{article.subtitle}</p>
    </div>
  </article>
};

export default ArticleCard;