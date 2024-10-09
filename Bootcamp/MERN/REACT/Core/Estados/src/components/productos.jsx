import propTypes from 'prop-types';
import estilos from './productos.module.css';
import { useState, useEffect } from 'react';
import BotonComprar from './botonComprar';


const Productos = ({props}) => {

    const { nombre, precio, descripcion, enStock, id } = props;
    
    const [cantidad,setCantidad] = useState (enStock)

    // const decrementar = () => {
    //     console.log(cantidad)
    //     setCantidad(cantidad => cantidad -1)
    //     console.log(cantidad)
    // }

    return (
        <>
            <div className={estilos.card} id={id}>
                <h2>{nombre}</h2>
                <p className={estilos.precioProducto}>$ {precio}</p>
                <p className={estilos.descripcionProducto}>{descripcion}</p>
                <p className={cantidad>0 ? estilos.siExisteStock : estilos.noExisteStock}>{cantidad>0 ? `En Stock: ${cantidad}` : "Agotado"}</p>
                {cantidad>0?<BotonComprar setCantidad={setCantidad}/>:<BotonComprar disabled={true}/>}
            </div>
        </>
    )
}

Productos.propTypes = {
    props: propTypes.shape({
        nombre : propTypes.string.isRequired,
        precio: propTypes.number.isRequired,
        descripcion: propTypes.string.isRequired,
        enStock: propTypes.number.isRequired,
    })
}

export default Productos;