import './user-basket.styles.scss';
import { useDispatch, useSelector } from "react-redux";
import { selectShoppingCartItems, selectShoppingCartTotalPrice } from "../../store/shoppingcart/shopcart.selector";
import { addItemToCart, subtractItemFromCart, deleteItemFromCart } from "../../store/shoppingcart/shopcart.actions";


const _cartItem = (cart_items, item) => {
    const dispatch = useDispatch();
    const deleteHandler = () => dispatch(deleteItemFromCart(cart_items, item));
    const incrementHandler = () => dispatch(addItemToCart(cart_items, item));
    const decrementHandler = () => dispatch(subtractItemFromCart(cart_items, item));

    return (
        <div className='checkout-item-container' key={item.id}>
            <div className="image-container">
                <img src={item.imageUrl} alt={item.name} />
            </div>
            <span className="name">{item.name}</span>
            <span className='quantity'>
                <span className="decrement arrow" onClick={decrementHandler}> - </span>
                <span className="value">{item.quantity}</span>
                <span className="increment arrow" onClick={incrementHandler}> + </span>
            </span>
            <span className='price'>${item.price}</span>
            <span className='price'>${item.quantity * item.price}</span>
            <div className='remove-button' onClick={deleteHandler}> &#10005;  </div>
        </div>
    )
}

const UserBasket = () => {

    const cart_items = useSelector(selectShoppingCartItems);
    const cart_total = useSelector(selectShoppingCartTotalPrice);

    return (
        <div className="user-basket">
            <h1>Your Basket</h1>
            <div className='checkout-container'>
                <div className='checkout-header'>
                    <div className='header-block product'></div>
                    <div className='header-block description'>Description</div>
                    <div className='header-block quantity'>Quantity</div>
                    <div className='header-block'>Price</div>
                    <div className='header-block'>Total</div>
                    <div className='header-block'></div>
                </div>
                {cart_items.map((item) => (
                    _cartItem(cart_items, item)
                ))}
                <div className="total">
                    Total ${cart_total}
                </div>
            </div>
        </div>
    );
}

export default UserBasket;
