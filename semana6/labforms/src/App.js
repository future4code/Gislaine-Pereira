import React from 'react';
import styled from 'styled-components';

import Etapa1 from './Components/Etapa1';
import Etapa2 from './Components/Etapa2.js';
import Etapa3 from './Components/Etapa3.js';
import Final from './Components/Etapafinal.js';

class App extends React.Component {
  
  render() {

    
    return (
      < div >
        <Etapa1></Etapa1>
        <Etapa2></Etapa2>
        <Etapa3></Etapa3>
        <Final></Final>
      </div>
    );
  }
}

export default App;
