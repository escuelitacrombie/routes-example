import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export const Nada = () => {

    const { id } = useParams();

    const [personajes, setpersonajes] = useState('')

    useEffect(() => {
      fetch(`https://rickandmortyapi.com/api/character/${id}`).then((res)=>
       res.json().then((data) => setpersonajes(data)).catch((error) => {
         console.log(error.message);
       }).finally(() => {console.log(personajes);
       })
       ) 
    }, [])

  return (
    <div>
    {personajes == ''
    ?
    <div>cargando</div>
    :
    <div>
        <h1>{personajes.name}</h1>
        <h3>{personajes.gender}</h3>
        <h3>{personajes.species}</h3>
        <img src={personajes.image} alt="" />
        <br></br>
        <Link to="/personajes">Volver</Link>
    </div>
    }
    </div>
  )
}
