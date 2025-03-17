import React from 'react'
import { TechItem } from '../../Layouts/Tech-item/Tech-item'
import { Skills } from '../../Layouts/Skills/Skills.jsx'


export const Profile = () => {
  return (
    <>
      <h1 className="title">PROFILE</h1>

      <div className='tech-grid' >

        <TechItem />

        <TechItem text='Java' srce='src/assets/icon/java.png'  />

        <TechItem text='Oracle' srce='src/assets/icon/oracle.png'/>

        <TechItem text='Node' srce='src/assets/icon/node.png'/>

        <TechItem text='mongo' srce='src/assets/icon/mongp.png'/>

        <TechItem text='javaScript' srce='src/assets/icon/JavaScript.png'/>

        <TechItem text='figma' srce='src/assets/icon/figma.png'/>

        <TechItem text='css' srce='src/assets/icon/css.png'/>

        <TechItem text='html' srce='src/assets/icon/html.png'/>

      </div>

      <Skills />

    </>
  )
}
