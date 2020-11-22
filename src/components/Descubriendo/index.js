import React from 'react';
import './index.css'
import YouTube from 'react-youtube';

const entang = require('../../public/img/brain.png')
const sat = require('../../public/img/lim.png')
const ins = require('../../public/img/lim2.jpg')
const code = require('../../public/img/code.jpg')

const Descu = () => {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
  <div className="solution">
    <div className="right">
      <img src={entang} alt=""></img>
      <div className="Right-card">
        <strong> Meditación:</strong> 
        <div>
          Elegí esta actividad porque me ayudó mucho a concetrarme en diferentes
          actividades durante el día. Actualmente realizó la meditación, como mínimo
          una vez a la semana. Aprendí que realizar esta actividad permite que mi
          mente este más conectada en las actividades diarias. 
        </div>
      </div>
    </div>
    <div className="bar"></div>
    <div className="left">
      <div className="Left-card">
        <strong>¿Cómo meditar?</strong> 
        <div>
        <YouTube videoId="kwTKk6u30x4" opts={opts} onReady={true} />
        </div>
      </div>
    </div>
    <div className="right">
      <div className="Right-card">
        <strong>Meditación Guíada:</strong> 
        <div>
        <YouTube videoId="oeXs3VrzhWA" opts={opts} onReady={true} />
        </div>
      </div>
    </div>
  </div>
)}

export default Descu