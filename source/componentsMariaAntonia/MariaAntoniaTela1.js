import * as React from "react";
import { Button, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export function MariaAntoniaTela1({ navigation }) {
    return (
        <SafeAreaView style={MariaAntoniaTela1Style.areaView}>
            <View style={MariaAntoniaTela1Style.esquerdaTopView}>
                <Text style={MariaAntoniaTela1Style.esquerdaText}>ESQUERDA</Text>
            </View>
            <View style={MariaAntoniaTela1Style.esquerdaBottomView}>
                <Button
                    title='SEGUINDO À ESQUERDA TEMOS OS PRÉDIOS 24 E 6, AMBOS DE ENGENHARIA. ESSA É A DIREÇÃO INDICADA PARA CHEGAR AO PRÉDIO 31.'
                    color='black'
                    onPress={() => navigation.navigate('MariaAntoniaTela2')} />
            </View>
            <View style={MariaAntoniaTela1Style.frenteTopView}>
                <Text style={MariaAntoniaTela1Style.frenteText}>PARA FRENTE</Text>
            </View>
            <View style={MariaAntoniaTela1Style.frenteBottomView}>
                <Button
                    title='SEGUINDO EM FRENTE TEMOS UM DOS ACESSOS AO PRÉDIO 5 DE ENGENHARIA. O ACESSO É POR MEIO DE ESCADAS.'
                    color='black'
                    onPress={() => navigation.navigate('InfoTela1')} />
            </View>
            <View style={MariaAntoniaTela1Style.direitaTopView}>
                <Text style={MariaAntoniaTela1Style.direitaText}>DIREITA</Text>
            </View>
            <View style={MariaAntoniaTela1Style.direitaBottomView}>
                <Button
                    title='SEGUINDO À DIREITA, TEMOS ESCADAS PARA ACESSAR O PRÉDIO 4 DE DIREITO.'
                    color='black'
                    onPress={() => navigation.navigate('InfoTela1')} />
            </View>
        </SafeAreaView>
    );
}

const MariaAntoniaTela1Style = {
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
        fontFamily: 'Arial',
        fontWeight: 'bold'
    },
    esquerdaBottomView: {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: 16,
        marginBottom: 16,
        backgroundColor: 'rgb(190, 190, 190)',
        fontFamily: 'Arial'
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
        fontFamily: 'Arial',
        fontWeight: 'bold'
    },
    frenteBottomView: {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: 16,
        marginBottom: 16,
        backgroundColor: 'rgb(190, 190, 190)',
        fontFamily: 'Arial'
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
        fontFamily: 'Arial',
        fontWeight: 'bold'
    },
    direitaBottomView: {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: 16,
        marginBottom: 16,
        backgroundColor: 'rgb(190, 190, 190)',
        fontFamily: 'Arial'
    }
}