import * as React from "react";
import { Button, View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export function InfoTela5({ navigation }) {
    return (
        <SafeAreaView style={InfoTela5Style.areaView}>
            <View style={InfoTela5Style.direitaTopView}>
                <Text style={InfoTela5Style.direitaText}>PRÉDIO 33</Text>
            </View>
            <View style={InfoTela5Style.direitaBottomView}>
                <Text style={InfoTela5Style.prediosText}>O PRÉDIO 33 É O OUTRO PRÉDIO DE TECNOLOGIA E INFORMAÇÃO. ELE TEM QUATRO ANDARES COM SALAS E LABORATÓRIOS. NO TÉRREO TEM DOIS LABORATÓRIOS DE ENGENHARIA E, NO TERCEIRO ANDAR, FICA UM DOS ACESSOS AO LABORATÓRIO DA APPLE ACADEMY.</Text>
            </View>
            <View style={InfoTela5Style.esquerdaTopView}>
                <Text style={InfoTela5Style.esquerdaText}>PRÉDIO 35</Text>
            </View>
            <View style={InfoTela5Style.esquerdaBottomView}>
                <Text style={InfoTela5Style.prediosText}>O PRÉDIO 35 É ONDE TEM OS ACHADOS E PERDIDOS, A GERÊNCIA DE SEGURANÇA DO CAMPUS E O CONTROLE E CHAVES.</Text>
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