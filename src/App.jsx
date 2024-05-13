import { Component } from 'react'
import Contador from './componentes/Contador'
import './App.css'
import Formulario from './componentes/Formulario';

const contadores=['Alumnos', 'Profesores', 'Aulas', 'Etc', 'Etc']

export default class App extends Component{
  render(){
    return(
      <div className='Contendedor'>
        <Formulario />
        <div className='ListaContenedores'>
           {contadores.map((cont, index) =>
           <Contador key={index}>{cont}</Contador>
          )}
        </div>
      </div>
    )
  }

}


 