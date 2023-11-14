import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function PiauiTela2({ navigation }) {
    return (
        <SafeAreaView style={ParaFrentePiauiStyle.areaView}>
            <View style={ParaFrentePiauiStyle.esquerdaTopView}>
                <Text style={ParaFrentePiauiStyle.esquerdaText}>ESQUERDA</Text>
            </View>
            <View style={ParaFrentePiauiStyle.esquerdaBottomView}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('InfoTela7')}>
                    <Text style={ParaFrentePiauiStyle.esquerdaBottomText}>SEGUINDO A ESQUERDA, TEMOS O ACESSO AO SUBSOLO DO PRÉDIO 45 DE CIÊNCIAS SOCIAIS E APLICADAS. O ACESSO AO PRÉDIO É POR MEIO DE ESCADAS.</Text>
                </TouchableOpacity>
            </View>
            <View style={ParaFrentePiauiStyle.frenteTopView}>
                <Text style={ParaFrentePiauiStyle.frenteText}>PARA FRENTE</Text>
            </View>
            <View style={ParaFrentePiauiStyle.frenteBottomView}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('PiauiTela3')}>
                    <Text style={ParaFrentePiauiStyle.frenteBottomText}>SEGUINDO EM FRENTE TEMOS ACESSO AO MACKGRAPHE E AO PRÉDIO 29 COM QUADRAS POLIESPORTIVAS E VESTIÁRIOS. ESSA É A DIREÇÃO INDICADA PARA CHEGAR AO PRÉDIO 31.</Text>
                </TouchableOpacity>
            </View>
            <View style={ParaFrentePiauiStyle.direitaTopView}>
                <Text style={ParaFrentePiauiStyle.direitaText}>DIREITA</Text>
            </View>
            <View style={ParaFrentePiauiStyle.direitaBottomView}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('InfoTela9')}>
                    <Text style={ParaFrentePiauiStyle.direitaBottomText}>SEGUINDO À DIREITA, TEMOS ACESSO AOS VESTIÁRIOS, QUADRAS EXTERNAS E AO PRÉDIO 50 DE CIÊNCIAS BIOLÓGICAS E SAÚDE. O ACESSO AO VESTIÁRIO FEMININO É POR MEIO DE ESCADA.</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={ParaFrentePiauiStyle.buttonVoltarView}
                onPress={() => navigation.navigate('MENU PRINCIPAL')}>
                <Text style={ParaFrentePiauiStyle.buttonVoltarText}>VOLTAR AO INICIO</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const ParaFrentePiauiStyle = {
    areaView: {
        flex: 1,
        backgroundColor: 'white',
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
    esquerdaBottomText: {
        color: 'black',
        fontSize: 18,
        textAlign: 'center',
    },
    frenteBottomText: {
        color: 'black',
        fontSize: 18,
        textAlign: 'center',
    },
    direitaBottomText: {
        color: 'black',
        fontSize: 18,
        textAlign: 'center',
    },
    buttonVoltarView: {
        marginTop: 8,
        backgroundColor: 'rgb(190, 190, 190)',
        borderRadius: 10,
        padding: 16,
        width: '60%',
        alignSelf: 'center'
    },
    buttonVoltarText: {
        color: 'black',
        fontSize: 16,
        textAlign: 'center',
    },
}