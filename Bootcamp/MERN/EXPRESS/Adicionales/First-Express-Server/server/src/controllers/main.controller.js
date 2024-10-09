
const paginaMain = (req, res) => {
    res.send("Hola desde el servidor");
}

const paginaAbout = (req, res) => {
    res.send("Hola desde el /ABOUT");
}

export default { paginaMain, paginaAbout };