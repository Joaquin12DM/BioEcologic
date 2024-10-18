import { Link } from "react-router-dom";
import './Style/Footer.css';
import facebook from './assets/iconFacebook.png';
import instagram from './assets/iconInstagram.png';
import whatsapp from './assets/iconWhatsapp.png';
import React from 'react';
import footer from './assets/footer-img.png';

export const Footer = () => {
    return (
        <>
            <section className="footer">
                <div className="img-footer">
                    <img src={footer} alt="" />
                </div>
                <div className="textFo">
                    <p>Siéntase libre de contactar con nosotros</p>
                </div>
                <div className="Container-footer">
                    <nav className="paginas">
                        <ul className="lista2">
                            <li>
                                <a href="#" target="_blank" className="redes" aria-label="Facebook">
                                    <img src={facebook} alt="Facebook" />
                                </a>
                                <a href="#" target="_blank" className="redes" aria-label="Instagram">
                                    <img src={instagram} alt="Instagram" />
                                </a>
                                <a href="#" target="_blank" className="redes" aria-label="Instagram">
                                    <img src={whatsapp} alt="Instagram" />
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <nav className="paginas">
                        <ul className="lista">
                            <li>
                                <Link className="pag" to="/Terminos&Condiciones">
                                    Términos & Condiciones
                                </Link>
                            </li>
                            <li>
                                <Link className="pag" to="/PreguntasFrecuentes">
                                    Preguntas Frecuentes
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
            <div className='derechos'>
                <p>Copyright © 2024. All rights reserved Bioecologic EcoPack</p>
            </div>
        </>
    );
};