import React from 'react';
import './index.css'

const zapato = require('../../public/img/zapato.jpg')
const one = require('../../public/img/1.png')
const two = require('../../public/img/2.png')
const three = require('../../public/img/3.png')
const four = require('../../public/img/4.png')
const five = require('../../public/img/5.png')
const six = require('../../public/img/6.png')
const seven = require('../../public/img/7.png')
const eight = require('../../public/img/8.png')
const nine = require('../../public/img/9.png')
const ten = require('../../public/img/10.png')
const eleven = require('../../public/img/11.png')
const twelve = require('../../public/img/12.png')
const thirteen = require('../../public/img/13.png')

const Background = () => (
  <div className="solution">
    <div className="right">
      <img src={zapato} alt=""></img>
      <div className="Right-card">
        <strong> En otros zapatos:</strong> 
        <div>
          Esta actividad llamó mi atención en gran manera, debido a que planteaba
          una historia interactiva e interesante. Esta fue la razón por lo que la
          escogí como actividad. Me gustó que había diferentes finales dependiendo
          de las decisiones que se tomaban. Aprendí que hay personas diferentes y en
          situaciones diferentes, en otros zapatos. Lo he puesto en práctica al 
          reconocer esta situación. 
        </div>
      </div>
    </div>
    <div className="bar"></div>
    <strong>Galería</strong> 
    <div className="left">
      <div className="Left-card">
      </div>
      <img className="img_" src={one} alt=""></img>
      <img className="img_" src={two} alt=""></img>
      <img className="img_" src={three} alt=""></img>
      <img className="img_" src={four} alt=""></img>
      <img className="img_" src={five} alt=""></img>
      <img className="img_" src={six} alt=""></img>
      <img className="img_" src={seven} alt=""></img>
      <img className="img_" src={eight} alt=""></img>
      <img className="img_" src={nine} alt=""></img>
      <img className="img_" src={ten} alt=""></img>
      <img className="img_" src={eleven} alt=""></img>
      <img className="img_" src={twelve} alt=""></img>
      <img className="img_" src={thirteen} alt=""></img>
    </div>
    <div className="bar"></div>
  </div>
)

export default Background