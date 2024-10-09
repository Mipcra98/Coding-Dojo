//Botón de mover Imagen a la Izquierda
document.querySelector('.left-btn').addEventListener('click', function(){   //Detectamos la pulsación del botón de la izquierda
    let actualID = parseInt(document.querySelector('.banner-select span[selected]').getAttribute('id'))   //Guardamos el id del div "seleccionado" en una variable
    if (actualID -1 == 0){   //Si el id es es menor a cero, regresar al banner de id 3
        document.querySelector('.banner-select span[selected]').removeAttribute('selected')   //Quitamos el atributo "selected" del div actual
        document.querySelector('.banner-select span[id="3"]').setAttribute('selected', '')   //Agregamos el atributo "selected" al div de id 4
        nextBanner(2)
    } else {   //Si el id es mayor a cero, regresar al banner de id anterior
        actualID -= 1;
        document.querySelector('.banner-select span[selected]').removeAttribute('selected')   //Quitamos el atributo "selected" del div actual
        document.querySelector('.banner-select span[id="'+(actualID)+'"]').setAttribute('selected', '')   //Agregamos el atributo "selected" al div de id anterior
        nextBanner(actualID - 1)
    }
})

//Botón para mover la imágen a la derecha
document.querySelector('.right-btn').addEventListener('click', function(){   //Detectamos la pulsación del botón de la izquierda
    let actualID = parseInt(document.querySelector('.banner-select span[selected]').getAttribute('id'))   //Guardamos el id del div "seleccionado" en una variable
    if (actualID +1 > 3){   //Si el id es es mayor a tres, avanzamos al banner de id 1
        document.querySelector('.banner-select span[selected]').removeAttribute('selected')   //Quitamos el atributo "selected" del div actual
        document.querySelector('.banner-select span[id="1"]').setAttribute('selected', '')   //Agregamos el atributo "selected" al div de id 0
        nextBanner(0)
    } else {   //Si el id es menor o igual a tres, avanzamos al banner siguiente
        actualID += 1;
        document.querySelector('.banner-select span[selected]').removeAttribute('selected')   //Quitamos el atributo "selected" del div actual
        document.querySelector('.banner-select span[id="'+(actualID)+'"]').setAttribute('selected', '')   //Agregamos el atributo "selected" al div de id siguiente
        nextBanner(actualID - 1)
    }
})

function nextBanner(bannerID){
    let bannerList= {
        0 : ['./images/cafe-neko.png','Cafe Neko'],
        1 : ['./images/stonepunk.png','Stonepunk'],
        2 : ['./images/pixel-ninjas-2.png','Pixel Ninjas 2']
    }
    document.querySelector('.banner-img').setAttribute('src',bannerList[bannerID][0])
    document.querySelector('.banner-img').setAttribute('alt',bannerList[bannerID][1])
}

document.querySelectorAll('.buy-game').forEach((boton) => {
    boton.addEventListener('click', () => {
        let valor = parseInt(document.querySelector('.cart-count').textContent)
        document.querySelector('.cart-count').textContent = valor + 1
    })
})

document.querySelector('#linux').addEventListener('click', () => {
    alert('Este juego tiene soporte para Linux')
})