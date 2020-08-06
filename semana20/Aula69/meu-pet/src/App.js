import React, {useState} from 'react';
import logo from "./img/Logo.png";
import './App.css';
import Montagem from './components/Montagem';
import Icone from '@material-ui/icons/PetsOutlined';
import { withStyles } from '@material-ui/core/styles';
import { purple, grey } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import PetsOutlinedIcon from '@material-ui/icons/PetsOutlined';

const PetIconChecked = withStyles({
  root: {
    color: "#3a076b",
  }
})(PetsOutlinedIcon);

const PetIcon = withStyles({
  root: {
    color: grey[600],
  }
})(PetsOutlinedIcon)


function App() {
  const [pet, setPet] = useState("cat")

  const selecionaDog = () =>{
    setPet("dog")
  }

  const selecionaCat = () => {
    setPet("cat")
  }

  console.log(pet)
  
  return (
    <div id="tela-toda">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <div id="conteudo">
        <section id="enviar-arquivo">
          <section className="caixa-selecao">
            <section className="caixa-selecao" onClick={selecionaCat}>
              {pet === "cat" ? <PetIconChecked /> : <PetIcon />} 
              <p>Gatíneo</p>
            </section>
            
            <section className="caixa-selecao" onClick={selecionaDog}>
              {pet === "dog" ? <PetIconChecked /> : <PetIcon />}
              <p>Doguinho</p>
            </section>
            
          </section>
        </section>
  
        <section id="imagem-pet">
         
        </section>
      </div>
    </div>
  );
}

export default App;
