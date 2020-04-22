import React from "react";
import {Etapa1} from "./components/Etapa1";
import {Etapa2} from "./components/Etapa2";
import {Etapa3} from "./components/Etapa3";
import {Final} from "./components/Final";

class App extends React.Component {
  state = {
    etapaselecionada: "Etapa1"
  };

  onClickProxE1 = () => {
    this.setState({ etapaselecionada: "Etapa2" });
  };

  onClickProxE2 = () => {
    this.setState({ etapaselecionada: "Etapa3" });
  };

  onClickProxE3 = () => {
    this.setState({ etapaselecionada: "Final" });
  };


  

  render(){
    switch (this.state.etapaselecionada) {
      case "Etapa1":
        return <Etapa1 prox1={this.onClickProxE1} />;

      case "Etapa2":
        return <Etapa2 prox2={this.onClickProxE2} />;

      case "Etapa3":
        return <Etapa3 prox3={this.onClickProxE3} />;   
        
      default:
        return <Final />
    }         
  }
}

export default App;
