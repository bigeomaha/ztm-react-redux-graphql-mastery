import "./product-card.styles.scss";
import Button from "../form-input/button.component";

const ProductCard = ({ product }) => {
    const { id, name, price, imageUrl } = product;
    return(
        <div className="product-card-container" key={id}>
            <img src={imageUrl} alt={name}/>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType='inverted'>Add to cart</Button>
        </div>
    );
};

export default ProductCard;