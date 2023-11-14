import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export function Chegou31({ navigation }) {
    return (
        <SafeAreaView style={Chegou31Style.areaView}>
            <View style={Chegou31Style.container}>
                <View style={Chegou31Style.textBlock}>
                <Image
                    source={require('./fci.jpg')}
                    style={Chegou31Style.image}
                />
                    <Text style={Chegou31Style.esquerdaText}>VOCÊ CHEGOU AO PRÉDIO 31</Text>
                </View>
                <TouchableOpacity
                    style={Chegou31Style.buttonView}
                    onPress={() => navigation.navigate('MENU PRINCIPAL')}>
                    <Text style={Chegou31Style.buttonText}>VOLTAR AO INICIO</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const Chegou31Style = StyleSheet.create({
    areaView: {
        flex: 1
    },
    container: {
        flex: 1,
        alignItems: 'center',
    },
    image: {
        width: 300,
        height: 200,
        resizeMode: 'contain'
    },
    textBlock: {
        width: 350,
        padding: 16,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    
    esquerdaText: {
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonView: {
        marginTop: 8,
        backgroundColor: 'rgb(190, 190, 190)',
        borderRadius: 10,
        padding: 16,
        width: '60%',
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold'
    }
});
