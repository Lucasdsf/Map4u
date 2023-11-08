import * as React from "react";
import { Button, View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export function InfoTela4({ navigation }) {
    return (
        <SafeAreaView style={InfoTela4Style.areaView}>
            <View style={InfoTela4Style.esquerdaTopView}>
                <Text style={InfoTela4Style.esquerdaText}>PRÉDIO 30 - MACKGRAPHE</Text>
            </View>
            <View style={InfoTela4Style.esquerdaBottomView}>
                <Text style={InfoTela4Style.prediosText}>O PRÉDIO 30, MAIS CONHECIDO COMO MACKGRAPHE, É ONDE ESTÃO OS LABORATÓRIOS DE PESQUISA DE GRAFENO E NANOTECNOLOGIA.</Text>
            </View>
            <View style={InfoTela4Style.frenteTopView}>
                <Text style={InfoTela4Style.frenteText}>PRÉDIO 31</Text>
            </View>
            <View style={InfoTela4Style.frenteBottomView}>
                <Text style={InfoTela4Style.prediosText}>O PRÉDIO 31 É O PRÉDIO DE TECNOLOGIA E INFORMAÇÃO. ELE TEM QUATRO ANDARES E PODE SER ACESSADO PELO TÉRREO, POR MEIO DE RAMPA DE ACESSO, OU PELO PRIMEIRO ANDAR, POR MEIO DE ESCADAS. POSSUI UM ELEVADOR E ESCADAS PARA ACESSAR OS ANDARES. NELE TEM LABORATÓRIOS COM NOTEBOOKS ONDE SÃO MINISTRADAS AS AULAS DOS CURSOS DE TECNOLOGIA. NO PRIMEIRO ANDAR FICA A SECRETARIA DA FACULDADE DE TECNOLOGIA E INFORMAÇÃO E A SALA DE PROFESSORES. ALÉM DISSO, NO TERCEIRO ANDAR, TEM UMA DAS ENTRADAS DO LABORATÓRIO DA APPLE ACADEMY.</Text>
            </View>
            <View style={InfoTela4Style.buttonsView}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('InfoTela5')}>
                    <Text style={InfoTela4Style.buttonText}>PRÓXIMO</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const InfoTela4Style = {
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