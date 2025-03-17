import '../Skills/Skills.css'
export const Skills = () =>{
    return(
        <div className="container">
        <div className="seccion habilities-sociales">
            <h2>Habilidades Sociales</h2>
            <ul className="habilities-list">
                <li className="hability-item">
                    <div className="hability-icon">💬</div>
                    <div className="hability-info">
                        <div className="hability-name">Comunicación efectiva</div>
                        <div className="hability-description">Capacidad para expresar ideas claramente y escuchar activamente</div>
                    </div>
                </li>
                <li className="hability-item">
                    <div className="hability-icon">🚀</div>
                    <div className="hability-info">
                        <div className="hability-name">Liderazgo</div>
                        <div className="hability-description">Habilidad para guiar e inspirar a otros hacia objetivos comunes</div>
                    </div>
                </li>
                <li className="hability-item">
                    <div className="hability-icon">✓</div>
                    <div className="hability-info">
                        <div className="hability-name">Honestidad</div>
                        <div className="hability-description">Integridad y transparencia en todas las interacciones</div>
                    </div>
                </li>
                <li className="hability-item">
                    <div className="hability-icon">🤝</div>
                    <div className="hability-info">
                        <div className="hability-name">Respeto</div>
                        <div className="hability-description">Trato considerado y valoración de las diferencias</div>
                    </div>
                </li>
                <li className="hability-item">
                    <div className="hability-icon">👥</div>
                    <div className="hability-info">
                        <div className="hability-name">Trabajo en equipo</div>
                        <div className="hability-description">Colaboración efectiva para lograr objetivos compartidos</div>
                    </div>
                </li>
            </ul>
        </div>
        <div className="seccion level-english-seccion">
            <h2>Nivel de Inglés</h2>
            <div className="level-english">
                <div className="level-english-escala">
                    <div className="level-english-barra"></div>
                    <div className="level-english-progress"></div>
                    
                    <div className="level-english-item">
                        <div className="level-english-marcador"></div>
                        <div className="level-english-etiquet">A1</div>
                    </div>
                    
                    <div className="level-english-item">
                        <div className="level-english-marcador"></div>
                        <div className="level-english-etiquet">A2</div>
                    </div>
                    
                    <div className="level-english-item activo">
                        <div className="level-english-marcador"></div>
                        <div className="level-english-etiquet">B1</div>
                    </div>
                    
                    <div className="level-english-item">
                        <div className="level-english-marcador"></div>
                        <div className="level-english-etiquet">B2</div>
                    </div>
                    
                    <div className="level-english-item">
                        <div className="level-english-marcador"></div>
                        <div className="level-english-etiquet">C1</div>
                    </div>
                    
                    <div className="level-english-item">
                        <div className="level-english-marcador"></div>
                        <div className="level-english-etiquet">C2</div>
                    </div>
                </div>
            </div>
            <p className="level-english-descripcion">B1 - Intermedio Medio: Comunicación fluida con nativos sin mucho esfuerzo</p>
        </div>
    </div>
    )
}