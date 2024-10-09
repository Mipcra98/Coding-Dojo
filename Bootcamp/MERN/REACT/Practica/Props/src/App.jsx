import "./App.css";
import Productos from "./components/productos";

function App() {
  const listaProductos = [
    {
      nombre: "Camisa",
      precio: 50,
      descripcion: "Camisa de algodón",
      enStock: true,
    },
    {
      nombre: "Pantalon",
      precio: 70,
      descripcion: "Pantalon de mezclilla",
      enStock: false,
    },
    {
      nombre: "Zapatos",
      precio: 100,
      descripcion: "Zapatos de cuero",
      enStock: true,
    },
    {
      nombre: "Gorra",
      precio: 30,
      descripcion: "Gorra de lona",
      enStock: false,
    },
  ];
  
  
  return (
    <>
      <Productos props={listaProductos[0]} />
      <Productos props={listaProductos[1]} />
      <Productos props={listaProductos[2]} />
      <Productos props={listaProductos[3]} />
    </>
  );
}

export default App;
