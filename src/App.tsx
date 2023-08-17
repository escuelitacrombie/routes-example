import './App.css';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function App() {

  const [personajes, setPersonajes] = useState([])
  const [error, setError] = useState("")

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character").then((response) => {
      response.json().then((data) => {
        setPersonajes(data.results);
      });
    })
      .catch((error) => {
        setError(error.message);
      })
  }, [])

  console.log(personajes);
  

  return (
    <div>
      <h1>Homepage</h1>
      <Link to='/route-one'>Ruta 1</Link><br />
      <Link to='/route-two'>Ruta 2</Link>
      <div>
        {
          personajes.map((personaje: any) => (
              <Link key={personaje.id} to={`/personajes/${personaje.id}`}>
                {personaje.name}
              </Link>
      ))
        }
    </div>
    </div >
  );
}

export default App;
