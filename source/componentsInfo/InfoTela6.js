import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export function InfoTela6({ navigation }) {
    return (
        <SafeAreaView style={InfoTela6Style.areaView}>
            <View style={InfoTela6Style.esquerdaTopView}>
                <Text style={InfoTela6Style.esquerdaText}>PRÉDIO 35</Text>
            </View>
            <View style={InfoTela6Style.esquerdaBottomView}>
                <Text style={InfoTela6Style.prediosText}>O PRÉDIO 35 É ONDE TEM OS ACHADOS E PERDIDOS, A GERÊNCIA DE SEGURANÇA DO CAMPUS E O CONTROLE E CHAVES. O ACESSO É POR MEIO DE RAMPA.</Text>
            </View>
            <View style={InfoTela6Style.frenteTopView}>
                <Text style={InfoTela6Style.frenteText}>PRÉDIO 45</Text>
            </View>
            <View style={InfoTela6Style.frenteBottomView}>
                <Text style={InfoTela6Style.prediosText}>O PRÉDIO 45 É O CENTRO DE CIÊNCIAS SOCIAIS E APLICADAS. ELE TEM SEIS ANDARES E PODE SER ACESSADO ATRAVÉS DO SUBSOLO OU DO PRIMEIRO ANDAR, POR MEIO DE ESCADAS, MAS NO PRÉDIO TEM ELEVADORES E ESCADAS PARA ACESSAR OS OUTROS ANDARES. ALÉM DE SALAS DE AULA, ELE TEM UMA BIBLIOTECA VOLTADA ÀS MATÉRIAS DE CIÊNCIAS SOCIAIS NO SUBSOLO 1 E 2 COM SALAS PRIVATIVAS DE ESTUDO. E, NO TÉRREO, TEM UMA PRAÇA DE ALIMENTAÇÃO.</Text>
            </View>
            <View style={InfoTela6Style.buttonsView}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('InfoTela7')}>
                    <Text style={InfoTela6Style.buttonText}>PRÓXIMO</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const InfoTela6Style = {
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