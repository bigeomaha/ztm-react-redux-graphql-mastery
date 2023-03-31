import "./cart-dropdown.styles.scss";
import { useNavigate } from "react-router-dom";
import Button from "../form-input/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useDispatch, useSelector} from "react-redux";
import { selectShoppingCartItems, selectShoppingCartToggle } from "../../store/shoppingcart/shopcart.selector";
import { setCartVisible } from "../../store/shoppingcart/shopcart.actions";

export const CartDropdown = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cart_items = useSelector(selectShoppingCartItems);
    const is_cart_visible  = useSelector(selectShoppingCartToggle);

    const handleCheckout = () => {
        dispatch(setCartVisible(!is_cart_visible));
        navigate('/shopping-cart');
    }

    return (
        <div className="cart-dropdown-container">
            <div className="cart-items-container">
                {cart_items.map((cartItem) => (
                    <CartItem cartItem={cartItem} key={cartItem.id}/>
                )
                )}
            </div>
            <Button onClick={handleCheckout} >CHECKOUT NOW</Button>
        </div>
    );
};

export default CartDropdown;