import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function MariaAntoniaTela5({ navigation }) {
    return (
        <SafeAreaView style={MariaAntoniaTela5Style.areaView}>
            <View style={MariaAntoniaTela5Style.esquerdaTopView}>
                <Text style={MariaAntoniaTela5Style.esquerdaText}>ESQUERDA</Text>
            </View>
            <View style={MariaAntoniaTela5Style.esquerdaBottomView}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Chegou31')}>
                    <Text style={MariaAntoniaTela5Style.esquerdaBottomText}>NA ESQUERDA TEMOS ACESSO AO TÉRREO DO PRÉDIO 31 DE TECNOLOGIA E INFORMAÇÃO QUE É A PARTE DO ENSINO À DISTÂNCIA. O ACESSO É POR MEIO DE RAMPA.</Text>
                </TouchableOpacity>
            </View>
            <View style={MariaAntoniaTela5Style.frenteTopView}>
                <Text style={MariaAntoniaTela5Style.frenteText}>PARA FRENTE</Text>
            </View>
            <View style={MariaAntoniaTela5Style.frenteBottomView}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('MariaAntoniaTela6')}>
                    <Text style={MariaAntoniaTela5Style.frenteBottomText}>SEGUINDO EM FRENTE ENCONTRAREMOS ACESSO AO PRIMEIRO ANDAR DO PRÉDIO 31 E O PRÉDIO 33, AMBOS DE TECNOLOGIA E INFORMAÇÃO.</Text>
                </TouchableOpacity>
            </View>
            <View style={MariaAntoniaTela5Style.direitaTopView}>
                <Text style={MariaAntoniaTela5Style.direitaText}>DIREITA</Text>
            </View>
            <View style={MariaAntoniaTela5Style.direitaBottomView}>
                <TouchableOpacity>
                    <Text style={MariaAntoniaTela5Style.direitaBottomText}>NA DIREITA TEMOS O CAMINHO PARA A PORTARIA PIAUÍ.</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const MariaAntoniaTela5Style = {
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