import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import Greeting from './Greeting.jsx'

ReactDOM.render(
  <Greeting
    firstName='John'
    lastName='Doe'
    birthDate={new Date('2001-01-01T11:11:11.819Z')}
  />,
  document.getElementById('root')
)
