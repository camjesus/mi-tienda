import logo from "../../logo-linea-negro.png";
import './Item.css'

const Item  = ({item}) => {
    return(
        <div className="card">
            <img src={logo} className="img-item" alt="Image item" />
            <div className="item-text">
                <p className="item-title">{item.title}</p>
                <p className="item-price">${item.price}</p>
            </div>
        </div>
    )
}

export default Item;