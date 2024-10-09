import propTypes from 'prop-types';

const styles = {
    padding: '10px',
    backgroundColor: '#fa5656',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    boxShadow: 'inset 0 0 10px #000000'
}

const BotonFunc = ({funcion,id}) => {
    return (
        <button onClick={() => funcion(id)} style={styles}>Borrar</button>
    )
}

BotonFunc.propTypes = {
    funcion: propTypes.func.isRequired,
    id: propTypes.number.isRequired
}

export default BotonFunc;