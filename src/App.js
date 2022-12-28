import './App.css';
import NavBar  from './components/NavBar';
import Cart from './components/Cart'; 
import Item from './components/Item';

function App() {
  const item = {
    name: "Remera prueba",
    price: 2000
  }
  let number = 0;
  return (
    <body>
      <div className="App">
      <NavBar/>
    </div>
    <div className='item-list'>
    <Item item={item} />
    </div>
    <Cart total={number}/>
    </body>
  );
}

export default App;
