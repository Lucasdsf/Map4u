import * as React from 'react';
import {
  Button,
  View,
  Text
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export function ParaFrente45({ navigation }) {
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
          title='Área de descanso.'
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
          title='Seguindo em frente temos acesso ao prédio 31.'
          color='black'
          onPress={() => navigation.navigate('ParaFrente25')} />
      </View>
      <View style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10, padding: 16, backgroundColor: 'red' }}>
        <Text style={{
          color: 'white',
          fontSize: 24
        }}>Direita</Text>
      </View>
      <View style={{ borderBottomLeftRadius: 10, borderBottomRightRadius: 10, padding: 16, marginBottom: 16, backgroundColor: 'gray' }}>
        <Button
          title='Acesso ao Mackgraphe e às quadras do prédio 29'
          color='black' />
      </View>
    </SafeAreaView>
  );
}
