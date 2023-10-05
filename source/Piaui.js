import * as React from 'react';
import {
  Button,
  View,
  Text
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export function Piaui({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <View style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10, padding: 16, backgroundColor: 'red' }}>
        <Text style={{
          color: 'white',
          fontSize: 24
        }}>Esquerda</Text>
      </View>
      <View style={{ borderBottomLeftRadius: 10, borderBottomRightRadius: 10, padding: 16, marginBottom: 16, backgroundColor: 'gray' }}>
        <Button
          title='Seguindo à esquerda temos acesso ao prédio 46. O prédio 46 faz parte dos prédios da escola, nele têm salas de Educação Infantil e Fundamental I. Apesar disso, nele é onde está localizado o ambulatório.'
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
          onPress={() => navigation.navigate('ParaFrentePiaui')} />
      </View>
      <View style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10, padding: 16, backgroundColor: 'red' }}>
        <Text style={{
          color: 'white',
          fontSize: 24
        }}>Direita</Text>
      </View>
      <View style={{ borderBottomLeftRadius: 10, borderBottomRightRadius: 10, padding: 16, marginBottom: 16, backgroundColor: 'gray' }}>
        <Button
          title='Seguindo à direita, temos acesso aos prédios 48 e 49.'
          color='black' />
      </View>
    </SafeAreaView>
  );
}
