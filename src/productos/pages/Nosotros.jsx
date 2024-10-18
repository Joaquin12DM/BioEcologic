import '../styles/Nosotros.css'
import imagen1 from './assets/img/imagen1.jpg';
import imagen2 from './assets/img/imagen2.jpg';
import imagen3 from './assets/img/imagen3.jpg';

export const Nosotros = () => {
    return (
        <>
            <section className='container1'>
                <div className='text-nos'>
                    <h1>Comprometidos con el Planeta</h1>
                </div>
                <article className='subcontainer1'>
                    <img src={imagen1} alt="" />
                    <p>En Bioecologic EcoPack nos especializamos en la distribución de empaques biodegradables y reutilizables, brindando alternativas sostenibles para negocios que buscan reducir su huella ecológica. Ofrecemos una amplia gama de productos, como bolsas, cajas para alimentos y otros empaques responsables, diseñados para cuidar el medio ambiente.</p>
                </article>
                <article className='subcontainer2'>
                    <p>Ofrecemos soluciones de empaque biodegradables y compostables, comprometidos con la sostenibilidad y el cuidado del medio ambiente. Nuestro objetivo es ayudarte a reducir el impacto ambiental con productos responsables que protegen tanto tus productos como el planeta.</p>
                    <img src={imagen2} alt="" />
                </article>
                <div className='subcontainer3'>
                    <img src={imagen3} alt="" />
                </div>


            </section>
        </>

    )
}
