import * as React from "react";
import { View, Text, TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function MariaAntoniaTela4({ navigation }) {
    return (
        <SafeAreaView style={MariaAntoniaTela4Style.areaView}>
            <View style={MariaAntoniaTela4Style.esquerdaTopView}>
                <Text style={MariaAntoniaTela4Style.esquerdaText}>ESQUERDA</Text>
            </View>
            <View style={MariaAntoniaTela4Style.esquerdaBottomView}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('MariaAntoniaTela5')}>
                    <Text style={MariaAntoniaTela4Style.esquerdaBottomText}>NA ESQUERDA TEMOS O PRÉDIO 31 DE TECNOLOGIA E INFORMAÇÃO.</Text>
                </TouchableOpacity>
            </View>
            <View style={MariaAntoniaTela4Style.frenteTopView}>
                <Text style={MariaAntoniaTela4Style.frenteText}>PARA FRENTE</Text>
            </View>
            <View style={MariaAntoniaTela4Style.frenteBottomView}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('MariaAntoniaTela5')}>
                    <Text style={MariaAntoniaTela4Style.frenteBottomText}>SEGUINDO EM FRENTE ENCONTRAREMOS ACESSO À LANCHONETE BORGES.</Text>
                </TouchableOpacity>
            </View>
            <View style={MariaAntoniaTela4Style.direitaTopView}>
                <Text style={MariaAntoniaTela4Style.direitaText}>DIREITA</Text>
            </View>
            <View style={MariaAntoniaTela4Style.direitaBottomView}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('InfoTela3')}>
                    <Text style={MariaAntoniaTela4Style.direitaBottomText}>NA DIREITA TEMOS UMA ÁREA COM MESAS E CADEIRAS DA LANCHONETE BORGES.</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={MariaAntoniaTela4Style.buttonVoltarView}
                onPress={() => navigation.navigate('MENU PRINCIPAL')}>
                <Text style={MariaAntoniaTela4Style.buttonVoltarText}>VOLTAR AO INICIO</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const MariaAntoniaTela4Style = {
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