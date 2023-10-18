import * as React from "react";
import { Button, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export function MariaAntoniaTela5({ navigation }) {
    return (
        <SafeAreaView style={MariaAntoniaTela5Style.areaView}>
            <View style={MariaAntoniaTela5Style.esquerdaTopView}>
                <Text style={MariaAntoniaTela5Style.esquerdaText}>Esquerda</Text>
            </View>
            <View style={MariaAntoniaTela5Style.esquerdaBottomView}>
                <Button
                    title='Na esquerda temos acesso ao térreo do prédio 31 que é a parte do Ensino à Distância. O acesso é por meio de rampa.'
                    color='black'
                    onPress={() => navigation.navigate('MariaAntoniaTela6')} />
            </View>
            <View style={MariaAntoniaTela5Style.frenteTopView}>
                <Text style={MariaAntoniaTela5Style.frenteText}>Para Frente</Text>
            </View>
            <View style={MariaAntoniaTela5Style.frenteBottomView}>
                <Button
                    title='Seguindo em frente encontraremos acesso ao primeiro andar do prédio 31 e o prédio 33.'
                    color='black' />
            </View>
            <View style={MariaAntoniaTela5Style.direitaTopView}>
                <Text style={MariaAntoniaTela5Style.direitaText}>Direita</Text>
            </View>
            <View style={MariaAntoniaTela5Style.direitaBottomView}>
                <Button
                    title='Na direita temos o caminho para a portaria Piauí.'
                    color='black' />
            </View>
        </SafeAreaView>
    );
}

const MariaAntoniaTela5Style = {
    areaView: {
        flex: 1,
        backgroundColor: 'black',
    },
    esquerdaTopView: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: 16,
        backgroundColor: 'red'
    },
    esquerdaText: {
        color: 'white',
        fontSize: 24
    },
    esquerdaBottomView: {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: 16,
        marginBottom: 16,
        backgroundColor: 'gray'
    },
    frenteTopView: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: 16,
        backgroundColor: 'red'
    },
    frenteText: {
        color: 'white',
        fontSize: 24
    },
    frenteBottomView: {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: 16,
        marginBottom: 16,
        backgroundColor: 'gray'
    },
    direitaTopView: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: 16,
        backgroundColor: 'red'
    },
    direitaText: {
        color: 'white',
        fontSize: 24
    },
    direitaBottomView: {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: 16,
        marginBottom: 16,
        backgroundColor: 'gray'
    }
}