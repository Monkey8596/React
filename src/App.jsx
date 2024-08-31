import './Styles/App.css'

import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Form from './Components/Form';
import DogFech from './Components/DogFech';
import CatAxios from './Components/CatAxios';

function App() {

  return (
    <>
    {/* <DogFech/>
    <CatAxios/> */}

     <Navbar/>
     <Form/>
     <Home/>
    </>
  );
}

export default App
