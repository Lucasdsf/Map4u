import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function PiauiTela3({ navigation }) {
    return (
        <SafeAreaView style={PiauiTela3Style.areaView}>
            <View style={PiauiTela3Style.esquerdaTopView}>
                <Text style={PiauiTela3Style.esquerdaText}>ESQUERDA</Text>
            </View>
            <View style={PiauiTela3Style.esquerdaBottomView}>
                <TouchableOpacity>
                    <Text style={PiauiTela3Style.esquerdaBottomText}>SEGUINDO À ESQUERDA, TEMOS UMA ÁREA DE DESCANSO EXTERNA COM BANCOS DE MADEIRA E ESPAÇO SOCIAL.</Text>
                </TouchableOpacity>
            </View>
            <View style={PiauiTela3Style.frenteTopView}>
                <Text onPress={() => navigation.navigate('PiauiTela4')}
                    style={PiauiTela3Style.frenteText}>PARA FRENTE</Text>
            </View>
            <View style={PiauiTela3Style.frenteBottomView}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('PiauiTela4')}>
                    <Text style={PiauiTela3Style.frenteBottomText}>SEGUINDO EM FRENTE TEMOS O PRÉDIO 31 DE TECNOLOGIA E INFORMAÇÃO.</Text>
                </TouchableOpacity>
            </View>
            <View style={PiauiTela3Style.direitaTopView}>
                <Text onPress={() => navigation.navigate('InfoTela4')}
                    style={PiauiTela3Style.direitaText}>DIREITA</Text>
            </View>
            <View style={PiauiTela3Style.direitaBottomView}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('InfoTela4')}>
                    <Text style={PiauiTela3Style.direitaBottomText}>SEGUINDO À DIREITA, TEMOS ACESSO AO MACKGRAPHE E AO PRÉDIO 29 COM AS QUADRAS POLIESPORTIVAS E VESTIÁRIOS.</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={PiauiTela3Style.buttonVoltarView}
                onPress={() => navigation.navigate('MENU PRINCIPAL')}>
                <Text style={PiauiTela3Style.buttonVoltarText}>VOLTAR AO INICIO</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const PiauiTela3Style = {
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