import * as React from 'react';
import {
  Button,
  View,
  Text
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export function ParaFrentePiaui({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <View style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10, padding: 16, backgroundColor: 'red' }}>
        <View>
          <Text style={{
            color: 'white',
            fontSize: 24
          }}>Esquerda</Text>
        </View>
      </View>
      <View style={{ borderBottomLeftRadius: 10, borderBottomRightRadius: 10, padding: 16, marginBottom: 16, backgroundColor: 'gray' }}>
        <Button
          title='Seguindo a esquerda, temos o acesso ao subsolo do prédio 45. O prédio 45 é o Centro de Ciências Sociais e Aplicadas. Ele tem 5 andares e pode ser acessado através do subsolo ou do primeiro andar. Além de salas de aula, ele tem uma biblioteca voltada às matérias de ciências sociais no subsolo 1 e 2 com salas privativas de estudo. E, no primeiro andar, tem uma praça de alimentação'
          color='black' />
      </View>
      <View style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10, padding: 16, backgroundColor: 'red' }}>
        <Text style={{
          color: 'white',
          fontSize: 24
        }}>Para Frente</Text>
      </View>
      <View style={{ borderBottomLeftRadius: 10, borderBottomRightRadius: 10, padding: 16, marginBottom: 16, backgroundColor: 'gray' }}>
        <Button
          title='Seguindo em frente temos acesso ao subsolo do prédio 45, às quadras externas e vestiários, ao Mackgraphe e ao prédio 29.'
          color='black'
          onPress={() => navigation.navigate('ParaFrente45')} />
      </View>
      <View style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10, padding: 16, backgroundColor: 'red' }}>
        <Text style={{
          color: 'white',
          fontSize: 24
        }}>Direita</Text>
      </View>
      <View style={{ borderBottomLeftRadius: 10, borderBottomRightRadius: 10, padding: 16, marginBottom: 16, backgroundColor: 'gray' }}>
        <Button
          title='Acesso aos vestiários, quadras externas e prédio 50. O prédio 50 é o centro de ciências biológicas e da saúde.'
          color='black' />
      </View>
    </SafeAreaView>
  );
}
