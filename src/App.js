import './App.css';
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer'
import NavBar  from './components/NavBar/NavBar';
import Error from './pages/Error/Error'

function App() {
  return (
    <div>
      <NavBar />
        <Routes>
          <Route  path='*' element={<Error />}/>
          <Route  path='/' element={<Home />}/>
          <Route  path='/category/:type' element={<Home />}/>
          <Route  path='/product/:id' element={<ItemDetailContainer />}/>
        </Routes>
    </div>
  );
}

export default App;
