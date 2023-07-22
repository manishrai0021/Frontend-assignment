import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Search from './pages/Search';
import NavBar from './components/NavBar';
import Products from './components/Products';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/product' exact element={<ProductDetails/>}/>
      <Route path='/products' exact element={<Products/>}/>
      <Route path='/search' exact element={<Search/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
