import * as React from "react";
import { Button, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export function MariaAntoniaTela2({ navigation }) {
    return (
        <SafeAreaView style={MariaAntoniaTela2Style.areaView}>
            <View style={MariaAntoniaTela2Style.esquerdaTopView}>
                <Text style={MariaAntoniaTela2Style.esquerdaText}>ESQUERDA</Text>
            </View>
            <View style={MariaAntoniaTela2Style.esquerdaBottomView}>
                <Button
                    title='NA ESQUERDA TEMOS ACESSO AO PRÉDIO 24 DE ENGENHARIA. O ACESSO É POR MEIO DE RAMPAS DE ACESSO.'
                    color='black'
                    onPress={() => navigation.navigate('InfoTela2')} />
            </View>
            <View style={MariaAntoniaTela2Style.frenteTopView}>
                <Text style={MariaAntoniaTela2Style.frenteText}>PARA FRENTE</Text>
            </View>
            <View style={MariaAntoniaTela2Style.frenteBottomView}>
                <Button
                    title='SEGUINDO EM FRENTE ENCONTRAREMOS ACESSO AO PRÉDIO 25 DOS CURSOS DE DIREITO E ALGUNS LABORATÓRIOS DE ENGENHARIA. O ACESSO É POR MEIO DE RAMPA OU ESCADAS. ESSA É A DIREÇÃO INDICADA PARA CHEGAR AO PRÉDIO 31.'
                    color='black'
                    onPress={() => navigation.navigate('MariaAntoniaTela3')} />
            </View>
            <View style={MariaAntoniaTela2Style.direitaTopView}>
                <Text style={MariaAntoniaTela2Style.direitaText}>DIREITA</Text>
            </View>
            <View style={MariaAntoniaTela2Style.direitaBottomView}>
                <Button
                    title='NA DIREITA TEMOS O PRÉDIO 6 DE ENGENHARIA.'
                    color='black'
                    onPress={() => navigation.navigate('InfoTela1')} />
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