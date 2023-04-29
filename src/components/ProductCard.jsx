import Divider from "./Divider";
import "./productCard.css"

const ProductCard = ({ product, bg }) => {
  return <article className='productCard'>
    <div
      className="imageContainer"
      style={{
        background: bg && "radial-gradient(98.56% 98.92% at 1.22% 1.08%, #FBFBFB 0%, #D3D3D3 100%)"
      }}
    >
      <img src={product.img} alt={product.name} />
    </div>
      <Divider horizontal weight={"2"}/>
    <div className="info">
      <div>
        <a>{product.name}</a>
        <a>${product.price}</a>
      </div>
      <p className="description">{product.description}</p>
    </div>
  </article>
};

export default ProductCard;