import React, { useState, useEffect } from 'react';

const MiComponente = () => {
    const [datos, setDatos] = useState(null);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        fetchData()
            .then(response => {       //Con el then podemos hacer lo que queramos despues de que se resuelva la promesa
                setDatos(response);
                setCargando(false);
            })
            .catch(error => {         //con el catch podemos capturar el error y en este caso mostrarla en la consola
                console.error('Error al obtener datos:', error);
                setCargando(false);
            });
    }, []);

    const fetchData = () => {
        return new Promise((resolve, reject) => {
            // Simulación de una solicitud a una API
            setTimeout(() => {
                const exito = Math.random() > 0.5 ? true : false; // Simulación de éxito o falla
                if (exito) {
                    console.log('Datos obtenidos correctamente')
                    resolve('Datos obtenidos correctamente');
                } else {
                    console.log('Error al obtener datos')
                    reject('Error al obtener datos');
                }
            }, Math.random() * 5000); // Simulación de una solicitud que tarda un tiempo aleatorio máximo de 5 segundos
        });
    };

    if (cargando) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            {
                datos ? (<h1>Datos obtenidos:</h1>,
                <p>{datos}</p>) : <h2>No hay datos</h2>
            }
        </div>
    );
};

export default MiComponente;