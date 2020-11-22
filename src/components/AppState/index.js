import React from 'react';
import Header from '../Header';
import { connect } from 'react-redux';
import Intro from '../Intro';
import Background from '../Background';
import DSN from '../DSN';
import Solution from '../Solution';
import Descu from '../Descubriendo';
import Footer from '../Footer';
import Meditation from '../Meditation';
import Libre from '../Libre';

const mars = require('../../public/img/brain.png')
const earth = require('../../public/img/earth.png')
const satellite = require('../../public/img/satellite.png')


function App({app}) {
    console.log(app)
    switch (app) {
        case 1: 
            return (
                <div className="App">
                    <Header/>
                     <div className="solution">
                        <div className="solution_title">Actividades</div>
                        <div className="solution_subtitle">
                        En esta sección se podrá encontrar información sobre tres actividades que 
                        se realizaron durante el semestre de Mindfulness y Liderazgo Positivo.
                        </div>
                    <div className="solution_animation">
                        <img src={mars} alt=""></img>
                        <img src={satellite} alt=""></img>
                        <img src={earth} alt=""></img>
                    </div>
                    </div>
                    <DSN
                    text={'ACTIVIDAD 1'} />
                    <Descu/>
                    <DSN
                    text={'ACTIVIDAD 2'} />
                    <Solution/>
                    <DSN
                    text={'ACTIVIDAD 3'} />
                    <Background/>
                    <Footer/>
                </div>
            )
        case 2: 
            return (
                <div className="App">
                    <Header/>
                    <div className="solution">
                        <div className="solution_title">Mindfulness en computación</div>
                        <div className="solution_subtitle">
                        En esta sección se podrá encontrar información sobre el Mindfulness en mi carrera
                        </div>
                    <div className="solution_animation">
                        <img src={mars} alt=""></img>
                        <img src={satellite} alt=""></img>
                        <img src={earth} alt=""></img>
                    </div>
                    </div>
                    <Meditation/>
                    <Footer/>
                </div>
            )
        case 3: 
            return (
                <div className="App">
                    <Header/>
                    <div className="solution">
                        <div className="solution_title">Tema libre</div>
                        <div className="solution_subtitle">
                        En esta sección se podrá encontrar información sobre el Mindfulness explicado a través de la investigación que se ha realizado en distitntos estudios:
                        </div>
                    <div className="solution_animation">
                        <img src={mars} alt=""></img>
                        <img src={satellite} alt=""></img>
                        <img src={earth} alt=""></img>
                    </div>
                    </div>
                    <Libre/>
                    <Footer/>
                </div>
            )
        default:
            return (
                <div className="App">
                    <Header/>
                    <Intro/>
                </div>
            )
    };
}

export default connect(
    state => ({
        app: state.state
    }),
    undefined
)(App);