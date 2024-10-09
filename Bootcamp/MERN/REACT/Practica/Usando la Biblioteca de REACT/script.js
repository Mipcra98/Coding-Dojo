class FormularioDeRegistro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            correo: '',
            contraseña: ''
        };
    }

    manejarCambio = (evento) => {
        const { name, value } = evento.target;
        this.setState({
            [name]: value
        });
    }

    manejarEnvio = (evento) => {
        evento.preventDefault();
        console.log('Datos del usuario:', this.state);
    }

    render() {
        return (
            <form onSubmit={this.manejarEnvio}>
                <h2>Registro</h2>
                <div>
                    <label>
                        Nombre:
                        <input
                            type="text"
                            name="nombre"
                            value={this.state.nombre}
                            onChange={this.manejarCambio}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Correo:
                        <input
                            type="email"
                            name="correo"
                            value={this.state.correo}
                            onChange={this.manejarCambio}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Contraseña:
                        <input
                            type="password"
                            name="contraseña"
                            value={this.state.contraseña}
                            onChange={this.manejarCambio}
                            required
                        />
                    </label>
                </div>
                <button type="submit">Enviar</button>
            </form>
        );
    }
}

ReactDOM.render(<FormularioDeRegistro />, document.getElementById('root'));