import React from 'react';
import './index.css'

const entang = require('../../public/img/brain.png')
const sat = require('../../public/img/lim.png')
const ins = require('../../public/img/lim2.jpg')

const Meditation = () => (
  <div className="solution">
    <div className="right">
      <img src={entang} alt=""></img>
      <div className="Right-card">
        <strong> Descubrimiento del cerebro:</strong> 
        <div>
        Esta actividad fue escogida de entre todas porque tuvo un análisis muy científico y un enfoque hacia la neurociencia muy bien recibido. Me gustó mucho aprender acerca del sistema límbico, que fue lo que le fue asignado a mi grupo. Actualmente tomo más tiempo para poder prestar atención a que actividades en mi vida están afectando a que parte de mi cerebro.
        </div>
      </div>
    </div>
    <div className="bar"></div>
    <div className="left">
      <div className="Left-card">
        <strong>Sistema Límbico:</strong> 
        <div>
        También es conocido como cerebro emocional. Es un sistema que está formado por estructuras cerebrales que regulan las respuestas fisiológicas frente a determinados estímulos emocionales y comportamientos. Esto quiere decir que aquí se encuentran los instintos humanos. Entre estos instintos encontramos la memoria involuntaria, el hambre, la atención, los instintos sexuales, las emociones, la personalidad y la conducta.
        </div>
      </div>
      <img src={sat} alt=""></img>
    </div>
    <div className="bar"></div>
    <div className="right">
      <img src={ins} alt=""></img>
      <div className="Right-card">
        <strong> Sistema límbico en mindfulness:</strong> 
        <div>
        En investigaciones recientes, se han observado ciertos tipos de cambios que pueden producirse en nuestro cerebro con la práctica de Mindfulness: Aumento de la materia gris / grosor cortical El hipocampo, que es la parte del sistema límbico que gobierna el aprendizaje y la memoria. Además, es altamente susceptible al estrés y a trastornos relacionados con él, como la depresión o el trastorno de estrés postraumático.
        </div>
      </div>
    </div>
  </div>
)

export default Meditation