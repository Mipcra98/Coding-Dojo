import propTypes from "prop-types";
import BotonFunc from "./BotonFunc";
import estilos from "./Tarjeta.module.css";
import "./Bordes.css";

const Tarjeta = ({ tarjeta, funcion, id }) => {
  const { titulo, contenido, borde } = tarjeta;
  return (
    <>
        <div className={`${estilos.tarjeta} ${borde}`}>
          <div className={estilos.info}>
            <h2>{titulo}</h2>
            <p>{contenido}</p>
          </div>
          <BotonFunc funcion={funcion} id={id} />
        </div>
    </>
  );
};

Tarjeta.propTypes = {
  titulo: propTypes.string,
  contenido: propTypes.string,
  funcion: propTypes.func,
  id: propTypes.number,
};

export default Tarjeta;
