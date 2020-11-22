import React from 'react';
import './index.css'

const entang = require('../../public/img/compu.jpeg')
const sat = require('../../public/img/sat.jpeg')
const ins = require('../../public/img/installation.jpg')
const code = require('../../public/img/code.jpg')

const Meditation = () => (
  <div className="solution">
    <div className="right">
      <img src={entang} alt=""></img>
      <div className="Right-card">
        <strong> Mi carrera:</strong> 
        <div>
        Actualmente curso el sexto semestre de la carrera de INGIENERÍA EN CIENCIAS
        DE LA COMPUTACIÓN.  Una carrera que tiene mucho que ver con el desarrollo de
        algoritmos para la industría, como algoritmos para la investigación. Existen
        muchas ramas en la computación entre las cuales se pueden mencionar: La ciberseguridad,
        la inteligencia artíficial, machine learning, desarrollo de software, desarrollo de 
        páginas web, aplicaciones móviles, negocios tecnologicos, creación de videojuegos, 
        internet de las cosas, computación cuántica, gráficas por computadora entre otros. En 
        muchas ocacisiones los sistemás no compilan, y es allí donde entra el mindfulness
        </div>
      </div>
    </div>
    <div className="bar"></div>
    <div className="left">
      <div className="Left-card">
        <strong>Mindfulness en computación:</strong> 
        <div>
        En la carrera de computación, el mindfulness permite que cuando el programa
        no compila o corra como se debe, el programador pueda mantenerse concentrado
        sin perder la cabeza o el cáracter al pasar horas tratando de encontrar una 
        solución al programa. Además mucho en la programación requiere de análisis y 
        pensamiento previo antes de empezar a escribir código. Entre estos temas se puede mencionar:
        </div>
      </div>
      <img src={code} alt=""></img>
    </div>
    <strong>Meditación</strong>
    <strong>Ansiedad y Mindfulness</strong>
    <strong>Atención</strong>
    <strong>Ciclo de sueño</strong>
    <strong>REM</strong>
    <strong>Cognición</strong>
    <strong>Aprendizaje</strong>
    <strong>Afirmaciones positivas</strong>
    <strong>Y muchos otros</strong>
  </div>
)

export default Meditation