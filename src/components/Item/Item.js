
import './Item.css'

const Item  = ({item}) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });
    return(
        <div className="card">
            <img src={`/img/${item.image}.jpg`} className="img-item" alt={item.title} />
            <div className="item-text">
                <p className="item-title">{item.title}</p>
                <p className="item-price">{formatter.format(item.price)}</p>
            </div>
        </div>
    )
}

export default Item;