import './CartWidget.css'
import { useContext } from 'react';
import { cartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom';

<link href='https://fonts.googleapis.com/css?family=Material+Icons' rel='stylesheet'/>

const CartWidget = () => {
    const { cart } = useContext(cartContext);
    return (
        <div>
            <Link to="/cart">
                <div className="cart-container">
                    <i className="material-icons cart-icon">shopping_cart</i>
                </div>
            </Link>
            <div className="cart-num-container">
            <p className="cart-number"><b>{cart.reduce((acc, item) => acc + item.quantity, 0)}</b></p>
            </div>
        </div>
    )
}
export default CartWidget;