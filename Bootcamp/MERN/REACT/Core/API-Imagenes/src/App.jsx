import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {
  const [cargando,setCargando] = useState(false)
  const [respuesta,setRespuesta] = useState(null)
  const [error,setError] = useState(null)

  useEffect(() => {
    buscarImagen();
  }, []);

  // useEffect(()=>{     //Se cargará una vez al iniciar la app
  //   buscarImagen();
  //   // const intervalo = setInterval(() => {     //Se ejecutará cada 30 segundos la función de buscar otra imágen
  //   //   buscarImagen()
  //   // }, 30000);

  //   // return () => clearInterval(intervalo)   //Se ejecutará al cerrar la app

  // },[])

  const buscarImagen = async ()=>{      //Función para buscar una imágen aleatoria basada en la API con AXIOS
    setCargando(true)
    try {
      const consultaHTTP = await axios.get('https://api.unsplash.com/photos/random',{headers:{"Authorization":"Client-ID YOUR-UNSPLASH-API-KEY"}})//rxnqxM42Y0JPZwtpVD-i6eZepKfT5OKioPbIC9FhTtU
      setRespuesta(consultaHTTP.data)
      setError('')
    } catch (error) {
      setError('Se produjo un error:',error.message)
    }finally{
      setCargando(false)
    }
  }

  return (
    <>
    <div className='Container'>
      <h1 className='Titulo'>Imágenes aleatorias en Unsplash</h1>
      {
        cargando ? <p>Cargando...</p> : error ? (<p>Se produjo un error en la búsqueda</p>) : (<img src={respuesta?.urls.raw+"&fm=jpg&fit=crop&w=1080&h=500&q=80"} alt={respuesta?.alternative_slugs.es} className='Imagen'/>)
      }
      <button className='BotonBuscar' disabled={cargando} onClick={buscarImagen}>{cargando ? 'Cargando...' : 'Buscar una imágen'}</button>
      </div>
    </>
  )
}

export default App
