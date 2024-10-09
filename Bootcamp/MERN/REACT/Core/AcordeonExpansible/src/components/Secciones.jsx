import { useState } from "react"
import propTypes from "prop-types"
import Contenido from "./Contenido"
import estilos from "./Secciones.module.css"

const Secciones = ({id}) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div onClick={() => setIsOpen(!isOpen)} className={estilos.seccion}>
                <p>Sección {id+1}</p>
                {isOpen && <Contenido id={id+1}/>}
            </div>
        </>
    )
}

Secciones.prototype = {
    key: propTypes.number.isRequired
}

export default Secciones