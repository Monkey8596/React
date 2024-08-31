import Navbar from './Components/Navbar';
import Cart from './Pages/Cart';
import Contact from './Pages/Contact';
import Detail from './Pages/Detail';
import Home from './Pages/Home';
import './Styles/App.css'

import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/detail/:id' element={<Detail/>} />
        <Route path='*' element={<h1>Error 404 - Page not found</h1>} />
      </Routes>
    </>
  );
}

export default App
