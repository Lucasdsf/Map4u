import * as React from "react";
import { Button, View, Text, ImageBackground } from "react-native";


export function HomeScreen({ navigation }) {
  return (
    <ImageBackground source={require('../assets/baixo.png')} style={{ flex: 1, resizeMode: 'cover', justifyContent: 'center' }}>
      <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(52, 52, 52, 0.8)' }}>
        <Text style={{
          color: 'white',
          fontSize: 32,
          textAlign: 'center',
          lineHeight: 32,
        }}>Map4u</Text>
        <Button
          title='Iniciar'
          color='red'
          onPress={() => navigation.navigate('Portarias')} />
      </View>
    </ImageBackground>
  );
}
