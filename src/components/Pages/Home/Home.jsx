import React from 'react'

export const Home = () => {
  return (
    <div className='container' >
    <div className="profile-photo">
        <img src="./src/assets/images/20231110_092247.jpg" alt="Foto de perfil" class="profile-image"/>
    </div>
    <div className="profile-info">
            <h1 className="greeting">¡HOLA!</h1>
            <h2 className="name">Soy <span class="highlight">Angela Maria Yepez Ramirez</span></h2>
            
            <p class="bio">
                Estudiante de Analisis y Desarrollo de Software. Me esfuerzo por superar
                mis límites y buscar nuevas maneras de aprender nuevas tecnicas. 
                Con una mentalidad proactiva, estoy siempre en busca de oportunidades para aprender y crecer.
            </p>
    </div>
    </div>
  )
}
