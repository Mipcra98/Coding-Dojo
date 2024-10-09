import React from 'react';
import { useParams,useNavigate } from 'react-router-dom';


const datosRecetas = {
  'spaghetti-carbonara': {
    nombre: 'Spaghetti Carbonara',
    ingredientes: ['Espaguetis', 'Huevos', 'Panceta', 'Queso Parmesano', 'Pimienta Negra'],
    instrucciones: [
      'Hervir los espaguetis.',
      'Cocinar el tocino en un sartén.',
      'Mezclar los huevos y el queso en un bol.',
      'Combinar todo y sazonar con pimienta negra.',
    ],
    imagen: 'https://i.gifer.com/B5SJ.gif',
  },
  'pollo-curry': {
    nombre: 'Curry de Pollo',
    ingredientes: ['Pollo', 'Curry en Polvo', 'Leche de Coco', 'Cebollas', 'Ajo', 'Jengibre'],
    instrucciones: [
      'Sofreír cebollas, ajo y jengibre.',
      'Añadir el pollo y el curry en polvo.',
      'Verter la leche de coco y dejar hervir a fuego lento.',
    ],
    imagen: 'https://i.gifer.com/BScW.gif',
  },
  'ensalada-vegana': {
    nombre: 'Ensalada Vegana',
    ingredientes: ['Lechuga', 'Tomates', 'Pepinos', 'Aguacate', 'Aceite de Oliva', 'Jugo de Limón'],
    instrucciones: [
      'Picar todas las verduras.',
      'Mezclar en un bol.',
      'Aliñar con aceite de oliva y jugo de limón.',
    ],
    imagen: 'https://i.gifer.com/3Uv.gif',
  },
};

const Receta = () => {
    const navigate = useNavigate();

  const { nombreReceta } = useParams();
  const receta = datosRecetas[nombreReceta];

  if (!receta) {
    return <div>Receta no encontrada</div>;
  }

  return (
    <div className="receta-contenedor">
      <h1>{receta.nombre}</h1>
      <img src={receta.imagen} alt={receta.nombre} className="receta-imagen" />
      <h2>Ingredientes</h2>
      <ul>
        {receta.ingredientes.map((ingrediente, indice) => (
          <li key={indice}>{ingrediente}</li>
        ))}
      </ul>
      <h2>Instrucciones</h2>
      <ol>
        {receta.instrucciones.map((instruccion, indice) => (
          <li key={indice}>{instruccion}</li>
        ))}
      </ol>
      <button onClick={()=> navigate(-1)} className='back-btn'>Volver</button>
    </div>
  );
};

export default Receta;