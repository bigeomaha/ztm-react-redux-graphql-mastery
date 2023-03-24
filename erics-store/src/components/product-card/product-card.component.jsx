import "./product-card.styles.scss";

import { useContext } from "react";
import Button from "../form-input/button.component";
import {CartViewContext} from "../../contexts/shoppingcart.context";

const ProductCard = ({ product }) => {
    const { id, name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartViewContext);
    const addProductToCart = () => addItemToCart(product);
    return(
        <div className="product-card-container" key={id}>
            <img src={imageUrl} alt={name}/>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType='inverted' onClick={addProductToCart}>Add to cart</Button>
        </div>
    );
};

export default ProductCard;