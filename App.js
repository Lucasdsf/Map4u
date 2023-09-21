import * as React from 'react';
import {
  Button,
  View,
  Text,
  Alert,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function HomeScreen ({navigation}) {
  return (
      <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'black'}}>
        <Text style={
          {color: 'white',
          fontSize: 32,
          textAlign: 'center',
          lineHeight: 32
          }}>Map4u</Text>
      <Button
          title='Iniciar'
          color='red'
          onPress={() => navigation.navigate('Portarias')}
          />
      </View>
  );
}


function Portarias({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'black' }}>
      <Text style={
            {color: 'white',
            fontSize: 32,
            textAlign: 'center',
            lineHeight: 32
            }}>Qual portaria você deseja iniciar o trajeto ?
      </Text>
      <Button
            title='Rua Piauí'
            color='red'
            justifyContent='center'
            onPress={() => Alert.alert('Button with adjusted color pressed')}
        />
        <Button
            title='Rua Maria Antônia'
            color='red'
            justifyContent='center'
            onPress={() => Alert.alert('Button with adjusted color pressed')}
        />
        <Button
            title='Rua Consolação'
            color='red'
            justifyContent='center'
            onPress={() => Alert.alert('Button with adjusted color pressed')}
        />
        <Button
            title='Rua Itambé'
            color='red'
            justifyContent='center'
            onPress={() => Alert.alert('Button with adjusted color pressed')}
        />
    </View>
  );
}

const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Menu Principal" component={HomeScreen} />
        <Stack.Screen name="Portarias" component={Portarias} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;