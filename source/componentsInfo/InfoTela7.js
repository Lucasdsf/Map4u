import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export function InfoTela7({ navigation }) {
    return (
        <SafeAreaView style={InfoTela7Style.areaView}>
            <View style={InfoTela7Style.direitaTopView}>
                <Text style={InfoTela7Style.direitaText}>PRÉDIO 48</Text>
            </View>
            <View style={InfoTela7Style.direitaBottomView}>
                <Text style={InfoTela7Style.prediosText}>COLÉGIO P. MACK NOS DOIS PRIMEIROS ANDARES E FACULDADE NO TERCEIRO.
                    POSSUI DUAS ENTRADAS, COM ELEVADOR E RAMPA DE ENTRADA. NA PARTE DE TRÁS DO PRÉDIO HÁ BANHEIROS COM ACESSIBILIDADE.
                </Text>
            </View>
            <View style={InfoTela7Style.esquerdaTopView}>
                <Text style={InfoTela7Style.esquerdaText}>PRÉDIO 49</Text>
            </View>
            <View style={InfoTela7Style.esquerdaBottomView}>
                <Text style={InfoTela7Style.prediosText}>CENTRO DE COMUNICAÇÃO E LETRAS, POSSUI SALAS DO CURSO DE PUBLICIDADE, ENGENHARIA E OUTROS CURSOS DE EXATAS. POSSUI ACESSO POR ESCADAS E ELEVADOR.</Text>
            </View>
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