import './ItemList.css'
import Item from '../Item/Item'
import { Link } from 'react-router-dom'

const ItemList = ({products}) => {
  return (
    <div className='item-list'>
      {products.map((product) => 
      <Link key={product.id} to={`/product/${product.idBase}`} className='link'>
            <Item item={product}/>
            {console.log(product)}
      </Link>
      )}
      </div>
  )
}

export default ItemList