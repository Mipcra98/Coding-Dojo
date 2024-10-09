import "./App.css";
import Formulario from "./components/Formulario";
import Tarjeta from "./components/Tarjeta";
import { useState } from "react";

function App() {
  const [listadoTarjetas, setListadoTarjetas] = useState([]);

  const borrarTarjeta = (id) => {
    const nuevoListado = listadoTarjetas.filter(
      (tarjeta, index) => index !== id
    );
    setListadoTarjetas(nuevoListado);
  };

  return (
    <>
      <div className="container">
        <Formulario
          listadoTarjetas={listadoTarjetas}
          setListadoTarjetas={setListadoTarjetas}
        />
        <div className="tarjetas">
          {listadoTarjetas?.map((tarjeta, index) => {
            return (
              <Tarjeta
                key={index}
                tarjeta={tarjeta}
                funcion={borrarTarjeta}
                id={index}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
