import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export function InfoTela6({ navigation }) {
    return (
        <SafeAreaView style={InfoTela6Style.areaView}>
            <View style={InfoTela6Style.frenteTopView}>
                <Text style={InfoTela6Style.frenteText}>PRÉDIO 45</Text>
            </View>
            <View style={InfoTela6Style.frenteBottomView}>
                <Text style={InfoTela6Style.prediosText}>O PRÉDIO 45 É O CENTRO DE CIÊNCIAS SOCIAIS E APLICADAS. ELE TEM CINCO ANDARES E PODE SER ACESSADO ATRAVÉS DO SUBSOLO OU DO PRIMEIRO ANDAR, POR MEIO DE ESCADAS, MAS NO PRÉDIO TEM ELEVADORES E ESCADAS PARA ACESSAR OS OUTROS ANDARES. ALÉM DE SALAS DE AULA, ELE TEM UMA BIBLIOTECA VOLTADA ÀS MATÉRIAS DE CIÊNCIAS SOCIAIS NO SUBSOLO 1 E 2 COM SALAS PRIVATIVAS DE ESTUDO. E, NO PRIMEIRO ANDAR, TEM UMA PRAÇA DE ALIMENTAÇÃO.
                    POSSUI 6 ANDARES COM SALAS DE AULA.
                </Text>
            </View>
            <View style={InfoTela6Style.direitaTopView}>
                <Text style={InfoTela6Style.direitaText}>PRÉDIO 46</Text>
            </View>
            <View style={InfoTela6Style.direitaBottomView}>
                <Text style={InfoTela6Style.prediosText}>O PRÉDIO 46 FAZ PARTE DOS PRÉDIOS DA ESCOLA, NELE TÊM SALAS DE EDUCAÇÃO INFANTIL E FUNDAMENTAL I. ALÉM DISSO, TAMBÉM POSSUI UM AMBULATÓRIO.</Text>
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
        fontFamily: 'Arial',
        fontWeight: 'bold'
    },
    esquerdaBottomView: {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: 16,
        marginBottom: 16,
        backgroundColor: 'rgb(190, 190, 190)',
        fontFamily: 'Arial'
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
        fontFamily: 'Arial',
        fontWeight: 'bold'
    },
    frenteBottomView: {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: 16,
        marginBottom: 16,
        backgroundColor: 'rgb(190, 190, 190)',
        fontFamily: 'Arial'
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
        fontFamily: 'Arial',
        fontWeight: 'bold'
    },
    direitaBottomView: {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: 16,
        marginBottom: 16,
        backgroundColor: 'rgb(190, 190, 190)',
        fontFamily: 'Arial',

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
        paddingHorizontal: 90,
        fontFamily: 'Arial'
    },
    prediosText: {
        color: 'black',
        fontSize: 18,
        fontFamily: 'Arial',
        textAlign: 'center'
    }
}