import { useParams } from "react-router-dom"
import  ItemDetail  from '../../components/ItemDetail/ItemDetail'
import data from '../../products.json'
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from "react"

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState();
    const db = getFirestore();

    const getProduct = () => {
        const queryDoc = doc(db, 'products', id);
        getDoc(queryDoc)
          .then((doc) => {
            setProduct({ idBase: doc.id, ...doc.data() });
          })
          .catch((err) => console.log(err));
      };

    useEffect(() => {
        getProduct();
    }, [id])

    return (
        <div>
             {product && <ItemDetail key={product.title} product={product} />}
        </div>
    )
}

export default ItemDetailContainer