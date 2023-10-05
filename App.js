import * as React from 'react';
import {
  Button,
  View,
  Text,
  Alert
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';


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
            onPress={() => navigation.navigate('Piaui')}
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

function Piaui ({navigation}) {
  return (
  <SafeAreaView style={{flex: 1,backgroundColor: 'black' }}>
    <View style={{borderTopLeftRadius: 10,borderTopRightRadius: 10, padding: 16, backgroundColor: 'red'}}>
      <Text style = {{
        color: 'white',
        fontSize: 24
      }}>Esquerda</Text>
    </View>
    <View style={{borderBottomLeftRadius: 10, borderBottomRightRadius: 10, padding: 16, marginBottom: 16, backgroundColor: 'gray'}}>
      <Button
        title='Seguindo à esquerda temos acesso ao prédio 46. O prédio 46 faz parte dos prédios da escola, nele têm salas de Educação Infantil e Fundamental I. Apesar disso, nele é onde está localizado o ambulatório.'
        color='black'
      />
    </View>
    <View style={{borderTopLeftRadius: 10, borderTopRightRadius: 10, padding: 16,backgroundColor: 'red'}}>
      <Text style = {{
        color: 'white',
        fontSize: 24
      }}>Para Frente</Text>
    </View>
    <View style={{borderBottomLeftRadius: 10, borderBottomRightRadius: 10, padding: 16, marginBottom: 16, backgroundColor: 'gray'}}>
      <Button
        title='Seguindo em frente temos acesso ao subsolo do prédio 45, às quadras externas e vestiários, ao Mackgraphe e ao prédio 29.'
        color='black'
        onPress={() => navigation.navigate('ParaFrentePiaui')}
      />
    </View>
    <View style={{borderTopLeftRadius: 10, borderTopRightRadius: 10, padding: 16,backgroundColor: 'red'}}>
      <Text style = {{
        color: 'white',
        fontSize: 24
      }}>Direita</Text>
    </View>
    <View style={{borderBottomLeftRadius: 10, borderBottomRightRadius: 10, padding: 16, marginBottom: 16, backgroundColor: 'gray'}}>
      <Button
        title='Seguindo à direita, temos acesso aos prédios 48 e 49.'
        color='black'
      />
    </View>
  </SafeAreaView>
  );
}

function ParaFrentePiaui ({navigation}) {
  return (
    <SafeAreaView style={{flex: 1,backgroundColor: 'black' }}>
      <View style={{borderTopLeftRadius: 10, borderTopRightRadius: 10, padding: 16,backgroundColor: 'red'}}>
        <View>
          <Text style = {{
            color: 'white',
            fontSize: 24
          }}>Esquerda</Text>
        </View>
      </View>
      <View style={{borderBottomLeftRadius: 10, borderBottomRightRadius: 10, padding: 16, marginBottom: 16, backgroundColor: 'gray'}}>
        <Button
          title='Seguindo a esquerda, temos o acesso ao subsolo do prédio 45. O prédio 45 é o Centro de Ciências Sociais e Aplicadas. Ele tem 5 andares e pode ser acessado através do subsolo ou do primeiro andar. Além de salas de aula, ele tem uma biblioteca voltada às matérias de ciências sociais no subsolo 1 e 2 com salas privativas de estudo. E, no primeiro andar, tem uma praça de alimentação'
          color='black'
        />
      </View>
      <View style={{borderTopLeftRadius: 10, borderTopRightRadius: 10, padding: 16,backgroundColor: 'red'}}>
        <Text style = {{
          color: 'white',
          fontSize: 24
        }}>Para Frente</Text>
      </View>
      <View style={{borderBottomLeftRadius: 10, borderBottomRightRadius: 10, padding: 16, marginBottom: 16, backgroundColor: 'gray'}}>
        <Button
          title='Seguindo em frente temos acesso ao subsolo do prédio 45, às quadras externas e vestiários, ao Mackgraphe e ao prédio 29.'
          color='black'
          onPress={() => navigation.navigate('ParaFrente45')}
        />
      </View>
      <View style={{borderTopLeftRadius: 10, borderTopRightRadius: 10, padding: 16,backgroundColor: 'red'}}>
        <Text style = {{
          color: 'white',
          fontSize: 24
        }}>Direita</Text>
      </View>
      <View style={{borderBottomLeftRadius: 10, borderBottomRightRadius: 10, padding: 16, marginBottom: 16, backgroundColor: 'gray'}}>
        <Button
          title='Acesso aos vestiários, quadras externas e prédio 50. O prédio 50 é o centro de ciências biológicas e da saúde.'
          color='black'
        />
      </View>
    </SafeAreaView>
  );
}

function ParaFrente45 ({navigation}) {
  return (
    <SafeAreaView style={{flex: 1,backgroundColor: 'black' }}>
    <View style={{borderTopLeftRadius: 10, borderTopRightRadius: 10, padding: 16,backgroundColor: 'red'}}>
      <Text style = {{
        color: 'white',
        fontSize: 24
      }}>Esquerda</Text>
    </View>
    <View style={{borderBottomLeftRadius: 10, borderBottomRightRadius: 10, padding: 16, marginBottom: 16, backgroundColor: 'gray'}}>
      <Button
        title='Área de descanso.'
        color='black'
      />
    </View>
    <View style={{borderTopLeftRadius: 10, borderTopRightRadius: 10, padding: 16,backgroundColor: 'red'}}>
      <Text style = {{
        color: 'white',
        fontSize: 24
      }}>Para Frente</Text>
    </View>
    <View style={{borderBottomLeftRadius: 10, borderBottomRightRadius: 10, padding: 16, marginBottom: 16, backgroundColor: 'gray'}}>
      <Button
        title='Seguindo em frente temos acesso ao prédio 31.'
        color='black'
        onPress={() => navigation.navigate('ParaFrente25')}
      />
    </View>
    <View style={{borderTopLeftRadius: 10, borderTopRightRadius: 10, padding: 16,backgroundColor: 'red'}}>
      <Text style = {{
        color: 'white',
        fontSize: 24
      }}>Direita</Text>
    </View>
    <View style={{borderBottomLeftRadius: 10, borderBottomRightRadius: 10, padding: 16, marginBottom: 16, backgroundColor: 'gray'}}>
      <Button
        title='Acesso ao Mackgraphe e às quadras do prédio 29'
        color='black'
      />
    </View>
  </SafeAreaView>
  );
}

function ParaFrente25 ({navigation}) {
  return (
    <SafeAreaView style={{flex: 1,backgroundColor: 'black' }}>
    <View style={{borderTopLeftRadius: 10, borderTopRightRadius: 10, padding: 16,backgroundColor: 'red'}}>
      <Text style = {{
        color: 'white',
        fontSize: 24
      }}>Esquerda</Text>
    </View>
    <View style={{borderBottomLeftRadius: 10, borderBottomRightRadius: 10, padding: 16, marginBottom: 16, backgroundColor: 'gray'}}>
      <Button
        title='Borges e prédio 25.'
        color='black'
      />
    </View>
    <View style={{borderTopLeftRadius: 10, borderTopRightRadius: 10, padding: 16,backgroundColor: 'red'}}>
      <Text style = {{
        color: 'white',
        fontSize: 24
      }}>Direita</Text>
    </View>
    <View style={{borderBottomLeftRadius: 10, borderBottomRightRadius: 10, padding: 16, marginBottom: 16, backgroundColor: 'gray'}}>
      <Button
        title='Acesso ao prédio 31 e ao 33.'
        color='black'
        onPress={() => navigation.navigate('Predio31')}
      />
    </View>
  </SafeAreaView>
  );
}

function Predio31 ({navigation}) {
  return (
    <SafeAreaView style={{flex: 1,backgroundColor: 'black' }}>
    <View style={{borderTopLeftRadius: 10, borderTopRightRadius: 10, padding: 16,backgroundColor: 'red'}}>
      <Text style = {{
        color: 'white',
        fontSize: 24
      }}>Esquerda</Text>
    </View>
    <View style={{borderBottomLeftRadius: 10, borderBottomRightRadius: 10, padding: 16, marginBottom: 16, backgroundColor: 'gray'}}>
      <Button
        title='Prédio 31.'
        color='black'
      />
    </View>
    <View style={{borderTopLeftRadius: 10, borderTopRightRadius: 10, padding: 16,backgroundColor: 'red'}}>
      <Text style = {{
        color: 'white',
        fontSize: 24
      }}>Para Frente</Text>
    </View>
    <View style={{borderBottomLeftRadius: 10, borderBottomRightRadius: 10, padding: 16, marginBottom: 16, backgroundColor: 'gray'}}>
      <Button
        title='Acesso ao prédio 33.'
        color='black'
      />
    </View>
    <View style={{borderTopLeftRadius: 10, borderTopRightRadius: 10, padding: 16,backgroundColor: 'red'}}>
      <Text style = {{
        color: 'white',
        fontSize: 24
      }}>Direita</Text>
    </View>
    <View style={{borderBottomLeftRadius: 10, borderBottomRightRadius: 10, padding: 16, marginBottom: 16, backgroundColor: 'gray'}}>
      <Button
        title='Mackgraphe.'
        color='black'
      />
    </View>
  </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="HomeScreen"
        screenOptions={{ headerStyle: { backgroundColor: 'red' } }}>
        <Stack.Screen 
          name="Menu Principal"
          component={HomeScreen}
          options={{headerBackTitleVisible: false}}
        />
        <Stack.Screen 
          name="Portarias" 
          component={Portarias}
          options={{headerBackTitleVisible: false}}
        />
        <Stack.Screen 
          name="Piaui" 
          component={Piaui}
          options={{
            title: 'Rua Piauí',
            headerBackTitleVisible: false}}
        />
        <Stack.Screen 
          name="ParaFrentePiaui" 
          component={ParaFrentePiaui}
          options={{
            title: 'Para Frente',
            headerBackTitleVisible: true}}
        />
        <Stack.Screen 
          name="ParaFrente45" 
          component={ParaFrente45}
          options={{
            title: 'Para Frente',
            headerBackTitleVisible: false}}
        />
        <Stack.Screen 
          name="ParaFrente25" 
          component={ParaFrente25}
          options={{
            title: 'Para Frente',
            headerBackTitleVisible: false}}
        />
        <Stack.Screen 
          name="Predio31" 
          component={Predio31}
          options={{
            title: 'Para Direita',
            headerBackTitleVisible: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;