import './Home.css'
import ItemList from '../../components/ItemList/ItemList.js';
import CartItem from '../../components/CartItem/CartItem.js';
import data from '../../products.json' 
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Home = () => {
	const {type} = useParams();
	const [productos, setProducts] = useState([])
	console.log(type);
    let number = 0;

	useEffect(()=>{
		setProducts(data.products)
		if(type !== undefined)
		{
			console.log('pasa por undi')
			setProducts(data.products.filter(prod => prod.category === type))
		}else{
			setProducts(data.products)
		}
	}, [type])
  return (
    <div>
    	<ItemList products={productos} />
		<CartItem total={number}/>
    </div>
  )
}

export default Home