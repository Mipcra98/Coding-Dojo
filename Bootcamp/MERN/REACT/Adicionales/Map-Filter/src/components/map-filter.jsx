import { useState } from "react";

const MapFilter = () => {
  const listaOriginal = [
    "Cebollitas",
    "Tomillo",
    "Champiñones cremini",
    "Mantequilla",
  ];

  const [listaDeCompras, setListaDeCompras] = useState(listaOriginal);
  const [letraDeFiltro, setLetraDeFiltro] = useState('')

  const manejarFiltro = () => {
    const listaFiltrada = listaDeCompras.filter((producto) =>
      producto.startsWith(letraDeFiltro.toUpperCase())
    );
    setListaDeCompras(listaFiltrada);
  };

  const deshacerFiltro = () => {
    setListaDeCompras(listaOriginal);
    setLetraDeFiltro("");
  };

  return (
    <>
      <input
        type="text"
        value={letraDeFiltro}
        onChange={(e) => setLetraDeFiltro(e.target.value)}
        placeholder="Ingresa una letra para filtrar"
      />
      <button onClick={manejarFiltro}>Aplicar Filtro</button>
      <button onClick={deshacerFiltro}>Deshacer Filtro</button>
      <ul>
        {listaDeCompras.map((item,index) => {
            return <li key={index}>{item}</li>
        })}
      </ul>
    </>
  );
};

export default MapFilter;
