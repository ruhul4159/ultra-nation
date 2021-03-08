import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Country from './Components/Country/Country';
import Cart from './Components/Cart/Cart';
import playerData from './Components/FakeData/faceData.json';

function App() {
const [ countries, setCountries] = useState([]);
const [cart, setCart]= useState([]);
const [player, setPlayer]= useState([]);
useEffect(() =>{
  setPlayer(playerData);
  console.log(playerData);
}, [])
  
  useEffect(() => {
    fetch('https://api.mocki.io/v1/42ed98b8')
    .then(res => res.json())
    .then(data=>setCountries(data))
    .catch(error => console.log(error))
  }, [])

  const handleAddCountry = (country) => {
   const newCart = [...cart, country];
   setCart(newCart);
  }

  return (
    <div className="App">
      <h2>Players : {countries.length}</h2>
      <h4>Players added: {cart.length}</h4>
      <Cart cart={cart}></Cart>
        {
        countries.map(country => <Country country={country} handleAddCountry={handleAddCountry} key={country.alpha3Code}></Country>)
        }
      
     
    </div>
  );
}

export default App;
