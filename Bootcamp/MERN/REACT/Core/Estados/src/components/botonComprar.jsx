import estilos from './botonComprar.module.css';


const BotonComprar = ({setCantidad,disabled=false}) => {

    return (
        <>
            <button className={estilos.btnComprar} onClick={()=>setCantidad(cantidad => cantidad -1)} disabled={disabled}>Comprar</button>
        </>
    )
}
export default BotonComprar;