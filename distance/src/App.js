import Distance from './Components/distance'
import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [zipcode, setZipcode] = useState({
    zipcode1: "11230",
    zipcode2: "35004"
  }) ; 

  function updateZipcode1(event){
    setZipcode((prev)=>({...prev, zipcode1: event.target.value}))
  }
  
  function updateZipcode2(event){
    setZipcode((prev)=>({...prev, zipcode2: event.target.value}))
  }
  
  return (
    <div className='form'>
      <Distance  zip1 ={zipcode.zipcode1} zip2={zipcode.zipcode2}/>
      <input type = "text" placeholder="Zipcode1" onChange={updateZipcode1}></input>
      <br></br>
      <input type = "text" placeholder="Zipcode2" onChange={updateZipcode2}></input>
    </div>
  );
}

export default App;
