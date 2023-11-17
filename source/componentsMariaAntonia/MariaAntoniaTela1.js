import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function MariaAntoniaTela1({ navigation }) {
    return (
        <SafeAreaView style={MariaAntoniaTela1Style.areaView}>
            <View style={MariaAntoniaTela1Style.direitaTopView}>
                <Text onPress={() => navigation.navigate('MariaAntoniaTela3')}
                    style={MariaAntoniaTela1Style.direitaTopText}>ESQUERDA</Text>
            </View>
            <View style={MariaAntoniaTela1Style.direitaBottomView}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('MariaAntoniaTela3')}>
                    <Text style={MariaAntoniaTela1Style.direitaText}>SEGUINDO À ESQUERDA TEMOS OS PRÉDIOS 24 E 6, AMBOS DE ENGENHARIA. ESTA É A DIREÇÃO INDICADA PARA CHEGAR AO PRÉDIO 31</Text>
                </TouchableOpacity>
            </View>
            <View style={MariaAntoniaTela1Style.direitaTopView}>
                <Text style={MariaAntoniaTela1Style.direitaTopText}>PARA FRENTE</Text>
            </View>
            <View style={MariaAntoniaTela1Style.direitaBottomView}>
                <TouchableOpacity>
                    <Text style={MariaAntoniaTela1Style.direitaText}>SEGUINDO EM FRENTE TEMOS UM DOS ACESSOS AO PRÉDIO 5 DE ENGENHARIA. O ACESSO É POR MEIO DE ESCADAS.</Text>
                </TouchableOpacity>
            </View>
            <View style={MariaAntoniaTela1Style.direitaTopView}>
                <Text style={MariaAntoniaTela1Style.direitaTopText}>DIREITA</Text>
            </View>
            <View style={MariaAntoniaTela1Style.direitaBottomView}>
                <TouchableOpacity>
                    <Text style={MariaAntoniaTela1Style.direitaText}>SEGUINDO À DIREITA, TEMOS ESCADAS PARA ACESSAR O PRÉDIO 4 DE DIREITO.</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={MariaAntoniaTela1Style.buttonVoltarView}
                onPress={() => navigation.navigate('MENU PRINCIPAL')}>
                <Text style={MariaAntoniaTela1Style.buttonVoltarText}>VOLTAR AO INICIO</Text>
            </TouchableOpacity>
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
        padding: 24,
        backgroundColor: 'gray',
    },
    direitaTopText: { // Estilo para o texto do topo
        color: 'black',
        fontSize: 24,
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
        fontWeight: 'bold'
    }
}
