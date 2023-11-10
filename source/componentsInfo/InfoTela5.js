import * as React from "react";
import { Button, View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export function InfoTela5({ navigation }) {
    return (
        <SafeAreaView style={InfoTela5Style.areaView}>
            <View style={InfoTela5Style.frenteTopView}>
                <Text style={InfoTela5Style.frenteText}>PRÉDIO 31 - FCI</Text>
            </View>
            <View style={InfoTela5Style.frenteBottomView}>
                <Text style={InfoTela5Style.prediosText}>O PRÉDIO 31 É O PRÉDIO DE TECNOLOGIA E INFORMAÇÃO. ELE TEM QUATRO ANDARES E PODE SER ACESSADO PELO TÉRREO, POR MEIO DE RAMPA DE ACESSO, OU PELO PRIMEIRO ANDAR, POR MEIO DE ESCADAS. POSSUI UM ELEVADOR E ESCADAS PARA ACESSAR OS ANDARES. NELE TEM LABORATÓRIOS COM NOTEBOOKS ONDE SÃO MINISTRADAS AS AULAS DOS CURSOS DE TECNOLOGIA. NO PRIMEIRO ANDAR FICA A SECRETARIA DA FACULDADE DE TECNOLOGIA E INFORMAÇÃO E A SALA DE PROFESSORES. ALÉM DISSO, NO TERCEIRO ANDAR, TEM UMA DAS ENTRADAS DO LABORATÓRIO DA APPLE ACADEMY.</Text>
            </View>
            <View style={InfoTela5Style.direitaTopView}>
                <Text style={InfoTela5Style.direitaText}>PRÉDIO 33</Text>
            </View>
            <View style={InfoTela5Style.direitaBottomView}>
                <Text style={InfoTela5Style.prediosText}>O PRÉDIO 33 É O OUTRO PRÉDIO DE TECNOLOGIA E INFORMAÇÃO. ELE TEM QUATRO ANDARES COM SALAS E LABORATÓRIOS. NO TÉRREO TEM DOIS LABORATÓRIOS DE ENGENHARIA E, NO TERCEIRO ANDAR, FICA UM DOS ACESSOS AO LABORATÓRIO DA APPLE ACADEMY. O PRÉDIO CONTÉM ELEVADOR.</Text>
            </View>
            <View style={InfoTela5Style.buttonsView}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('InfoTela6')}>
                    <Text style={InfoTela5Style.buttonText}>PRÓXIMO</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const InfoTela5Style = {
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
        backgroundColor: 'rgb(190, 190, 190)',
        neymar: 'neymar'
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