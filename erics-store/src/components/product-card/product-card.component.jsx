import "./product-card.styles.scss";
import Button from "../form-input/button.component";
import { useDispatch, useSelector } from "react-redux";
import { selectShoppingCartItems } from "../../store/shoppingcart/shopcart.selector";
import { addItemToCart } from "../../store/shoppingcart/shopcart.actions";



const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const { id, name, price, imageUrl } = product;
    const cart_items = useSelector(selectShoppingCartItems);
    const addProductToCart = () => dispatch(addItemToCart(cart_items, product)) ;
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