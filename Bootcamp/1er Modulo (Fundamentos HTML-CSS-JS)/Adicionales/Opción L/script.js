const number = () => {
    alert('Call us at 555-5555')
}

document.querySelectorAll('.poke-ingredients').forEach((item) => {
    item.addEventListener('mouseover', () => {
        item.style.background = '#5f99ea';
        mostrar(item.id)
    })
})

document.querySelectorAll('.poke-ingredients').forEach((item) => {
    item.addEventListener('mouseout', () => {
        item.style.background = 'transparent';
        ocultar();
    })
})

const ocultar =() => {
    document.querySelector('.protein').style.visibility= 'hidden';
    document.querySelector('.base').style.visibility= 'hidden';
    document.querySelector('.marinade').style.visibility= 'hidden';
}

function mostrar(id) {
    if (id == 'protein') {
        document.querySelector('.protein').style.visibility= 'visible';
    } else if (id == 'base') {
        document.querySelector('.base').style.visibility= 'visible';
    } else if (id == 'marinade') {
        document.querySelector('.marinade').style.visibility= 'visible';
    }
}

const reproducir = () => {
    let audio = new Audio('./media/poke.mp3');
    audio.play();
}