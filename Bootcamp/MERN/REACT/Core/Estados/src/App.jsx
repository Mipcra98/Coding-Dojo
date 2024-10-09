import "./App.css";
import Productos from "./components/productos";

function App() {
  const listaProductos = [
    {
      nombre: "Camisa",
      precio: 50,
      descripcion: "Camisa de algodón",
      enStock: 10,
    },
    {
      nombre: "Pantalon",
      precio: 70,
      descripcion: "Pantalon de mezclilla",
      enStock: 0,
    },
    {
      nombre: "Zapatos",
      precio: 100,
      descripcion: "Zapatos de cuero",
      enStock: 5,
    },
    {
      nombre: "Gorra",
      precio: 30,
      descripcion: "Gorra de lona",
      enStock: 7,
    },
  ];
  
  
  return (
    <>
    <h1 className="titulo">Tech Store - Tu Destino para la mejor tecnología</h1>
    <div className="productList">
      <Productos props={listaProductos[0]} />
      <Productos props={listaProductos[1]} />
      <Productos props={listaProductos[2]} />
      <Productos props={listaProductos[3]} />
    </div>
    </>
  );
}

export default App;
