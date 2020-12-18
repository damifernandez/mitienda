import {useState} from 'react';
import NavAndWidgetCart from './components/NavAndWidgetCart';
import FeaturedProducts from './components/FeaturedProducts';


function App() {
  const [nombre, setNombre] = useState('1');

  return (
  <>
      <NavAndWidgetCart />
      <FeaturedProducts />
      <button onClick={() => setNombre('1')}>-</button>
      <p>{nombre}</p>
      <button onClick={() => setNombre({nombre} +'1')}>+</button>
      
  </>
  );
}

export default App;
