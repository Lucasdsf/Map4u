import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function MariaAntoniaTela1({ navigation }) {
    return (
        <SafeAreaView style={MariaAntoniaTela1Style.areaView}>
            <View style={MariaAntoniaTela1Style.direitaTopView}>
                <Text style={MariaAntoniaTela1Style.direitaTopText}>ESQUERDA</Text>
            </View>
            <View style={MariaAntoniaTela1Style.direitaBottomView}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('MariaAntoniaTela2')}>
                    <Text style={MariaAntoniaTela1Style.direitaText}>SEGUINDO À ESQUERDA TEMOS OS PRÉDIOS 24 E 6, AMBOS DE ENGENHARIA. ESSA É A DIREÇÃO INDICADA PARA CHEGAR AO PRÉDIO 31</Text>
                </TouchableOpacity>
            </View>
            <View style={MariaAntoniaTela1Style.direitaTopView}>
                <Text style={MariaAntoniaTela1Style.direitaTopText}>PARA FRENTE</Text>
            </View>
            <View style={MariaAntoniaTela1Style.direitaBottomView}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('InfoTela1')}>
                    <Text style={MariaAntoniaTela1Style.direitaText}>SEGUINDO EM FRENTE TEMOS UM DOS ACESSOS AO PRÉDIO 5 DE ENGENHARIA. O ACESSO É POR MEIO DE ESCADAS.</Text>
                </TouchableOpacity>
            </View>
            <View style={MariaAntoniaTela1Style.direitaTopView}>
                <Text style={MariaAntoniaTela1Style.direitaTopText}>DIREITA</Text>
            </View>
            <View style={MariaAntoniaTela1Style.direitaBottomView}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('InfoTela1')}>
                    <Text style={MariaAntoniaTela1Style.direitaText}>SEGUINDO À DIREITA, TEMOS ESCADAS PARA ACESSAR O PRÉDIO 4 DE DIREITO.</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
const MariaAntoniaTela1Style = {
    areaView: {
        flex: 1,
        backgroundColor: 'white',
    },
    direitaTopView: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: 16,
        backgroundColor: 'gray',
    },
    direitaTopText: { // Estilo para o texto do topo
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold'
    },
    direitaText: { // Estilo para o texto da parte inferior
        color: 'black',
        fontSize: 18,
        textAlign: 'center',
    },
    direitaBottomView: {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: 16,
        marginBottom: 16,
        backgroundColor: 'rgb(190, 190, 190)'
    }
}
