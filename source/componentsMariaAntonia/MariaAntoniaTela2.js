import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function MariaAntoniaTela2({ navigation }) {
    return (
        <SafeAreaView style={MariaAntoniaTela2Style.areaView}>
            <View style={MariaAntoniaTela2Style.esquerdaTopView}>
                <Text style={MariaAntoniaTela2Style.esquerdaText}>ESQUERDA</Text>
            </View>
            <View style={MariaAntoniaTela2Style.esquerdaBottomView}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('InfoTela3')}>
                    <Text style={MariaAntoniaTela2Style.esquerdaBottomText}>NA ESQUERDA TEMOS ACESSO AO PRÉDIO 24 DE ENGENHARIA. O ACESSO É POR MEIO DE RAMPAS DE ACESSO.</Text>
                </TouchableOpacity>
            </View>
            <View style={MariaAntoniaTela2Style.frenteTopView}>
                <Text style={MariaAntoniaTela2Style.frenteText}>PARA FRENTE</Text>
            </View>
            <View style={MariaAntoniaTela2Style.frenteBottomView}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('MariaAntoniaTela3')}>
                    <Text style={MariaAntoniaTela2Style.frenteBottomText}>SEGUINDO EM FRENTE ENCONTRAREMOS ACESSO AO PRÉDIO 25 DOS CURSOS DE DIREITO E ALGUNS LABORATÓRIOS DE ENGENHARIA. O ACESSO É POR MEIO DE RAMPA OU ESCADAS. ESSA É A DIREÇÃO INDICADA PARA CHEGAR AO PRÉDIO 31.</Text>
                </TouchableOpacity>
            </View>
            <View style={MariaAntoniaTela2Style.direitaTopView}>
                <Text style={MariaAntoniaTela2Style.direitaText}>DIREITA</Text>
            </View>
            <View style={MariaAntoniaTela2Style.direitaBottomView}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('InfoTela1')}>
                    <Text style={MariaAntoniaTela2Style.direitaBottomText}>NA DIREITA TEMOS O PRÉDIO 6 DE ENGENHARIA.</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const MariaAntoniaTela2Style = {
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
    }
}