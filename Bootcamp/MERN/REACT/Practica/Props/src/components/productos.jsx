import propTypes from 'prop-types';
import estilos from './productos.module.css'


const Productos = ({props}) => {

    return (
        <>
            <div className={estilos.card}>
                <h2>{props?.nombre}</h2>
                <p className={estilos.precioProducto}>$ {props?.precio}</p>
                <p className={estilos.descripcionProducto}>{props?.descripcion}</p>
                <p className={props?.enStock ? estilos.siExisteStock : estilos.noExisteStock}>{props?.enStock ? "En Stock" : "Agotado"}</p>
            </div>
        </>
    )
}

Productos.propTypes = {
    props: propTypes.shape({
        nombre : propTypes.string.isRequired,
        precio: propTypes.number.isRequired,
        descripcion: propTypes.string.isRequired,
        enStock: propTypes.bool.isRequired
    })
}

export default Productos;