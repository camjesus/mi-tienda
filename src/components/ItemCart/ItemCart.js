import './ItemCart.css';
import { useContext, useEffect, useState } from 'react';
import { cartContext } from '../../context/cartContext';
import CounterWidget from '../CounterWidget/CounterWidget';
<link href='https://fonts.googleapis.com/css?family=Material+Icons' rel='stylesheet'/>

const ItemCart = ({product}) => {
    const { removeItem , changeQuantity} = useContext(cartContext);
    const [count, setCount] = useState(product.quantity)
    const onDelete = () => {
        removeItem(product.id);
    };

    useEffect(() => {
        console.log(count);
        changeQuantity(product.id, count);
	  }, [count]);

      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });

  return (    
    <div className='detail-cart'>
        <div className='div-cart'>
            <img className='img-cart' src={`/img/${product.image}.jpg`} alt={product.title} width={150} height={150} />
        </div>
        <div className='detail-cart-text'>
            <h1 className='text'>{product.title}</h1>
            <div > 
                <h3>{formatter.format(product.price)} c/u</h3>
                <h3 className='text'>Cantidad: {product.quantity}</h3>
            </div>
        </div>
        <CounterWidget 
                count = {count}
                setCount = {setCount}
                stock = {product.stock}
            />
            <div>
                <button className="delete-button" onClick={() => onDelete()}>Borrar</button>
            </div>
            <hr/>
    </div>
  )
}

export default ItemCart