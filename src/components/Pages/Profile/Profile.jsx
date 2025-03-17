import React from 'react'
import { TechItem } from '../../Layouts/Tech-item/Tech-item'
import { Skills } from '../../Layouts/Skills/Skills.jsx'


export const Profile = () => {
  return (
    <>
      <h1 className="title">PROFILE</h1>

      <div className='tech-grid' >

        <TechItem />

        <TechItem text='Java' srce='../src/assets/images/iconos/java.png'  />

        <TechItem text='Oracle' srce='../src/assets/images/iconos/oracle.png'/>

        <TechItem text='Node' srce='../src/assets/images/iconos/node.png'/>

        <TechItem text='mongo' srce='../src/assets/images/iconos/mongp.png'/>

        <TechItem text='javaScript' srce='../src/assets/images/iconos/javaScript.png'/>

        <TechItem text='figma' srce='../src/assets/images/iconos/figma.png'/>

        <TechItem text='css' srce='../src/assets/images/iconos/css.png'/>

        <TechItem text='html' srce='../src/assets/images/iconos/html.png'/>

      </div>

      <Skills />

    </>
  )
}
