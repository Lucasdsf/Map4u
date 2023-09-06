import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';

const Separator = () => <View style={styles.separator} />;

const App = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={
        {color: 'white',
        fontSize: 32,
        textAlign: 'center',
        lineHeight: 32
        }}>Map4u</Text>
    </View>
    <Separator />
    <View>
      <Button
        title='Iniciar'
        color='red'
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

export default App;