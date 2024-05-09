import { Component } from 'react'
import '../App.css'
import Boton from './Boton'

export default class Contador extends Component{
  constructor(props){
    super(props);
    this.state = { valor: 0 }

  }
  restar(){
    this.setState({ valor: this.state.valor - 1 });
    // NO => this.state.valor = xxxx;
  }
  suma(){
    
  }
  
  render(){
    return(
       <div className='Contador'>
        <span className='Titulo'>{this.props.children}</span>
        <span className='Valor'>{this.state.valor}</span>
        <div className='Botonera'>
        <Boton
          simbolo='-'
          accion={() => alert("Resta")}
          />
         <Boton
          simbolo='+'
          accion={() => alert ("suma")}
         />     
        </div>
       </div>
    )
  }
}