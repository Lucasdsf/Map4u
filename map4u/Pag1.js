import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';


const Pag1 = () => (
    <SafeAreaView style={styles.container}>
        <View>
        <Text style={
            {color: 'white',
            fontSize: 32,
            textAlign: 'center',
            lineHeight: 32
            }}>Qual portaria você deseja iniciar o trajeto ?</Text>
        </View>
        <View>
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
    </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
});

export default Pag1;