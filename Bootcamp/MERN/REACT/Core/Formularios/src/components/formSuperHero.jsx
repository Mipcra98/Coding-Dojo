import { useState } from "react";
import estilos from "./formSuperHero.module.css";
import propTypes from "prop-types";

const FormSuperHero = () => {
  const [listaHeroes, setListaHeroes] = useState([]); //se settea la lista de heroes a vacio

  const [nombre, setNombre] = useState(""); //se settean todas las variables de estado a vacio
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [confirsena, setConfirsena] = useState("");
  const [errores, setErrores] = useState("");
  const [enviado, setEnviado] = useState(false);

  const manejarEnvio = (event) => {
    //Validación de datos entrantes antes del envio, para informar error al usuario
    event.preventDefault();

    if (nombre || apellido || correo || contrasena || confirsena) {
        setErrores("Todos los campos son obligatorios");
        if (contrasena < 12 || !contrasena.includes(".")) {
            setErrores(
              "La contraseña debe tener al menos 12 caracteres e incluir al menos un punto"
            );
            return;
          }
          if (contrasena !== confirsena) {
            setErrores("Las contraseñas no coinciden");
            return;
          }
          if (nombre.length <= 3 && isNaN(nombre)) {
            setErrores("El nombre debe tener un mínimo de 4 caracteres");
            return;
          }
          if (apellido.length <= 3 && isNaN(apellido)) {
            setErrores("El apellido debe tener un mínimo de 4 caracteres");
            return;
          }
          if (!correo.includes("@") || correo.length <= 10) {
            setErrores("El correo debe tener un @ y un mínimo de 10 caracteres");
            return;
          }
        return;
      }
      setEnviado(true);
      !nombre||!apellido||!correo||!contrasena||!confirsena ? '':setListaHeroes([...listaHeroes, { nombre, apellido, correo, contrasena }]);
      setNombre("");
      setApellido("");
      setCorreo("");
      setContrasena("");
      setConfirsena("");
      setErrores("");
  };

  return (
    <>
      <form onSubmit={manejarEnvio} className={estilos.formuHero}>
        <h2 className={enviado ? estilos.envioExitoso : ""}>
          {enviado ? `¡Registro exitoso${listaHeroes[listaHeroes.length - 1].nombre ? "de "+listaHeroes[listaHeroes.length - 1].nombre : ""}!` : "Registro de Superhéroes"}
        </h2>
        {errores && <p className={estilos.ListaErrores}>{errores}</p>}
        <label htmlFor="nombre">Nombre: {nombre}</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <label htmlFor="apellido">Apellido: {apellido}</label>
        <input
          type="text"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
        <label htmlFor="correo">Correo: {correo}</label>
        <input
          type="text"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
        <label htmlFor="contrasena">Contraseña: {contrasena}</label>
        <input
          type="password"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
        />
        <label htmlFor="confirsena">Confirma Contraseña: {confirsena}</label>
        <input
          type="password"
          value={confirsena}
          onChange={(e) => setConfirsena(e.target.value)}
        />
        <button type="submit">Crear Superhéroe</button>
      </form>
      {listaHeroes.length <= 0 ? (
        ""
      ) : (
        <>
          <h3 className={estilos.tituloLista}>Lista de Superheroes</h3>
          <table className={estilos.heroList}>
            <thead>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Correo</th>
                <th>Contraseña</th>
            </thead>
            {listaHeroes.map((superHeroe, index) => (
              <tbody key={index}>
                <td>{superHeroe.nombre}</td>
                <td>{superHeroe.apellido}</td>
                <td>{superHeroe.correo}</td>
                <td>{superHeroe.contrasena}</td>
              </tbody>
            ))}
          </table>
        </>
      )}
    </>
  );
};

FormSuperHero.propTypes = {
  nombre: propTypes.string,
  apellido: propTypes.string,
  correo: propTypes.string,
  contrasena: propTypes.string,
  confirsena: propTypes.string,
};

export default FormSuperHero;
