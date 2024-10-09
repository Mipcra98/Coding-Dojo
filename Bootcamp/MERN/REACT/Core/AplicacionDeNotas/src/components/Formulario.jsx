import { useState } from "react";
import propTypes from "prop-types";
import './Formulario.module.css'

const Formulario = ({ lista, setLista }) => {
    const [nota, setNota] = useState("");
    const [prioridad, setPrioridad] = useState("Baja");

    const manejarEnvio = (e) => {
        e.preventDefault();
        if (!nota) {
            alert("Debes ingresar una nota");
        } else {
            setLista([...lista, { nota, prioridad }]);
            setNota("");
        }
    };

    return (
        <form onSubmit={manejarEnvio}>
            <input
                type="text"
                id="nota"
                name="nota"
                value={nota}
                onChange={(e) => setNota(e.target.value)} placeholder="Escribe tu nota"
            />
            <select
                id="prioridad"
                name="prioridad"
                value={prioridad}
                onChange={(e) => setPrioridad(e.target.value)}
            >
                <option value="Baja">Baja</option>
                <option value="Media">Media</option>
                <option value="Alta">Alta</option>
            </select>
            <button type="submit">Agregar Nota</button>
        </form>
    );
};

Formulario.Prototypes = {
    lista: propTypes.array.isRequired,
    setLista: propTypes.func.isRequired,
};

export default Formulario;
