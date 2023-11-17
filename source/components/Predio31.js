import * as React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";

export function Predio31({ navigation }) {
    return (
        <SafeAreaView style={PortariasStyle.PortariasView}>
            <View>
                <Text style={PortariasStyle.PortariasText}>
                    ESCOLHA UM DESTINO
                </Text>
            </View>
            <View style={PortariasStyle.buttonsView}>
                <TouchableOpacity
                    style={PortariasStyle.button}
                    onPress={() => navigation.navigate('Portarias')}>
                    <Text style={PortariasStyle.buttonText}>PRÉDIO 31 - FCI</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const PortariasStyle = {
    PortariasView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    PortariasText: {
        color: 'black',
        fontSize: 32,
        textAlign: 'center',
        lineHeight: 32,
        fontWeight: 'bold',
        padding: 32
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
        paddingHorizontal: 90
    },
    buttonText1: {
        color: 'black',
        fontSize: 24,
        textAlign: 'center',
        lineHeight: 32,
        fontWeight: 'bold',
        paddingVertical: 10,
        paddingHorizontal: 100
    }
}
