import './ItemList.css'
import Item from '../Item/Item'
import { Link } from 'react-router-dom'

const ItemList = ({products}) => {
  return (
    <div className='item-list'>
      {products.map((product) => 
      <Link key={product.id} to={`/product/${product.id}`} className='link'>
            <Item item={product}/>
      </Link>
      )}
      </div>
  )
}

export default ItemList