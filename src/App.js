import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer'
import NavBar  from './components/NavBar/NavBar';
import Error from './pages/Error/Error'
import CartListContainer from './pages/CartListContainer/CartListContainer.js';
import CartWidget from './components/CartWidget/CartWidget';

function App() {
  return (
    <div>
      <NavBar />
        <Routes>
          <Route  path='*' element={<Error />}/>
          <Route  path='/' element={<Home />}/>
          <Route  path='/category/:type' element={<Home />}/>
          <Route  path='/product/:id' element={<ItemDetailContainer />}/>
          <Route  path='/cart' element={<CartListContainer />}/>
        </Routes>
        <CartWidget/>
    </div>
  );
}

export default App;
