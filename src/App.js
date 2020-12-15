import React, { Component } from "react";
import  { GlobalStyle } from './GlobalStyle.js'; 
import { ThemeProvider } from "styled-components";
import { OpcaoEscura, OpcaoClara } from './Opcoes';
import Alternancia from './Alternancia';

import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      theme: "Branco",
    };
  }

  searchBoxHandler(data) {
    this.setState({
      inputText: data
    });
  }

    alternaciaTema = () => {
    if (this.state.theme === 'Branco') {
      this.setState({
        inputText: this.state.inputText,
        theme: 'Escuro',
      });
    } else {
      this.setState({
        inputText: this.state.imputText,
        theme: 'Branco',  
      });
    }
  }

  render() { 
    return (
      <ThemeProvider theme = {this.state.theme === 'Escuro' ? OpcaoEscura : OpcaoClara}>
        <GlobalStyle/>
        <div className="App">
          <form>
            <h1 className="texto">Sign up to my newsletter</h1>
            <p></p>
            <input type="text" placeholder="dougsaaj@gmail.com"></input>
            <button  className="button">Inscreva-se</button>
            <p></p>
          </form>

          <Alternancia temaTexto = {this.state.theme} alternaciaTema={this.alternaciaTema}/>
        </div>
      </ThemeProvider>    
    );
    
  }

}

export default App;