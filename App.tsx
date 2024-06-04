import React, { JSXElementConstructor } from 'react';
import { Text, View } from 'react-native';

import CadastroMusica from './src/screens/CadastroMusica';
import VizualizarMusica from './src/screens/VisualizarMusica';
import UpdateMusica from './src/screens/UpdateMusica';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App():JSX.Element{

  return(
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='vizualizar' component={VizualizarMusica} options={{headerShown:false}} />
      <Stack.Screen name='cadastro' component={CadastroMusica} options={{headerShown:false}} />
      <Stack.Screen name='update' component={UpdateMusica} options={{headerShown:false}} />
      
 
    </Stack.Navigator>
  </NavigationContainer>

  );
}



export default App;