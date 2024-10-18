import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../ui'
import { Footer } from '../ui'

import { StylePulsePage } from '../productos/pages/StylePulsePage'
import { Tienda } from '../productos/pages/Tienda'
import { Contacto } from '../productos/pages/Contacto'
import { Nosotros } from '../productos/pages/Nosotros'
import { Terminos } from '../productos/pages/Terminos'
import { Preguntas } from '../productos/pages/Preguntas'

export const AppRouter = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="StylePulse" element={<StylePulsePage />} />
                <Route path="Tienda" element={<Tienda />} />
                <Route path="Contacto" element={<Contacto />} />
                <Route path="Nosotros" element={<Nosotros />} />
                <Route path="/Terminos&Condiciones" element={<Terminos />} />
                <Route path="/PreguntasFrecuentes" element={<Preguntas />} />
                <Route path="/" element={<Navigate to='/StylePulse' />} />
            </Routes >
            <Footer />


        </>
    )
}
