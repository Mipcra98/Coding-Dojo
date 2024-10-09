import { useState, useEffect } from "react";
import estilos from './ListarNotas.module.css'

const ListarNotas = ({ lista, setLista }) => {
    const [mostrar, setMostrar] = useState("Todas");
    const [filtrado, setFiltrado] = useState(lista);

    useEffect(() => {
        setFiltrado(lista);
        setMostrar("Todas");
    }, [lista]);

    return (
        <>
            <div className={estilos.Listado}>
                <select
                    name="listar"
                    id="listar"
                    value={mostrar}
                    onChange={(e) => (
                        setMostrar(e.target.value),
                        e.target.value === "Todas"
                            ? setFiltrado(lista)
                            : setFiltrado(
                                lista.filter((nota) => nota.prioridad === e.target.value)
                            )
                    )}
                >
                    <option value="Todas">Todas</option>
                    <option value="Baja">Baja</option>
                    <option value="Media">Media</option>
                    <option value="Alta">Alta</option>
                </select>
                <ul>
                    {filtrado.map((nota, index) => {
                        return (
                            <li key={index} className="nota">
                                <p>{nota.nota} - {nota.prioridad}</p>
                                <button
                                    onClick={() =>
                                        setLista(lista.filter((item) => item !== nota), setFiltrado(filtrado.filter((item) => item !== nota)))
                                    }
                                >
                                    Eliminar
                                </button>
                            </li>)
                    })}
                </ul>
            </div>
        </>
    );
};

export default ListarNotas;
