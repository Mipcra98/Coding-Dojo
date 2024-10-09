import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const articulos = [
    { id: 0, title: "Fuera de Este Mundo", content: "Contenido del articulo 1", imagen: "https://th.bing.com/th/id/OIP.f25cyHRH3VRN7Mi-bQGTWgHaHa?rs=1&pid=ImgDetMain" },
    { id: 1, title: "Pacientes Holográficos", content: "Contenido del articulo 2", imagen: "https://imagenes.eltiempo.com/files/image_1200_600/uploads/2019/12/11/5df177c547cf5.jpeg" },
    { id: 2, title: "Lo Alto del Dinero", content: "Contenido del articulo 3", imagen: "https://th.bing.com/th/id/R.589e02f709c2bb405e1087e8da76be66?rik=hNNEoF58dq1XYw&pid=ImgRaw&r=0" },
    { id: 3, title: "Nada como la Privacidad del Hogar", content: "Contenido del articulo 4", imagen: "https://th.bing.com/th/id/R.6c0392ff875d82e9d06cea20ef5d7982?rik=Hl3cAqUbEn%2fmYw&pid=ImgRaw&r=0" },
    { id: 4, title: "Moverse en la Ciudad", content: "Contenido del articulo 5", imagen: "https://th.bing.com/th/id/OIP.8rjNWj9f5fP3ie9C4-8oTwHaE8?rs=1&pid=ImgDetMain" },
    { id: 5, title: "Diversión de Otro Planeta", content: "Contenido del articulo 6", imagen: "https://th.bing.com/th/id/OIP.3TEfbOz1G-qRLVT83yUDOgHaHa?rs=1&pid=ImgDetMain" },
    { id: 6, title: "Espetáculo de la Galaxia", content: "Contenido del articulo 7", imagen: "https://th.bing.com/th/id/R.2d7270fc0636b687705eac59095a297a?rik=SLH%2bcg4rwel%2fiw&pid=ImgRaw&r=0" },
    { id: 7, title: "Taxistas", content: "Contenido del articulo 8", imagen: "https://th.bing.com/th/id/R.744a6d0f458977ef3df519889c12a56d?rik=t4xFfGYi7hMS%2bg&pid=ImgRaw&r=0" },
]

const Article = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const articulo = articulos[id];

    if (!articulo) {
        return (
            <div className='container'>
                <div>Item no encontrado</div>
                <div className='articleNav'>
                    <Link onClick={() => navigate(-1)} className='btn nav'>Volver</Link>
                    <Link to={`/home`} className='btn home'>Home</Link>
                </div>
            </div>
        )
    }

    return (
        <div className='container'>
            <div className='article'>
                <h2 className='articleTitle'>{articulo.title}</h2>
                <p className='articleContent'>{articulo.content}</p>
                <img src={articulo.imagen} alt={articulo.title} className='articleImg'/>
                <div className='articleNav'>
                    <Link to={`/art/${parseInt(id) - 1}`} className='btn nav'>◄ Anterior</Link>
                    <Link to={`/home`} className='btn home'>Home</Link>
                    <Link to={`/art/${parseInt(id) + 1}`} className='btn nav'>Siguiente ►</Link>
                </div>
            </div>
        </div>
    )
}

export default Article;