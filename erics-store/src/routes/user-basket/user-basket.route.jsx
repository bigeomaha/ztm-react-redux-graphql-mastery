import './user-basket.styles.scss';
import { useContext } from 'react';
import { CartViewContext } from '../../contexts/shoppingcart.context';

const UserBasket = () => {
    const { cart_items, setCartItems } = useContext(CartViewContext);
    console.log('shoppingcart: ', cart_items)
    return (
        <div className="user-basket">
            <h1>User Basket</h1>
            <div className='products-table'>
                <div className='table-header'>
                    <div className='table-header-item'>Product</div>
                    <div className='table-header-item'>Description</div>
                    <div className='table-header-item'>Quantity</div>
                    <div className='table-header-item'>Price</div>
                    <div className='table-header-item'>Remove</div>
                </div>
                {cart_items.map((item) => (
                    <div className='table-body' key={item.id}>
                        <img src={item.imageUrl} alt=''/>
                        <div className='table-body-item'>{item.name}</div>
                        <div className='table-body-item'> {item.quantity} </div>
                        <div className='table-body-item'>${item.quantity * item.price}</div>
                        <div className='table-body-item'> X </div>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default UserBasket;
