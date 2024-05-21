import React, { JSXElementConstructor } from 'react';
import { Text, View } from 'react-native';

import CadastroMusica from './src/screens/cadastroMusica';
import SignIn from './src/screens/sign';

function App():JSX.Element{

  return(
    <CadastroMusica/>
  );
}



export default App;