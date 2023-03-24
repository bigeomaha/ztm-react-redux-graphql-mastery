import './user-basket.styles.scss';
import { useContext } from 'react';
import { CartViewContext } from '../../contexts/shoppingcart.context';


const _cartItem = (item) => {
    const { addItemToCart, subtractItemFromCart, deleteItemFromCart } = useContext(CartViewContext);
    const incrementHandler  = () => addItemToCart(item);
    const decrementHandler = () => subtractItemFromCart(item);
    const deleteHandler = () => deleteItemFromCart(item);

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
    const { cart_items, setCartItems } = useContext(CartViewContext);
    const { cart_total, setCartTotal } = useContext(CartViewContext);

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
                    _cartItem(item)
                ))}
                <div className="total">
                    Total ${cart_total}
                </div>
            </div>
        </div>
    );
}

export default UserBasket;
