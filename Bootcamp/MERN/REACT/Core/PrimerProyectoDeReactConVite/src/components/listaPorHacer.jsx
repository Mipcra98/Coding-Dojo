const ListaPorHacer = () => {
    const estiloDiv = {
        'width':'60%',
        'margin':'0 auto',
    }
    const estiloTitulo = {
        'color': '#16a085',
        'font-size':'2.5rem'
    }
    const estiloLista = {
        'list-style':'none',
        'color':'#2c3e50',
        'padding': '0px'
    }
    const estiloListaItem = {
        'font-size':'1.5em',
        'font-weight':'600'
    }
    return (
        <div style={estiloDiv}>
            <h2 style={estiloTitulo}>Lista de cosas por hacer:</h2>
            <ul style={estiloLista}>
                <li style={estiloListaItem}>Aprender React</li>
                <li style={estiloListaItem}>Practicar con Vite</li>
                <li style={estiloListaItem}>Construir proyectos increíbles</li>
            </ul>
        </div>
    )
}

export default ListaPorHacer;