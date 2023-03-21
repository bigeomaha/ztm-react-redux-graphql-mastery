import "./cart-dropdown.styles.scss";
import Button from "../form-input/button.component";

export const CartDropdown = () => {
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items" />
                <Button buttonType='inverted'>CHECKOUT NOW</Button>
        </div>
    );
};

export default CartDropdown;