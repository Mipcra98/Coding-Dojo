import './App.css'
import Secciones from './components/Secciones'

const App = () => {
  const lista = [1, 2, 3, 4, 5, 6, 7]

  return (
    <>
      <h1 className="titulo">Acordeón de Secciones</h1>
      <div className="contenedorSecciones">
        {lista.map((item,index) => {
          return <Secciones key={item} id={index} />
        })}
      </div>
    </>
  )
}

export default App;
