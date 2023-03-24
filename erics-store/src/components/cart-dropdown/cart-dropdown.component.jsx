import "./cart-dropdown.styles.scss";
import { useContext } from "react";
import { CartViewContext } from "../../contexts/shoppingcart.context";
import Button from "../form-input/button.component";
import CartItem from "../cart-item/cart-item.component";

export const CartDropdown = () => {
    const {cart_items} =useContext(CartViewContext)
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items-container">
                {cart_items.map((cartItem) => (
                    <CartItem cartItem={cartItem} key={cartItem.id}/>
                )
                )}
            </div>
            <Button >CHECKOUT NOW</Button>
        </div>
    );
};

export default CartDropdown;