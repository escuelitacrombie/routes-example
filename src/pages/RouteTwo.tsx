import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from "react"
const RouteTwo = () => {

    const params = useParams()
    const [personaje, setPersonaje] = useState({})
    const [error, setError] = useState("")

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${params.id}`).then((response) => {
            response.json()
            .then((data) => {
                setPersonaje(data);
            });
        })
            .catch((error) => {
                setError(error.message);
                console.log(error);
            })
    }, [params])

    console.log(personaje);
    

    return (
        <>
            <Link to="/">Volver</Link>
            <h2>{personaje.name}</h2>
            <p>{personaje.species}</p>
            <p>{personaje.status}</p>
        </>
    )
}

export default RouteTwo