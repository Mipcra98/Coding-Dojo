import React from "react";
import { Link } from "react-router-dom";

const articulos = [
    { id: 0, title: "Fuera de Este Mundo" },
    { id: 1, title: "Pacientes Holográficos" },
    { id: 2, title: "Lo Alto del Dinero" },
    { id: 3, title: "Nada como la Privacidad del Hogar" },
    { id: 4, title: "Moverse en la Ciudad" },
    { id: 5, title: "Diversión de Otro Planeta" },
    { id: 6, title: "Espetáculo de la Galaxia" },
    { id: 7, title: "Taxistas" }
]

const Home = () => {
    return (
        <div className="container">
            <h1 className="title">Bienvenido a la Galería de Arte Futurista</h1>
            <ul className="mapList">
                {articulos.map((articulo) => {
                    return (<li key={articulo.id} className="mapItem">
                        <Link to={`/art/${articulo.id}`} className="mapItemLink">{articulo.title}</Link>
                    </li>)
                })}
            </ul>
        </div>
    )
}

export default Home;