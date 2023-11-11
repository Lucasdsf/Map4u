import * as React from "react";
import { Button, View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export function InfoTela2({ navigation }) {
    return (
        <SafeAreaView style={InfoTela2Style.areaView}>
            <View style={InfoTela2Style.esquerdaTopView}>
                <Text style={InfoTela2Style.esquerdaText}>PRÉDIO 19</Text>
            </View>
            <View style={InfoTela2Style.esquerdaBottomView}>
                <Text style={InfoTela2Style.prediosText}>O PRÉDIO 19 POSSUI SALAS DO ENSINO MÉDIO DA ESCOLA E NO TÉRREO POSSUI UMA PRAÇA DE ALIMENTAÇÃO. O ACESSO É POR MEIO DE ESCADAS E RAMPA.</Text>
            </View>
            <View style={InfoTela2Style.direitaTopView}>
                <Text style={InfoTela2Style.direitaText}>PRÉDIO 20</Text>
            </View>
            <View style={InfoTela2Style.direitaBottomView}>
                <Text style={InfoTela2Style.prediosText}>O PRÉDIO 20 É ONDE TEM A QUADRA INTERNA DE BASQUETE, VESTIÁRIOS E UMA DAS PAPELARIAS NA UNIVERSIDADE. O ACESSO É POR MEIO DE ESCADAS OU RAMPAS DE ACESSO.</Text>
            </View>
            <View style={InfoTela2Style.esquerdaTopView}>
                <Text style={InfoTela2Style.esquerdaText}>PRÉDIO 23</Text>
            </View>
            <View style={InfoTela2Style.esquerdaBottomView}>
                <Text style={InfoTela2Style.prediosText}>O PRÉDIO 23 É ONDE TEM A ENFERMARIA E LABORATÓRIOS DE ARQUITETURA E URBANISMO. O ACESSO É POR MEIO DE RAMPAS.</Text>
            </View>
            <View style={InfoTela2Style.buttonsView}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('InfoTela3')}>
                    <Text style={InfoTela2Style.buttonText}>PRÓXIMO</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const InfoTela2Style = {
    areaView: {
        flex: 1,
        backgroundColor: 'white'
    },
    esquerdaTopView: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: 16,
        backgroundColor: 'gray'
    },
    esquerdaText: {
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold'
    },
    esquerdaBottomView: {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: 16,
        marginBottom: 16,
        backgroundColor: 'rgb(190, 190, 190)'
    },
    frenteTopView: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: 16,
        backgroundColor: 'gray'
    },
    frenteText: {
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold'
    },
    frenteBottomView: {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: 16,
        marginBottom: 16,
        backgroundColor: 'rgb(190, 190, 190)'
    },
    direitaTopView: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: 16,
        backgroundColor: 'gray'
    },
    direitaText: {
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold'
    },
    direitaBottomView: {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: 16,
        marginBottom: 16,
        backgroundColor: 'rgb(190, 190, 190)'

    },
    buttonsView: {
        backgroundColor: 'gray',
        margin: 10,
        borderRadius: 20
    },
    buttonText: {
        color: 'white',
        fontSize: 24,
        textAlign: 'center',
        lineHeight: 32,
        fontWeight: 'bold',
        paddingVertical: 10,
        paddingHorizontal: 90
    },
    prediosText: {
        color: 'black',
        fontSize: 18,
        textAlign: 'center'
    }
}