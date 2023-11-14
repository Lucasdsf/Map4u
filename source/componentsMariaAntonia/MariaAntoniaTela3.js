import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function MariaAntoniaTela3({ navigation }) {
    return (
        <SafeAreaView style={MariaAntoniaTela3Style.areaView}>
            <View style={MariaAntoniaTela3Style.esquerdaTopView}>
                <Text style={MariaAntoniaTela3Style.esquerdaText}>ESQUERDA</Text>
            </View>
            <View style={MariaAntoniaTela3Style.esquerdaBottomView}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('InfoTela3')}>
                    <Text style={MariaAntoniaTela3Style.esquerdaBottomText}>NA ESQUERDA TEMOS O ACESSO AO PRÉDIO 25 DOS CURSOS DE DIREITO E ALGUNS LABORATÓRIOS DE ENGENHARIA. O ACESSO É POR MEIO DE RAMPA OU ESCADAS.</Text>
                </TouchableOpacity>
            </View>
            <View style={MariaAntoniaTela3Style.frenteTopView}>
                <Text style={MariaAntoniaTela3Style.frenteText}>PARA FRENTE</Text>
            </View>
            <View style={MariaAntoniaTela3Style.frenteBottomView}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('MariaAntoniaTela4')}>
                    <Text style={MariaAntoniaTela3Style.frenteBottomText}>SEGUINDO EM FRENTE ESTÁ A LANCHONETE BORGES. ESSA É A DIREÇÃO INDICADA PARA CHEGAR AO PRÉDIO 31.</Text>
                </TouchableOpacity>
            </View>
            <View style={MariaAntoniaTela3Style.direitaTopView}>
                <Text style={MariaAntoniaTela3Style.direitaText}>DIREITA</Text>
            </View>
            <View style={MariaAntoniaTela3Style.direitaBottomView}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('InfoTela1')}>
                    <Text style={MariaAntoniaTela3Style.direitaBottomText}>NA DIREITA TEMOS ACESSO AO PRÉDIO 6 DE ENGENHARIA, NA PARTE DE QUÍMICA E ÀS ESCADAS PARA ACESSAR A STARBUCKS, PRÉDIO 19 QUE TEM UMA PRAÇA DE ALIMENTAÇÃO E O PRÉDIO 20 QUE TEM A QUADRA DE BASQUETE INTERNA.</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={MariaAntoniaTela3Style.buttonVoltarView}
                onPress={() => navigation.navigate('MENU PRINCIPAL')}>
                <Text style={MariaAntoniaTela3Style.buttonVoltarText}>VOLTAR AO INICIO</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const MariaAntoniaTela3Style = {
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