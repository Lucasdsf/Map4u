import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export function InfoTela7({ navigation }) {
    return (
        <SafeAreaView style={InfoTela7Style.areaView}>
            <View style={InfoTela7Style.direitaTopView}>
                <Text style={InfoTela7Style.direitaText}>PRÉDIO 46</Text>
            </View>
            <View style={InfoTela7Style.direitaBottomView}>
                <Text style={InfoTela7Style.prediosText}>O PRÉDIO 46 FAZ PARTE DOS PRÉDIOS DA ESCOLA, O QUAL POSSUI SALAS DE EDUCAÇÃO INFANTIL E FUNDAMENTAL I. ALÉM DISSO, TAMBÉM POSSUI UM AMBULATÓRIO. O ACESSO É POR MEIO DE RAMPA.</Text>
            </View>
            <View style={InfoTela7Style.direitaTopView}>
                <Text style={InfoTela7Style.direitaText}>PRÉDIO 48</Text>
            </View>
            <View style={InfoTela7Style.direitaBottomView}>
                <Text style={InfoTela7Style.prediosText}>O PRÉDIO 48 TEM OS DOIS PRIMEIROS ANDARES FOCADO EM AULAS DO COLÉGIO E NO TERCEIRO AULAS DA FACULDADE. ELE POSSUI DUAS ENTRADAS, COM ELEVADOR E RAMPA. NA PARTE DE TRÁS DO PRÉDIO HÁ BANHEIROS COM ACESSIBILIDADE.</Text>
            </View>
            <View style={InfoTela7Style.buttonsView}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('InfoTela8')}>
                    <Text style={InfoTela7Style.buttonText}>PRÓXIMO</Text>
                </TouchableOpacity>
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