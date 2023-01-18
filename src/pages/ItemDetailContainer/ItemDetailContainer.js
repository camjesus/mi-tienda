import { useParams } from "react-router-dom"
import  ItemDetail  from '../../components/ItemDetail/ItemDetail'
import data from '../../products.json'
import { useEffect, useState } from "react"

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});


    useEffect(() => {
        data.products.forEach(prod => {
            console.log(prod);
            if(prod.id === parseInt(id))
                setProduct(prod);
        });
        
        //setProduct(data.products.filter(((prod) => prod.id === parseInt(id))));
    }, [id])

    return (
        <div>
            <ItemDetail product={product} />
        </div>
    )
}

export default ItemDetailContainer