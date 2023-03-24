import "./cart-dropdown.styles.scss";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartViewContext } from "../../contexts/shoppingcart.context";
import Button from "../form-input/button.component";
import CartItem from "../cart-item/cart-item.component";

export const CartDropdown = () => {
    const {cart_items} =useContext(CartViewContext)
    const {is_cart_visible, setCartVisible} = useContext(CartViewContext)

    const navigate = useNavigate();
    const handleCheckout = () => {
        setCartVisible(!is_cart_visible);
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