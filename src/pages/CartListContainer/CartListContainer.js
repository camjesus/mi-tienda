import './CartListContainer.css'
import { useContext , useState} from "react";
import { cartContext } from "../../context/cartContext";
import ItemCart from '../../components/ItemCart/ItemCart';
import { addDoc, collection, getFirestore, doc, updateDoc, getDoc } from "firebase/firestore";

const CartListContainer = () => {
    const {cart, clear} = useContext(cartContext);
    const [orderId, setOrderId] = useState();
    const db = getFirestore();
    const [visible, setVisible] = useState(false);
    const [buyer, setBuyer] = useState({
        name: '', 
        path: '',
        email: '',
        phone: ''
    });

    const handleInput = (event) => {
        setBuyer({...buyer, [event.target.name] : event.target.value});
    };

    const updateStock = () => {
        cart.map(prod => {
            console.log(prod.idBase);
            const queryDoc = doc(db, "products", prod.idBase);
            getDoc(queryDoc)
            .then((doc) => {
                updateDoc(queryDoc, {stock: doc.data().stock - prod.quantity });
            })
            .catch((err) => console.log(err));
        });
    };

    function gracias(){
        setVisible(false);
      }

    const createOrder = () => {
        const orderCollection = collection(db, 'orders');
        console.log(cart);
        const newOrder = {
            items: cart,
            buyer: buyer,
            total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
        }
        addDoc(orderCollection, newOrder)
        .then(({id}) => {
            setOrderId(id);
            alert("Su orden número: " + id + " fue creada con éxito!");
            updateStock();
        });
        
        clear();
        setVisible(true);
        setTimeout(gracias, 5000);
    };

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });

  return (
    <div>   
    <div className="cart">
        {(cart.length === 0 && !visible) && 
            <h1 className='message'>Todavía no tenes productos en el carrito</h1>}

        {(cart.length === 0 && visible) && 
            <h1 className='message'>Gracias por su compra!</h1>}
    
    {cart.length !== 0 && (
        <>
        <div className='cart-list'>
            {cart.map((item) => <ItemCart key={item.id} product={item} />)}
            <div className='total'>
            <h1 className='total-text'>Total: {formatter.format(cart.reduce((acc, item) => acc + item.price * item.quantity, 0))}</h1>
            </div>
        </div>
        <div className="form-card">
                <h1 className='title'>Datos del comprador</h1>
                <label>
                    Nombre y Apellido
                </label>
                <input type="text" name="name" value={buyer.name} onChange={handleInput}/>

                <label>
                    Dirección
                </label>
                <input type="text" name="path" value={buyer.path} onChange={handleInput}/>

                <label>
                    E-mail
                </label>
                <input type="text" name="email" value={buyer.email} onChange={handleInput}/>
                <label>
                    Teléfono
                </label>
                <input type="text" name="phone" value={buyer.phone} onChange={handleInput}/>

                    <button className="create-button" onClick={() => createOrder()}>Finalizar orden</button>
            </div>
        </>
        )
    }
    </div>
        </div>
  )
}

export default CartListContainer