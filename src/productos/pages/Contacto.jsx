import React from 'react';
import '../styles/Contacto.css';
import contacto from './assets/img/contacto.jpg';

export const Contacto = () => {
    return (
        <div className='contacto-container'>
            <div className='text-img'>
                <h1>¿Tienes alguna pregunta?</h1>
                <img src={contacto} alt="" />
            </div>
            <form className='contacto-form'>
                <div className='form-group'>
                    <label htmlFor='nombre'>Nombre</label>
                    <input type='text' id='nombre' name='nombre' required />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Correo Electrónico</label>
                    <input type='email' id='email' name='email' required />
                </div>
                <div className='form-group'>
                    <label htmlFor='asunto'>Asunto</label>
                    <input type='text' id='asunto' name='asunto' required />
                </div>
                <div className='form-group'>
                    <label htmlFor='mensaje'>Mensaje</label>
                    <textarea id='mensaje' name='mensaje' rows='5' required></textarea>
                </div>
                <button type='submit' className='Botton'>Enviar mensaje</button>
            </form>
        </div>
    );
};