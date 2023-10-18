import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from "./source/components/HomeScreen";
import { Portarias } from './source/components/Portarias';
import { PiauiTela1 } from './source/componentsPiaui/PiauiTela1';
import { PiauiTela2 } from './source/componentsPiaui/PiauiTela2';
import { PiauiTela3 } from './source/componentsPiaui/PiauiTela3';
import { PiauiTela4 } from './source/componentsPiaui/PiauiTela4';
import { PiauiTela5 } from './source/componentsPiaui/PiauiTela5';
import { MariaAntoniaTela1 } from './source/componentsMariaAntonia/MariaAntoniaTela1';
import { MariaAntoniaTela2 } from './source/componentsMariaAntonia/MariaAntoniaTela2';
import { MariaAntoniaTela3 } from './source/componentsMariaAntonia/MariaAntoniaTela3';
import { MariaAntoniaTela4 } from './source/componentsMariaAntonia/MariaAntoniaTela4';
import { MariaAntoniaTela5 } from './source/componentsMariaAntonia/MariaAntoniaTela5';
import { MariaAntoniaTela6 } from './source/componentsMariaAntonia/MariaAntoniaTela6';


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
            headerTitle: '',
            headerBackTitle: 'Menu',
            headerBackTitleVisible: true
          }} />
        <Stack.Screen
          name="PiauiTela1"
          component={PiauiTela1}
          options={{
            headerTitle: '',
            headerBackTitle: 'Portarias',
            headerBackTitleVisible: true
          }} />
        <Stack.Screen
          name="PiauiTela2"
          component={PiauiTela2}
          options={{
            headerTitle: '',
            headerBackTitle: 'Voltar',
            headerBackTitleVisible: true
          }} />
        <Stack.Screen
          name="PiauiTela3"
          component={PiauiTela3}
          options={{
            headerTitle: '',
            headerBackTitle: 'Voltar',
            headerBackTitleVisible: true
          }} />
        <Stack.Screen
          name="PiauiTela4"
          component={PiauiTela4}
          options={{
            headerTitle: '',
            headerBackTitle: 'Voltar',
            headerBackTitleVisible: true
          }} />
        <Stack.Screen
          name="PiauiTela5"
          component={PiauiTela5}
          options={{
            headerTitle: '',
            headerBackTitle: 'Voltar',
            headerBackTitleVisible: true
          }} />
        <Stack.Screen
          name="MariaAntoniaTela1"
          component={MariaAntoniaTela1}
          options={{
            headerTitle: '',
            headerBackTitle: 'Voltar',
            headerBackTitleVisible: true
          }} />
        <Stack.Screen
          name="MariaAntoniaTela2"
          component={MariaAntoniaTela2}
          options={{
            headerTitle: '',
            headerBackTitle: 'Voltar',
            headerBackTitleVisible: true
          }} />
        <Stack.Screen
          name="MariaAntoniaTela3"
          component={MariaAntoniaTela3}
          options={{
            headerTitle: '',
            headerBackTitle: 'Voltar',
            headerBackTitleVisible: true
          }} />
        <Stack.Screen
          name='MariaAntoniaTela4'
          component={MariaAntoniaTela4}
          options={{
            headerTitle: '',
            headerBackTitle: 'Voltar',
            headerBackTitleVisible: true
          }} />
        <Stack.Screen
          name='MariaAntoniaTela5'
          component={MariaAntoniaTela5}
          options={{
            headerTitle: '',
            headerBackTitle: 'Voltar',
            headerBackTitleVisible: true
          }} />
        <Stack.Screen
          name='MariaAntoniaTela6'
          component={MariaAntoniaTela6}
          options={{
            headerTitle: '',
            headerBackTitle: 'Voltar',
            headerBackTitleVisible: true
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;