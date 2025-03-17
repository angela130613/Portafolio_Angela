import React from 'react'
import './Studies.css'

export const Studies = () => {
  return (
    <div>
      <h1>Mi Formación Académica</h1>
      <div className="education-card">
            <h2>Bachiller</h2>
            <p><strong>Institución:</strong> I.E. San Jose</p>
            <p><strong>Periodo:</strong> enero 2018 - noviembre 2023 </p>
            <p><strong>Estado:</strong> <span className="status">Completado</span></p>
        </div>
        
        <div className="education-card">
            <h2>Técnico en Desarrollo de Software</h2>
            <p><strong>Institución:</strong> I.E. San Jose</p>
            <p><strong>Periodo:</strong>Marzo 2022 - Octubre 2023</p>
            <p><strong>Estado:</strong> <span className="status">Completado</span></p>
        </div>
        
        <div className="education-card">
            <h2>Análisis y Desarrollo de Software</h2>
            <p><strong>Institución:</strong> SENA</p>
            <p><strong>Nivel actual:</strong> Quinto trimestre de seis</p>
            <p><strong>Estado:</strong> <span className="status">En curso</span></p>
            
            <div className="progress-container">
                <div className="progress-bar" title="5/6 trimestres completados"></div>
            </div>
            <p className='p-trimestre'>5/6 trimestres</p>
        </div>
    </div>
  )
}