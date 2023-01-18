import './CartItem.css'
<link href='https://fonts.googleapis.com/css?family=Material+Icons' rel='stylesheet'/>

const CartItem = ({total}) => {
    return (
        <div>
        <div className="cart-container">
           <i className="material-icons cart-icon">shopping_cart</i>
        </div>
            <div className="cart-num-container">
            <p className="cart-number"><b>{total}</b></p>
            </div>
        </div>
    )
}
export default CartItem;