import * as React from "react";
import { Button, View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export function InfoTela3({ navigation }) {
    return (
        <SafeAreaView style={InfoTela3Style.areaView}>
            <View style={InfoTela3Style.frenteTopView}>
                <Text style={InfoTela3Style.frenteText}>PRÉDIO 25</Text>
            </View>
            <View style={InfoTela3Style.frenteBottomView}>
                <Text style={InfoTela3Style.prediosText}>O PRÉDIO 25 É UM DOS PRÉDIOS DE DIREITO, MAS TAMBÉM É USADO PARA OUTROS CURSOS. ALÉM DE SALAS DE AULA, ELE TEM NO TÉRREO UM LABORATÓRIO DE ENGENHARIA. POSSUI QUATRO ANDARES QUE PODEM SER ACESSADOS POR MEIO DE ELEVADOR OU ESCADAS. O ACESSO AO PRÉDIO É POR MEIO DE ESCADAS OU RAMPA.</Text>
            </View>
            <View style={InfoTela3Style.frenteTopView}>
                <Text style={InfoTela3Style.frenteText}>PRÉDIO 28</Text>
            </View>
            <View style={InfoTela3Style.frenteBottomView}>
                <Text style={InfoTela3Style.prediosText}>É UM PRÉDIO DO CURSO DE ENGENHARIA E POSSUI LABORATÓRIOS DE FOTOGRAFIA, ÁUDIO E VÍDEO. O ACESSO É POR MEIO DE ESCADAS OU RAMPA E O PRÉDIO POSSUI ELEVADOR.</Text>
            </View>
            <View style={InfoTela3Style.buttonsView}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('InfoTela4')}>
                    <Text style={InfoTela3Style.buttonText}>PRÓXIMO</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const InfoTela3Style = {
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
        backgroundColor: 'rgb(190, 190, 190)',
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