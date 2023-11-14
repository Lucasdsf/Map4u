import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function PiauiTela5({ navigation }) {
    return (
        <SafeAreaView style={PiauiTela5Style.areaView}>
            <View style={PiauiTela5Style.esquerdaTopView}>
                <Text style={PiauiTela5Style.esquerdaText}>ESQUERDA</Text>
            </View>
            <View style={PiauiTela5Style.esquerdaBottomView}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Chegou31')}>
                    <Text style={PiauiTela5Style.esquerdaBottomText}>NA ESQUERDA TEMOS O ACESSO AO PRIMEIRO ANDAR DO PRÉDIO 31 DE TECNOLOGIA E INFORMAÇÃO. O ACESSO É POR MEIO DE ESCADAS.</Text>
                </TouchableOpacity>
            </View>
            <View style={PiauiTela5Style.frenteTopView}>
                <Text style={PiauiTela5Style.frenteText}>PARA FRENTE</Text>
            </View>
            <View style={PiauiTela5Style.frenteBottomView}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('InfoTela6')}>
                    <Text style={PiauiTela5Style.frenteBottomText}>SEGUINDO EM FRENTE TEMOS O PRÉDIO 33 DE TECNOLOGIA E INFORMAÇÃO E O PRÉDIO 35 DE ACHADOS E PERDIDOS.</Text>
                </TouchableOpacity>
            </View>
            <View style={PiauiTela5Style.direitaTopView}>
                <Text style={PiauiTela5Style.direitaText}>DIREITA</Text>
            </View>
            <View style={PiauiTela5Style.direitaBottomView}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('InfoTela4')}>
                    <Text style={PiauiTela5Style.direitaBottomText}>NA DIREITA TEMOS O MACKGRAPHE, PRÉDIO FOCADO EM ESTUDOS DE NANOTECNOLOGIA E GRAFENO.</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={PiauiTela5Style.buttonVoltarView}
                onPress={() => navigation.navigate('MENU PRINCIPAL')}>
                <Text style={PiauiTela5Style.buttonVoltarText}>VOLTAR AO INICIO</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const PiauiTela5Style = {
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
        fontWeight: 'bold'
    }
}