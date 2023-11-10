import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export function Portarias({ navigation }) {
    return (
        <SafeAreaView style={PortariasStyle.PortariasView}>
            <View>
                <Text style={PortariasStyle.PortariasText}>QUAL PORTARIA VOCÊ DESEJA INICIAR O TRAJETO ?</Text>
            </View>
            <View style={PortariasStyle.buttonsView}>
                <TouchableOpacity style={PortariasStyle.button} onPress={() => navigation.navigate('PiauiTela1')}>
                    <Text style={PortariasStyle.buttonText}>RUA PIAUÍ</Text>
                </TouchableOpacity>
            </View>
            <View style={PortariasStyle.buttonsView}>
                <TouchableOpacity style={PortariasStyle.button} onPress={() => navigation.navigate('MariaAntoniaTela1')}>
                    <Text style={PortariasStyle.buttonText1}>RUA MARIA ANTÔNIA</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    );
}

const PortariasStyle = {
    PortariasView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    PortariasText: {
        color: 'black',
        fontSize: 32,
        textAlign: 'center',
        lineHeight: 32,
        fontWeight: 'bold',
        padding: 32,
        margin: 10
    },
    buttonsView: {
        backgroundColor: 'rgb(190, 190, 190)',
        margin: 10,
        borderRadius: 20
    },
    buttonText: {
        color: 'black',
        fontSize: 24,
        textAlign: 'center',
        lineHeight: 32,
        fontWeight: 'bold',
        paddingVertical: 10,
        paddingHorizontal: 93
    },
    buttonText1: {
        color: 'black',
        fontSize: 24,
        textAlign: 'center',
        lineHeight: 32,
        fontWeight: 'bold',
        paddingVertical: 10,
        paddingHorizontal: 40
    }
}