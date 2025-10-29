import "./productCard.css";

const ProductCard = (props) => {
  let { name, image, description, cost } = props;
  return (
    <div className="product_card">
      <h3>{name}</h3>
      <img src={image} alt={name} />
      <p>{description}</p>
      <p>{cost}</p>
    </div>
  );
};
export default ProductCard;
