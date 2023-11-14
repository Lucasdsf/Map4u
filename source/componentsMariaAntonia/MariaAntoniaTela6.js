import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function MariaAntoniaTela6({ navigation }) {
    return (
        <SafeAreaView style={MariaAntoniaTela6Style.areaView}>
            <View style={MariaAntoniaTela6Style.esquerdaTopView}>
                <Text style={MariaAntoniaTela6Style.esquerdaText}>ESQUERDA</Text>
            </View>
            <View style={MariaAntoniaTela6Style.esquerdaBottomView}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Chegou31')}>
                    <Text style={MariaAntoniaTela6Style.esquerdaBottomText}>NA ESQUERDA TEMOS ACESSO AO PRIMEIRO ANDAR DO PRÉDIO 31 DE TECNOLOGIA E INFORMAÇÃO. O ACESSO É POR MEIO DE ESCADAS.</Text>
                </TouchableOpacity>
            </View>
            <View style={MariaAntoniaTela6Style.frenteTopView}>
                <Text style={MariaAntoniaTela6Style.frenteText}>PARA FRENTE</Text>
            </View>
            <View style={MariaAntoniaTela6Style.frenteBottomView}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('InfoTela6')}>
                    <Text style={MariaAntoniaTela6Style.frenteBottomText}>SEGUINDO EM FRENTE ENCONTRAREMOS O PRÉDIO 33 DE TECNOLOGIA E INFORMAÇÃO.</Text>
                </TouchableOpacity>
            </View>
            <View style={MariaAntoniaTela6Style.direitaTopView}>
                <Text style={MariaAntoniaTela6Style.direitaText}>DIREITA</Text>
            </View>
            <View style={MariaAntoniaTela6Style.direitaBottomView}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('InfoTela4')}>
                    <Text style={MariaAntoniaTela6Style.direitaBottomText}>NA DIREITA TEMOS O MACKGRAPHE.</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={MariaAntoniaTela6Style.buttonVoltarView}
                onPress={() => navigation.navigate('MENU PRINCIPAL')}>
                <Text style={MariaAntoniaTela6Style.buttonVoltarText}>VOLTAR AO INICIO</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const MariaAntoniaTela6Style = {
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