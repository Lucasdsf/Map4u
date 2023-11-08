import * as React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";

export function HomeScreen({ navigation }) {
    return (
        <SafeAreaView style={PortariasStyle.PortariasView}>
            <View>
                <Text style={PortariasStyle.PortariasText}>
                    MAP4U - MACKENZIE
                </Text>
            </View>
            <View style={PortariasStyle.buttonsView}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Predio31')}>
                    <Text style={PortariasStyle.buttonText}>INICIAR</Text>
                </TouchableOpacity>
            </View>
            <View style={PortariasStyle.buttonsView}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('InfoTela1')}>
                    <Text style={PortariasStyle.buttonText1}>MAIS INFORMAÇÕES</Text>
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
        backgroundColor: 'white',
    },
    PortariasText: {
        color: 'black',
        fontSize: 32,
        textAlign: 'center',
        lineHeight: 32,
        fontWeight: 'bold',
        padding: 32,
        fontFamily: 'Arial'
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
        paddingHorizontal: 105,
        fontFamily: 'Arial'
    },
    buttonText1: {
        color: 'black',
        fontSize: 24,
        textAlign: 'center',
        lineHeight: 32,
        fontWeight: 'bold',
        paddingVertical: 10,
        paddingHorizontal: 40,
        fontFamily: 'Arial'
    }
}
