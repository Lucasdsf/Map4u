import * as React from "react";
import { Button, View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export function InfoTela4({ navigation }) {
    return (
        <SafeAreaView style={InfoTela4Style.areaView}>
            <View style={InfoTela4Style.direitaTopView}>
                <Text style={InfoTela4Style.direitaText}>PRÉDIO 29</Text>
            </View>
            <View style={InfoTela4Style.direitaBottomView}>
                <Text style={InfoTela4Style.prediosText}>O PRÉDIO 29 É COMPOSTO POR DOIS ANDARES, NO TÉRREO TEM VESTIÁRIOS FEMININO E MASCULINO E DUAS QUADRAS DE VÔLEI. NO PRIMEIRO ANDAR, TEM UMA QUADRA POLIESPORTIVA, ELA É USADA PARA TREINOS DE HANDEBOL, FUTSAL E BASQUETE. O PRIMEIRO ANDAR PODE SER ACESSADO POR MEIO DE ESCADA OU ELEVADOR.</Text>
            </View>
            <View style={InfoTela4Style.esquerdaTopView}>
                <Text style={InfoTela4Style.esquerdaText}>PRÉDIO 30 - MACKGRAPHE</Text>
            </View>
            <View style={InfoTela4Style.esquerdaBottomView}>
                <Text style={InfoTela4Style.prediosText}>O PRÉDIO 30, MAIS CONHECIDO COMO MACKGRAPHE, É ONDE ESTÃO OS LABORATÓRIOS DE PESQUISA DE GRAFENO E NANOTECNOLOGIA. O ACESSO É POR MEIO DE RAMPA E O PRÉDIO CONTÉM ELEVADOR.</Text>
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