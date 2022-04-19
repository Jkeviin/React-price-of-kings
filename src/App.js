import './App.css';
import {useState} from 'react'
import Cena from './Cena'

function App() {
  const reyes=[
    {
      nombre:"Atanagildo",
      color:"darkolivegreen",
      precio:178
    },{
      nombre:"Ervigio",
      color:"crimson",
      precio:169
    },{
      nombre:"Ataúlfo",
      color:"peru",
      precio:81
    },{
      nombre:"Leogivildo",
      color:"darkmagenta",
      precio:126
    },{
      nombre:"Recesvinto",
      color:"royalblue",
      precio:141
    },{
      nombre:"Sisebuto",
      color:"teal",
      precio:69
    }
  ]

  const [total, setTotal] = useState(0);
  return (
  <>
    <h1>Total a pagar: {total}€</h1>
    <div className='cajaCentral'>
    {reyes.map((rey,i) => <Cena key={i} nombre={rey.nombre} color={rey.color} precio={rey.precio} setTotal={setTotal}/>)}
    </div>
  </>
  );
}

export default App;
