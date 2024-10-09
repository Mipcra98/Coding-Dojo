import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

const Card = ({animal}) => {

    const [likes, setlikes] = useState(0);

    const handleLike = () => {
        // Incrementar Likes en 1
        setlikes(likes+1)
    }

    useEffect(() => {
        console.log('Componente Montado',animal.name)
        return () => {
            console.log('Componente desmontado', animal.name)
        }
    })

    useEffect(() => {
        console.log('componente Actualizado',animal.name)
    },[likes])  //Este efecto se ejecuta una vez que 'LIKES' cambia

    return (
        <div>
            <h2>{animal.name}</h2>
            <p>{animal.description}</p>
            <img src={animal.image} alt={animal.image} />
            <button onClick={handleLike}>Likes ({likes})</button>
        </div>
    )
}

Card.protoTypes = {
    Card: PropTypes.shape({
        name : PropTypes.string.isRequired,
        description:PropTypes.string.isRequired,
        image:PropTypes.string.isRequired
    })
}



export default Card;