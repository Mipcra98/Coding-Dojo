edadUsuario = 19;

function puedeObtenerLicencia(edad){
    if (edad>17){
        console.log('¡Listo para obtener la licencia de  conducir!')
    }else{
        console.log('Disculpa, debes esperar más años para conseguir tu licencia')
    }
}

puedeObtenerLicencia(edadUsuario)