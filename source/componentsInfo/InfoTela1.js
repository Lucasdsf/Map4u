import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export function InfoTela1({ navigation }) {
    return (
        <SafeAreaView style={InfoTela1Style.areaView}>
            <View style={InfoTela1Style.direitaTopView}>
                <Text style={InfoTela1Style.direitaText}>PRÉDIO 4</Text>
            </View>
            <View style={InfoTela1Style.direitaBottomView}>
                <Text style={InfoTela1Style.prediosText}>DIREITO E ENGENHARIA</Text>
            </View>
            <View style={InfoTela1Style.esquerdaTopView}>
                <Text style={InfoTela1Style.esquerdaText}>PRÉDIO 5</Text>
            </View>
            <View style={InfoTela1Style.esquerdaBottomView}>
                <Text style={InfoTela1Style.prediosText}>PRÉDIO 5 É O PRÉDIO DAS ENGENHARIAS.</Text>
            </View>
            <View style={InfoTela1Style.frenteTopView}>
                <Text style={InfoTela1Style.frenteText}>PRÉDIO 6</Text>
            </View>
            <View style={InfoTela1Style.frenteBottomView}>
                <Text style={InfoTela1Style.prediosText}>O PRÉDIO 6 É O PRÉDIO DA ESCOLA DE ENGENHARIA. NELE TEM SALAS DE AULA E LABORATÓRIOS DE ENGENHARIA E QUÍMICA. ALÉM DISSO, NO TÉRREO TEM A BIBLIOTECA VOLTADA A ASSUNTOS DE ENGENHARIA E TECNOLOGIA.</Text>
            </View>
            <View style={InfoTela1Style.buttonsView}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('InfoTela2')}>
                    <Text style={InfoTela1Style.buttonText}>PRÓXIMO</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    );
}

const InfoTela1Style = {
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