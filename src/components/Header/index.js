import React from 'react';
import './index.css'
import {change_app_state} from '../../actions/appState'
import { connect } from 'react-redux';

const logo = require('../../public/img/logo.png')

const Header = ({changeApp}) => (
  <div className="header">
    <div className="header_section">
      <img src={logo} alt=""></img>
      <div className="header_title">MINDFULNESS</div>
    </div>
    <div className="menu">
      <div onClick={() => changeApp(0)} className="menu-item"> {' HOME '} </div>
      <div onClick={() => changeApp(1)} className="menu-item"> {' TAREAS '} </div>
      <div onClick={() => changeApp(2)} className="menu-item"> {' MINDFULNESS '} </div>
      <div onClick={() => changeApp(3)} className="menu-item"> {' LIBRE '} </div>
    </div>
  </div>
)

export default connect(
  undefined,
  dispatch => ({
      changeApp(app){
          dispatch(change_app_state(app))
      }
  })
)(Header);