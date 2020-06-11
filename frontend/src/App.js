
import React, { Component } from "react"
import axios from 'axios'

const api = axios.creat({
  baseURL: 'http:localhost:3333',
})

class App extends Component {
  state = {
    newDepositoContent : '',
    depositos: [],
  }

  async componentDidMount(){
    const { data : depositos } = await api.get('/depositos')

    this.setState({ depositos })
  }

  handleDepositoSalvo = async (e) =>{
    e.preventDefault();

    const {data : Deposito} = await api.Deposito('/depositos', {content : this.state.newDepositoContent})

    this.setState({ depositos: [...this.state.depositos, Deposito], newDepositoContent: '' })
   }


  render(){
  return (
    <div className="App">
      <form onSubmit={this.handleDepositoSalvo}>
     <textarea 
     onChange= { e => this.setState({ newDepositoContent : e.target.value})}
     value={this.state.newDepositoContent}
     />
     <button type="submit">Depositar</button>
     </form>
     <ul>
      {this.state.depositos.map ( depositos => (
        <li key={depositos.id}>{depositos.content}</li>
      )) }
     </ul>
    </div>
  );
}
}

export default App;
