import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='container'>
            <h1 className='title'>404</h1>
            <h2 className='subtitle'>Página no encontrada</h2>
            <img src="https://media.tenor.com/7XZ6v8t6n1wAAAAC/404.gif" alt="404" />
            <div className='notFoundNav'>
                <Link to={`/home`} className='btn home'>Home</Link>
            </div>
        </div>
    )
}

export default NotFound