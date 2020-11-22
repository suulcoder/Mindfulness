import React from 'react';
import './index.css'

const entang = require('../../public/img/mind2.jpg')
const sat = require('../../public/img/mind.jpeg')
const ins = require('../../public/img/mind3.jpg')

const Libre = () => (
  <div className="solution">
    <div className="right">
      <img src={ins} alt=""></img>
      <div className="Right-card">
        <strong> El mindfulness:</strong> 
        <div>
        El mindfulness o meditación de consciencia plena ofrece una vía para regular nuestras emociones y pensamientos, con efectos beneficiosos en términos de aumento del bienestar subjetivo y reducción de síntomas relacionados con la depresión o la ansiedad, entre otros. Su uso se ha extendido además a numerosos ámbitos, desde la psicología clínica, la educación o la psicología del trabajo. Sin embargo, sus mecanismos de funcionamiento son aún en gran medida desconocidos. Algunas aportaciones llevadas a cabo desde la psicología y las neurociencias sugieren que esta forma de meditación favorece un cambio de perspectiva a la hora de contemplar nuestra vida mental, cuyo sustrato a nivel cerebral tal vez sea trazable gracias a las técnicas de neuroimagen.
        </div>
      </div>
    </div>
    <div className="bar"></div>
    <div className="left">
      <div className="Left-card">
        <strong>Reelaboración cognitiva:</strong> 
        <div>
        En un estudio reciente (Troy, et al.) han encontrado diferencias en la capacidad de reelaboración cognitiva al comparar un grupo de individuos con historia de práctica de mindfulness y dos grupos control, uno de los cuales estaba integrado por personas que habían pasado por terapia de tipo cognitivo-conductual y otro por sujetos sin historia previa de psicoterapia. La habilidad para cambiar los pensamientos asociados a un estímulo, y así modificar el impacto emocional de éste, era mayor entre aquellos que habían estado en una terapia basada en el entrenamiento en mindfulness. Según estos autores, cuando alguien es consciente de cuáles son sus pensamientos, emociones y sensaciones en el momento presente, los acepta, y no se identifica con ellos, es más fácil que se abra a nuevas posibilidades a la hora de reinterpretar la realidad, dejando a un lado pensamientos negativos previamente automatizados.
        </div>
      </div>
      <img src={sat} alt=""></img>
    </div>
    <div className="right">
      <img src={entang} alt=""></img>
      <div className="Right-card">
        <strong> Compasión:</strong> 
        <div>
        En otro experimento (Jazaieri, et al.) analizaron los efectos de un programa de entrenamiento en compasión sobre medidas relacionadas con el mindfulness y la felicidad, comparando a las personas que participaron en él con un grupo control de lista de espera. Los resultados pusieron de manifiesto que el entrenamiento en compasión incrementaba los niveles de mindfulness, felicidad, disminuía la preocupación y contrarrestaba la tendencia a la supresión emocional como estrategia de regulación. En definitiva, una actitud compasiva, la práctica de la meditación y el manejo adecuado de emociones y pensamientos parecen ir de la mano.
        </div>
      </div>
    </div>
    <div className="right">
    <div className="Right-card">
    Troy, A. S., Shallcross, A. J., Davis, T. S., & Mauss, I. B. (2013). History of mindfulness-based cognitive therapy is associated with increased cognitive reappraisal ability. Mindfulness, 4(3), 213-222.
    </div>
    </div>
    <div className="right">
    <div className="Right-card">
    Jazaieri, H., McGonigal, K., Jinpa, T., Doty, J. R., Gross, J. J., & Goldin, P. R. (2014). A randomized controlled trial of compassion cultivation training: Effects on mindfulness, affect, and emotion regulation. Motivation and Emotion, 38(1), 23-35.
    </div>
    </div>
  </div>
)

export default Libre