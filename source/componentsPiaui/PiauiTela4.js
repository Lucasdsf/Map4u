import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function PiauiTela4({ navigation }) {
    return (
        <SafeAreaView style={PiauiTela4Style.areaView}>
            <View style={PiauiTela4Style.esquerdaTopView}>
                <Text style={PiauiTela4Style.esquerdaText}>ESQUERDA</Text>
            </View>
            <View style={PiauiTela4Style.esquerdaBottomView}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('InfoTela3')}>
                    <Text style={PiauiTela4Style.esquerdaBottomText}>SEGUINDO À ESQUERDA, TEMOS A LANCHONETE BORGES E O PRÉDIO 25 DOS CURSOS DE DIREITO E ALGUNS LABORATÓRIOS DE ENGENHARIA.</Text>
                </TouchableOpacity>
            </View>
            <View style={PiauiTela4Style.frenteTopView}>
                <Text style={PiauiTela4Style.frenteText}>PARA FRENTE</Text>
            </View>
            <View style={PiauiTela4Style.frenteBottomView}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Chegou31')}>
                    <Text style={PiauiTela4Style.frenteBottomText}>SEGUINDO EM FRENTE, TEMOS ACESSO AO TÉRREO DO PRÉDIO 31 QUE É A PARTE DO ENSINO À DISTÂNCIA. O ACESSO É POR MEIO DE RAMPA.</Text>
                </TouchableOpacity>
            </View>
            <View style={PiauiTela4Style.direitaTopView}>
                <Text style={PiauiTela4Style.direitaText}>DIREITA</Text>
            </View>
            <View style={PiauiTela4Style.direitaBottomView}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('PiauiTela5')}>
                    <Text style={PiauiTela4Style.direitaBottomText}>SEGUINDO À DIREITA, TEMOS ACESSO AO PRIMEIRO ANDAR DO PRÉDIO 31 E AO PRÉDIO 33, AMBOS DE TECNOLOGIA E INFORMAÇÃO. O ACESSO É POR MEIO DE ESCADAS.</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={PiauiTela4Style.buttonVoltarView}
                onPress={() => navigation.navigate('MENU PRINCIPAL')}>
                <Text style={PiauiTela4Style.buttonVoltarText}>VOLTAR AO INICIO</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const PiauiTela4Style = {
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