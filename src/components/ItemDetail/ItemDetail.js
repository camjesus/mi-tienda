import './ItemDetail.css'
import CounterWidget from '../CounterWidget/CounterWidget'
import { useContext, useState } from 'react';
import { cartContext } from '../../context/cartContext';

const ItemDetail = ({product}) => {
    console.log("itemdetalis" + product)
    const {addItem} = useContext(cartContext);
    const [count, setCount] = useState(0);
    const onAdd = () => {
        addItem(product, count);
    };

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });

  return (
    <div className='detail-item'>
        <div className='img-detail'>
            <img className='img-prod' src={`/img/${product.image}.jpg`} alt="Image product" width={400} height={400} />
        </div>
        <div className='detail-text'>
            <h1>{product.title}</h1>
            <h2>{formatter.format(product.price)}</h2>
            <p>{product.description}</p>
            <CounterWidget 
                count = {count}
                setCount = {setCount}
                stock = {product.stock}
            />
             <button className="add-button" onClick={() => onAdd()}>Agregar al carrito</button>
        </div>
    </div>
        
  )
}

export default ItemDetail