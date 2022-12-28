
import logo from "../logo-linea-negro.png";

const Item  = ({item}) => {
    
    console.log(item);
    return(
        <div className="card">
            <img src={logo} className="img-item" alt="item" />
            <div class="item-text">
                <h4><b>{item.name}</b></h4>
                <p>${item.price }</p>
            </div>
        </div>
    )
}

export default Item;