import { Component } from 'react'
import Contador from './componentes/Contador'
import './App.css'

export default class App extends Component{
  
  render(){
    return(
      <div className='ListaContadores'>
        <Contador Alumnos />
        <Contador Profesores />
        <Contador />
        <Contador />
        <Contador />
      </div>
    )
  }

}

 