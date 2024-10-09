import "./App.css";
import React, { useState } from "react";
import Formulario from "./components/Formulario";
import ListarNotas from "./components/ListarNotas";

function App() {
  const [listaNotas, setListaNotas] = useState([]);

  return (
    <>
      <div className="container">
        <h1>Notas</h1>
        <Formulario lista={listaNotas} setLista={setListaNotas} />
        <ListarNotas lista={listaNotas} setLista={setListaNotas} />
      </div>
    </>
  );
}

export default App;
