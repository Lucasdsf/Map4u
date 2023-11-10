import * as React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export function InfoTela8 ({ navigation }) {
    return (
        <SafeAreaView style={InfoTela7Style.areaView}>
            <View style={InfoTela7Style.esquerdaTopView}>
                <Text style={InfoTela7Style.esquerdaText}>PRÉDIO 50</Text>
            </View>
            <View style={InfoTela7Style.esquerdaBottomView}>
                <Text style={InfoTela7Style.prediosText}>O PRÉDIO 50 É O CENTRO DE CIÊNCIAS BIOLÓGICAS E DA SAÚDE, ALÉM DE SER O PRÉDIO DA CHANCELARIA.</Text>
            </View>
            <View style={InfoTela7Style.frenteTopView}>
                <Text style={InfoTela7Style.frenteText}>QUADRAS EXTERNAS</Text>
            </View>
            <View style={InfoTela7Style.frenteBottomView}>
                <Text style={InfoTela7Style.prediosText}>SÃO QUADRAS POLIESPORTIVAS ONDE OCORREM TREINOS DE FUTSAL, VÔLEI, HANDEBOL, BASQUETE E RUGBY.</Text>
            </View>
        </SafeAreaView>
    );
}

const InfoTela7Style = {
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