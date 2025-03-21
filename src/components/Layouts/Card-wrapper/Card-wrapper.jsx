import './Card-wrapper.css'

export const Card_wrapper = ({image = '../src/assets/images/logo.jpeg', tile ='Título de la Tarjeta', enlace = 'youtube.com', descrip = 'Esta es una descripción detallada del contenido. Aquí puedes destacar las características más importantes o incluir información relevante que desees compartir con tus visitantes.'}) =>{
    return(
        <div className="card-wrapper">
        <div className="card-background"></div>
        <div className="card">
        <div className="card-face card-front">
            <div className="card-decoration decoration-1"></div>
            <div className="card-decoration decoration-2"></div>
            <div className="card-image-container">
            <img src={image} alt="Imagen de la tarjeta" className="card-image" />
            <div className="image-overlay"></div>
            </div>
            <div className="card-front-content">
            <h3 className="card-title">{tile}</h3>
            <a href={enlace} className="card-link">Explorar</a>
            <div className="flip-icon">↻</div>
            </div>
        </div>
       
        </div>
    </div>
    )
}