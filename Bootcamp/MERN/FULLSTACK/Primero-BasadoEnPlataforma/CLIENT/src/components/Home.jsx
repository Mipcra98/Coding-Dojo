import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import homeStyles from "./home.module.css";

const Home = () => {
    const [recetas,setRecetas] = useState([]);

    useEffect(() => {
        const cargarRecetas = async () => {         //Creamos una función asíncrona para cargar las recetas
            try {
                const {data} = await axios.get("api/recetas");
                setRecetas(Array.isArray(data) ? data : []);
            }catch (error) {
                console.error('¡Hubo un error al cargar las recetas!', error);
                setRecetas([]); //Aseguramos que vuelva vacío...
            }
        }

        cargarRecetas();        //Ejecutamos la función asíncrona
    })

    return (
        <div>
            <h1>Colección de Recetas</h1>
            <Link to="/nueva-receta" >Agregar nueva receta</Link>
            <RecipesList recetas={recetas} />
        </div>
    )
}

export default Home;