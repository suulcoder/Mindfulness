import React from 'react';
import './index.css'

const dsn = require('../../public/img/dsn.png')
const spain = require('../../public/img/spain.png')
const cali = require('../../public/img/california.png')
const australia = require('../../public/img/australia.png')

const DSN = ({text}) => (
  <div className="dsn">
    <div className="dsn_title_">{text}</div>
  </div>
)

export default DSN