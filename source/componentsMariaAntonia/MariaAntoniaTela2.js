import * as React from "react";
import { Button, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export function MariaAntoniaTela2({ navigation }) {
    return (
        <SafeAreaView style={MariaAntoniaTela2Style.areaView}>
            <View style={MariaAntoniaTela2Style.esquerdaTopView}>
                <Text style={MariaAntoniaTela2Style.esquerdaText}>Esquerda</Text>
            </View>
            <View style={MariaAntoniaTela2Style.esquerdaBottomView}>
                <Button
                    title='Na esquerda temos o prédio 24.'
                    color='black' />
            </View>
            <View style={MariaAntoniaTela2Style.frenteTopView}>
                <Text style={MariaAntoniaTela2Style.frenteText}>Para Frente</Text>
            </View>
            <View style={MariaAntoniaTela2Style.frenteBottomView}>
                <Button
                    title='Seguindo em frente encontraremos acesso ao prédio 25 e a lanchonete Borges. O acesso é por meio de rampa ou escadas.'
                    color='black'
                    onPress={() => navigation.navigate('MariaAntoniaTela3')} />
            </View>
            <View style={MariaAntoniaTela2Style.direitaTopView}>
                <Text style={MariaAntoniaTela2Style.direitaText}>Direita</Text>
            </View>
            <View style={MariaAntoniaTela2Style.direitaBottomView}>
                <Button
                    title='Na direita temos o prédio 6.'
                    color='black' />
            </View>
        </SafeAreaView>
    );
}

const MariaAntoniaTela2Style = {
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