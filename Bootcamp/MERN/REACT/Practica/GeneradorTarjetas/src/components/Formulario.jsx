import { useState } from "react";
import propTypes from "prop-types";
import estilos from "./Formulario.module.css";
import "./Bordes.css";

const Formulario = ({ listadoTarjetas, setListadoTarjetas }) => {
  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");
  const [borde, setBorde] = useState("borderSolid");

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (!titulo || !contenido) {
      alert("Complete los campos");
    } else {
      setListadoTarjetas([...listadoTarjetas, { titulo, contenido, borde }]);
      setTitulo("");
      setContenido("");
    //   setBorde("borderSolid");
    }
  };

  return (
    <div className={estilos.formulario}>
      <form onSubmit={manejarEnvio}>
        <div>
          <label htmlFor="titulo">Titulo</label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="contenido">Contenido</label>
          <textarea
            value={contenido}
            onChange={(e) => setContenido(e.target.value)}
          />
        </div>
        <div>
          <div className={borde}>-----Muestra de Borde-----</div>
          <select
            name="bordes"
            id="bordes"
            defaultValue={borde}
            onChange={(e) => setBorde(e.target.value)}
          >
            <option value="borderSolid">Solid</option>
            <option value="borderDotted">Dotted</option>
            <option value="borderDouble">Double</option>
            <option value="borderDashed">Dashed</option>
            <option value="borderGroove">Groove</option>
            <option value="borderRidge">Ridge</option>
            <option value="borderInset">Inset</option>
            <option value="borderOutset">Outset</option>
            <option value="borderNone">None</option>
          </select>
        </div>
        <button type="submit" className="botonEnvio">
          Añadir Tarjeta
        </button>
      </form>
    </div>
  );
};

Formulario.propTypes = {
  titulo: propTypes.string,
  contenido: propTypes.string,
  borde: propTypes.string,
};

export default Formulario;
