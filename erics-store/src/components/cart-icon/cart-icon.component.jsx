import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectShoppingCartToggle, selectShoppingCartTotalItems } from "../../store/shoppingcart/shopcart.selector";
import { setCartVisible } from "../../store/shoppingcart/shopcart.actions";


export const CartIcon = () => {
  const dispatch = useDispatch();
  const total_items = useSelector(selectShoppingCartTotalItems);
  const is_cart_visible  = useSelector(selectShoppingCartToggle);

  const toggleCartPopup = () => {
    dispatch(setCartVisible(!is_cart_visible));
  };

  return (
    <div className="cart-icon-container" onClick={toggleCartPopup}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{total_items}</span>
    </div>
  );
};