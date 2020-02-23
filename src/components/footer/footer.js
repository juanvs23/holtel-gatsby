import React from 'react'
import footerCss from './footer.module.css'

export default function Footer(props) {
    let fecha = new Date().getFullYear()
    return (
        <footer className={footerCss.footer}>
        <div className={footerCss.footerContent}>
        <h3>Desarrrollado por <a href="mailto:juanvs23@gmail.com" target="_blank" rel="noopener noreferrer" >Juan Carlos Avila</a>  </h3><h3>Todos los derechos reservados {fecha} </h3>
        </div>
        </footer>
    )
}
