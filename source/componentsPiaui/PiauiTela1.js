import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function PiauiTela1({ navigation }) {
    return (
        <SafeAreaView style={PiauiTela1Style.areaView}>
            <View style={PiauiTela1Style.esquerdaTopView}>
                <Text style={PiauiTela1Style.esquerdaText}>ESQUERDA</Text>
            </View>
            <View style={PiauiTela1Style.esquerdaBottomView}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('InfoTela7')}>
                    <Text style={PiauiTela1Style.esquerdaBottomText}>SEGUINDO À ESQUERDA TEMOS ACESSO AO PRÉDIO 46.</Text>
                </TouchableOpacity>
            </View>
            <View style={PiauiTela1Style.frenteTopView}>
                <Text style={PiauiTela1Style.frenteText}>PARA FRENTE</Text>
            </View>
            <View style={PiauiTela1Style.frenteBottomView}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('PiauiTela7')}>
                    <Text style={PiauiTela1Style.frenteBottomText}>SEGUINDO EM FRENTE TEMOS ACESSO AO SUBSOLO DO PRÉDIO 45, ÀS QUADRAS EXTERNAS E VESTIÁRIOS, AO MACKGRAPHE E AO PRÉDIO 29. ESSA É A DIREÇÃO INDICADA PARA CHEGAR AO PRÉDIO 31.</Text>
                </TouchableOpacity>
            </View>
            <View style={PiauiTela1Style.direitaTopView}>
                <Text style={PiauiTela1Style.direitaText}>DIREITA</Text>
            </View>
            <View style={PiauiTela1Style.direitaBottomView}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('InfoTela8')}>
                    <Text style={PiauiTela1Style.direitaBottomText}>SEGUINDO À DIREITA, TEMOS ACESSO AOS PRÉDIOS 48 E 49.</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const PiauiTela1Style = {
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
    }
}