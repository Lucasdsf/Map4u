import * as React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export function InfoTela8({ navigation }) {
    return (
        <SafeAreaView style={InfoTela8Style.areaView}>
            <View style={InfoTela8Style.esquerdaTopView}>
                <Text style={InfoTela8Style.esquerdaText}>PRÉDIO 49</Text>
            </View>
            <View style={InfoTela8Style.esquerdaBottomView}>
                <Text style={InfoTela8Style.prediosText}>O PRÉDIO 49 É O CENTRO DE COMUNICAÇÃO E LETRAS, POSSUI SALAS DO CURSO DE PUBLICIDADE, ENGENHARIA E OUTROS CURSOS DE EXATAS. POSSUI ACESSO POR ESCADAS E ELEVADOR.</Text>
            </View>
            <View style={InfoTela8Style.esquerdaTopView}>
                <Text style={InfoTela8Style.esquerdaText}>PRÉDIO 50</Text>
            </View>
            <View style={InfoTela8Style.esquerdaBottomView}>
                <Text style={InfoTela8Style.prediosText}>O PRÉDIO 50 É O CENTRO DE CIÊNCIAS BIOLÓGICAS E DA SAÚDE, ALÉM DE SER O PRÉDIO DA CHANCELARIA. O ACESSO É POR MEIO DE RAMPA.</Text>
            </View>
            <View style={InfoTela8Style.frenteTopView}>
                <Text style={InfoTela8Style.frenteText}>QUADRAS EXTERNAS</Text>
            </View>
            <View style={InfoTela8Style.frenteBottomView}>
                <Text style={InfoTela8Style.prediosText}>SÃO QUADRAS POLIESPORTIVAS ONDE OCORREM TREINOS DE FUTSAL, VÔLEI, HANDEBOL, BASQUETE E RUGBY. O ACESSO É POR MEIO DE RAMPA.</Text>
            </View>
        </SafeAreaView>
    );
}

const InfoTela8Style = {
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