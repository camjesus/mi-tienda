import './ItemDetail.css'
import logo from "../../logo-linea-negro.png";
import CounterWidget from '../CounterWidget/CounterWidget'

const ItemDetail = ({product}) => {
    console.log("itemdetalis" + product)
    
  return (
    <div className='detail-item'>
        <div className='img-detail'>
            <img src={logo} alt="Image product" width={400} height={400} />
        </div>
        <div className='detail-text'>
            <h1>{product.title}</h1>
            <h2>${product.price}</h2>
            <ul>
                {/*product.size.map(size => 
                <li>{size}</li>
                )*/}
            </ul>
            <p>{product.description}</p>
            <CounterWidget />
        </div>
    </div>
        
  )
}

export default ItemDetail