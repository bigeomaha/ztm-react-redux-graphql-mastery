import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartViewContext } from "../../contexts/shoppingcart.context";

export const CartIcon = () => {
  const { is_cart_visible, setCartVisible, total_items } = useContext(CartViewContext);
  const toggleCartPopup = () => {
    setCartVisible(!is_cart_visible);
  };
  return (
    <div className="cart-icon-container" onClick={toggleCartPopup}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{total_items}</span>
    </div>
  );
};