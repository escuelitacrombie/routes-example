import { Link } from 'react-router-dom'

const RouteOne = () => {
    return (<>
        <div>RouteOne</div>
        <Link to="/">Home</Link><br/>
        <Link to="/route-two/">Ruta 2</Link>
    </>
    )
}

export default RouteOne