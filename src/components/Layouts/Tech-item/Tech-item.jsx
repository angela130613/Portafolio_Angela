export const TechItem = ({text = 'React', srce = 'src/assets/icon/react.png' }) => {
    return(
        <div class="tech-item">
          <img class="tech-icon" src={srce} alt={text} />
          <span class="tech-name">{text}</span>
        </div>
    )
}

