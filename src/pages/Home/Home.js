import './Home.css'
import ItemList from '../../components/ItemList/ItemList.js';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
	getFirestore,
	getDocs,
	collection,
	query,
	where,
  } from 'firebase/firestore';

const Home = () => {
	const {type} = useParams();
	const [products, setProducts] = useState([]);
	const db = getFirestore();
	const queryBase = collection(db, 'products');
	const querySnapshot = type ? query(queryBase, where('category', '==', type)) : queryBase;

	const getProducts = () => {
		getDocs(querySnapshot).then((response) => {
		  const data = response.docs.map((product) => {
			console.log(product.data());
			return { idBase: product.id, ...product.data() };
		  });
		  setProducts(data);
		});
	  };
	  useEffect(() => {
		getProducts();
	  }, [type]);
  return (
    <div>
    	<ItemList products={products} />
    </div>
  )
}

export default Home