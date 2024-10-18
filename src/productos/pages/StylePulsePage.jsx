
import banner1 from './assets/img/banner1.jpg';
import banner2 from './assets/img/banner2.jpg';
import agua from './assets/img/agua.png';
import tierra from './assets/img/tierra.png';
import aire from './assets/img/aire.png';
import icon1 from './assets/img/icon1.png';
import icon2 from './assets/img/icon2.png';
import icon3 from './assets/img/icon3.png';
import icon4 from './assets/img/icon4.png';
import correo from './assets/img/correo.jpg';

import '../styles/StylePulsePage.css';

export const StylePulsePage = () => {

    return (
        <>
            <div className="slider fade-in">
                <div className="slider-inner">
                    <img src={banner1} alt="ofertas1" />
                </div>
                <section className='TextBanner'>
                    <h2>!Opta por lo natural, elige lo biodegradable</h2>
                    <p>Descubre nuestras cajas biodegradables diseñadas para cuidar el medio ambiente <br /> mientras proteges tus productos. <br /> Sostenibilidad y calidad en cada empaque. 🌱♻️</p>
                </section>
            </div>

            <article className='Categoria fade-in'>
                <h2>SITUACION ACTUAL DEL <br /> USO EXCESIVO DE <br /> PLASTICOS</h2>
                <p>El uso de plásticos, especialmente de un solo uso, está generando una grave <br /> crisis ambiental debido a su lenta descomposición y contaminación global. <br /> Aunque hay esfuerzos por reducir su impacto, la producción sigue siendo <br /> alta, lo que hace urgente optar por alternativas sostenibles.</p>
            </article>

            <section className='Container-Ca fade-in'>
                <article className='Categorias-mo'>
                    <div>
                        <img src={agua} alt="" />
                        <h2 className='nombre-cate'>Contaminación del suelo</h2>
                        <p> Al degradarse lentamente, los <br /> microplásticos se filtran en la <br /> tierra, afectando la calidad del <br /> suelo y la vida terrestre.</p>
                    </div>
                </article>
                <article className='Categorias-mo'>
                    <div>
                        <img src={tierra} alt="" />
                        <h2 className='nombre-cate'>Contaminación del agua</h2>
                        <p>Los plásticos, al acumularse en <br /> ríos, mares y océanos, dañan <br /> ecosistemas acuáticos y afectan la <br /> fauna marina que los ingiere.</p>
                    </div>
                </article>
                <article className='Categorias-mo'>
                    <div>
                        <img src={aire} alt="" />
                        <h2 className='nombre-cate'>Contaminación del air</h2>
                        <p>Durante su producción y cuando <br /> se incineran, los plásticos liberan<br /> gases tóxicos, como dioxinas y <br /> furanos, que contribuyen al cambio <br />  climático y afectan la salud humana.</p>
                    </div>
                </article>
            </section>

            <div className='Container-dat1 fade-in'>
                <h2>LO QUE OFRECEMOS PARA MEJORAR LA SITUACION</h2>
            </div>
            <section className='Container-det fade-in'>
                <div className='Container-dat2'>
                    <img src={banner2} alt="" />
                </div>
                <div className='Container-dat3'>
                    <article>
                        <img src={icon2} alt="" />
                        <h3>Alta calidad</h3>
                        <p>Resistentes y funcionales, ofrecen la misma durabilidad que los empaques tradicionales, pero sin dañar el medio ambiente.</p>
                    </article>
                    <article>
                        <img src={icon4} alt="" />
                        <h3>Compostables</h3>
                        <p>Se descomponen de forma natural, convirtiéndose en nutrientes para el suelo sin dejar residuos tóxicos.</p>
                    </article>
                    <article>
                        <img src={icon1} alt="" />
                        <h3>Sostenibles</h3>
                        <p>Fabricados a partir de materiales renovables, contribuyen a la reducción del uso de plásticos convencionales.</p>
                    </article>
                    <article>
                        <img src={icon3} alt="" />
                        <h3>Seguros para alimentos</h3>
                        <p>Aprobados para el contacto con alimentos, garantizando la seguridad y la frescura de los productos envasados.</p>
                    </article>
                </div>
            </section>

            <section className='container-correo fade-in'>
                <div className='back-image'>
                    <img src={correo} alt="imagenPlantas" />
                </div>
                <article className='correo-pri'>
                    <div>
                        <p>Introduce tu dirección de correo electrónico para recibir nuestras promociones y otras cosas interesantes</p>
                    </div>
                    <div className="input-container">
                        <input type="email" placeholder="Ingrese su correo electrónico" />
                        <button>Enviar</button>
                    </div>
                </article>
            </section>
        </>
    );
};