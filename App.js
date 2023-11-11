import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from "./source/components/HomeScreen";
import { Predio31 } from './source/components/Predio31';
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
import { InfoTela1 } from './source/componentsInfo/InfoTela1';
import { InfoTela2 } from './source/componentsInfo/InfoTela2';
import { InfoTela3 } from './source/componentsInfo/InfoTela3';
import { InfoTela4 } from './source/componentsInfo/InfoTela4';
import { InfoTela5 } from './source/componentsInfo/InfoTela5';
import { InfoTela6 } from './source/componentsInfo/InfoTela6';
import { InfoTela7 } from './source/componentsInfo/InfoTela7';
import { InfoTela8 } from './source/componentsInfo/InfoTela8';
import { InfoTela9 } from './source/componentsInfo/InfoTela9';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'gray',
            headerTintColor: 'black'
          }
        }} >
        <Stack.Screen
          name="MENU PRINCIPAL"
          component={HomeScreen}
          options={{
            headerBackTitleVisible: false,
            headerBackTitle: 'MENU',
            headerBackTitleVisible: true,
            headerTintColor: 'black'
          }} />
        <Stack.Screen
          name="Predio31"
          component={Predio31}
          options={{
            headerTitle: '',
            headerBackTitle: 'MENU',
            headerBackTitleVisible: true,
            headerTintColor: 'black'
          }} />
        <Stack.Screen
          name="Portarias"
          component={Portarias}
          options={{
            headerTitle: '',
            headerBackTitle: 'MENU',
            headerBackTitleVisible: true,
            headerTintColor: 'black'
          }} />
        <Stack.Screen
          name="PiauiTela1"
          component={PiauiTela1}
          options={{
            headerTitle: '',
            headerBackTitle: 'PORTARIAS',
            headerBackTitleVisible: true,
            headerTintColor: 'black'
          }} />
        <Stack.Screen
          name="PiauiTela2"
          component={PiauiTela2}
          options={{
            headerTitle: '',
            headerBackTitle: 'VOLTAR',
            headerBackTitleVisible: true,
            headerTintColor: 'black'
          }} />
        <Stack.Screen
          name="PiauiTela3"
          component={PiauiTela3}
          options={{
            headerTitle: '',
            headerBackTitle: 'VOLTAR',
            headerBackTitleVisible: true,
            headerTintColor: 'black'
          }} />
        <Stack.Screen
          name="PiauiTela4"
          component={PiauiTela4}
          options={{
            headerTitle: '',
            headerBackTitle: 'VOLTAR',
            headerBackTitleVisible: true,
            headerTintColor: 'black'
          }} />
        <Stack.Screen
          name="PiauiTela5"
          component={PiauiTela5}
          options={{
            headerTitle: '',
            headerBackTitle: 'VOLTAR',
            headerBackTitleVisible: true,
            headerTintColor: 'black'
          }} />
        <Stack.Screen
          name="MariaAntoniaTela1"
          component={MariaAntoniaTela1}
          options={{
            headerTitle: '',
            headerBackTitle: 'VOLTAR',
            headerBackTitleVisible: true,
            headerTintColor: 'black'
          }} />
        <Stack.Screen
          name="MariaAntoniaTela2"
          component={MariaAntoniaTela2}
          options={{
            headerTitle: '',
            headerBackTitle: 'VOLTAR',
            headerBackTitleVisible: true,
            headerTintColor: 'black'
          }} />
        <Stack.Screen
          name="MariaAntoniaTela3"
          component={MariaAntoniaTela3}
          options={{
            headerTitle: '',
            headerBackTitle: 'VOLTAR',
            headerBackTitleVisible: true,
            headerTintColor: 'black'
          }} />
        <Stack.Screen
          name='MariaAntoniaTela4'
          component={MariaAntoniaTela4}
          options={{
            headerTitle: '',
            headerBackTitle: 'VOLTAR',
            headerBackTitleVisible: true,
            headerTintColor: 'black'
          }} />
        <Stack.Screen
          name='MariaAntoniaTela5'
          component={MariaAntoniaTela5}
          options={{
            headerTitle: '',
            headerBackTitle: 'VOLTAR',
            headerBackTitleVisible: true,
            headerTintColor: 'black'
          }} />
        <Stack.Screen
          name='MariaAntoniaTela6'
          component={MariaAntoniaTela6}
          options={{
            headerTitle: '',
            headerBackTitle: 'VOLTAR',
            headerBackTitleVisible: true,
            headerTintColor: 'black'
          }} />
        <Stack.Screen
          name='InfoTela1'
          component={InfoTela1}
          options={{
            headerTitle: '',
            headerBackTitle: 'VOLTAR',
            headerBackTitleVisible: true,
            headerTintColor: 'black'
          }} />
        <Stack.Screen
          name='InfoTela2'
          component={InfoTela2}
          options={{
            headerTitle: '',
            headerBackTitle: 'VOLTAR',
            headerBackTitleVisible: true,
            headerTintColor: 'black'
          }} />
        <Stack.Screen
          name='InfoTela3'
          component={InfoTela3}
          options={{
            headerTitle: '',
            headerBackTitle: 'VOLTAR',
            headerBackTitleVisible: true,
            headerTintColor: 'black'
          }} />
        <Stack.Screen
          name='InfoTela4'
          component={InfoTela4}
          options={{
            headerTitle: '',
            headerBackTitle: 'VOLTAR',
            headerBackTitleVisible: true,
            headerTintColor: 'black'
          }} />
        <Stack.Screen
          name='InfoTela5'
          component={InfoTela5}
          options={{
            headerTitle: '',
            headerBackTitle: 'VOLTAR',
            headerBackTitleVisible: true,
            headerTintColor: 'black'
          }} />
        <Stack.Screen
          name='InfoTela6'
          component={InfoTela6}
          options={{
            headerTitle: '',
            headerBackTitle: 'VOLTAR',
            headerBackTitleVisible: true,
            headerTintColor: 'black',
          }} />
        <Stack.Screen
          name='InfoTela7'
          component={InfoTela7}
          options={{
            headerTitle: '',
            headerBackTitle: 'VOLTAR',
            headerBackTitleVisible: true,
            headerTintColor: 'black',
          }} />
        <Stack.Screen
          name='InfoTela8'
          component={InfoTela8}
          options={{
            headerTitle: '',
            headerBackTitle: 'VOLTAR',
            headerBackTitleVisible: true,
            headerTintColor: 'black',
          }} />
        <Stack.Screen
          name='InfoTela9'
          component={InfoTela9}
          options={{
            headerTitle: '',
            headerBackTitle: 'VOLTAR',
            headerBackTitleVisible: true,
            headerTintColor: 'black',
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;