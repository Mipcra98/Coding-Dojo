import { useState, useEffect } from "react";

const ListaDeTareas = () => {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);
  const [mensaje, setMensaje] = useState("Esperando entrada");

  const manejarCambio = (evento) => {
    setTarea(evento.target.value);
  };

  const agregarTarea = () => {
    if (tarea.trim() === "") return;

    setTareas((prevTareas) => [...prevTareas, tarea]);

    setTarea("");
  };

  useEffect(() => {
    //useEffect(codeto Execute, dependencias de tipo array)
    console.log("Estado de tareas actualizado:", tareas); // Registro después de la actualización
    setMensaje(`Tarea ${tarea} añadida correctamente`); // Actualizar mensaje después de la actualización
  }, [tareas.length]); // Dependencia de tareas

  return (
    <div>
      <input
        type="text"
        value={tarea}
        onChange={manejarCambio}
        placeholder="Escribe una tarea..."
      />
      <button onClick={agregarTarea}>Agregar Tarea</button>
      <p>{mensaje}</p>
      <ul>
        {tareas.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListaDeTareas;
