import React from 'react';
import './index.css'

const mars = require('../../public/img/brain.png')
const earth = require('../../public/img/earth.png')
const satellite = require('../../public/img/satellite.png')

const Intro = () => (
  <div className="intro">
    <div className="intro_title">Diario reflexivo</div>
    <div className="intro_subtitle">En esta página se muestra información sobre la clase de Mindfulness y Liderazgo positivo. En la sección de tareas se econtrará 3 tareas que llamaron mi atención. En la pestaña Mindfulness aparecerá como se relaciona la computación con el mindfunless. Y por último enl a pestaña libre se encontrá información que relaciona el mindfunless con la investigación científica.</div>
    <div className="intro_animation">
      <img src={earth} alt=""></img>
      <img src={satellite} alt=""></img>
      <img src={mars} alt=""></img>
    </div>
    <div className="intro_subtitle">Recurso: El mindfulness permite conectar la mente con el mundo</div>
  </div>
)

export default Intro