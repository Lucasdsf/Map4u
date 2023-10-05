import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from "./source/components/HomeScreen";
import { Portarias } from './source/components/Portarias';
import { Piaui } from './source/components/Piaui';
import { ParaFrentePiaui } from './source/components/ParaFrentePiaui';
import { ParaFrente45 } from './source/components/ParaFrente45';
import { ParaFrente25 } from './source/components/ParaFrente25';
import { Predio31 } from './source/components/Predio31';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'red'
          }
        }} >
        <Stack.Screen
          name="Menu Principal"
          component={HomeScreen}
          options={{
            headerBackTitleVisible: false
          }} />
        <Stack.Screen
          name="Portarias"
          component={Portarias}
          options={{
            headerBackTitle: 'Menu',
            headerBackTitleVisible: true
          }} />
        <Stack.Screen
          name="Piaui"
          component={Piaui}
          options={{
            headerBackTitle: 'Portarias',
            headerBackTitleVisible: true
          }} />
        <Stack.Screen
          name="ParaFrentePiaui"
          component={ParaFrentePiaui}
          options={{
            headerBackTitle: 'Voltar',
            headerBackTitleVisible: true
          }} />
        <Stack.Screen
          name="ParaFrente45"
          component={ParaFrente45}
          options={{
            headerBackTitle: 'Voltar',
            headerBackTitleVisible: true
          }} />
        <Stack.Screen
          name="ParaFrente25"
          component={ParaFrente25}
          options={{
            headerBackTitle: 'Voltar',
            headerBackTitleVisible: true
          }} />
        <Stack.Screen
          name="Predio31"
          component={Predio31}
          options={{
            headerBackTitle: 'Voltar',
            headerBackTitleVisible: true
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;