
import './App.css';
import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';


function App() {

  const [personajes, setpersonajes] = useState([])

 useEffect(() => {
   fetch('https://rickandmortyapi.com/api/character').then((res)=>
    res.json().then((data) => setpersonajes(data)).catch((error) => {
      console.log(error.message);
    }).finally(() => {console.log(personajes);
    })
    ) 
 }, [])
 
  return (
    <div>
        {
        personajes.length <= 0 
        ? <h1>Cargando...</h1>
        :
        personajes.results?.map((personaje:any, index) => (
          <div key={index}>
           // <Link to={`/personaje/${personaje.id}`}>
              <img src={personaje.image} alt="" />
          //</Link>
          </div>
        ))
      }
    </div>
  );
}

export default App;
