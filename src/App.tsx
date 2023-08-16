import "./App.css";

import { Link } from "react-router-dom";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <h1>Homepage</h1>
      <Link to="/ruta">Ruta</Link>
      <Link to="/about">About</Link>
      <Link to="/character">Characters</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}

export default App;
