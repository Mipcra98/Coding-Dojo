import propTypes from 'prop-types'
import estilos from './Contenido.module.css'

const Contenido = ({id}) => {
    return (
        <>
            <p className={estilos.contenido}>{id} - Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, beatae facilis fugit quasi maxime distinctio. Natus tempore ab reprehenderit mollitia ducimus soluta, quam explicabo dolorem earum, optio dolore asperiores et!</p>
        </>
    )
}

Contenido.Proptype = {
    id: propTypes.number.isRequired
}

export default Contenido