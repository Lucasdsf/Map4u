import * as React from "react";
import { Button, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export function MariaAntoniaTela4({ navigation }) {
    return (
        <SafeAreaView style={MariaAntoniaTela4Style.areaView}>
            <View style={MariaAntoniaTela4Style.esquerdaTopView}>
                <Text style={MariaAntoniaTela4Style.esquerdaText}>Esquerda</Text>
            </View>
            <View style={MariaAntoniaTela4Style.esquerdaBottomView}>
                <Button
                    title='Na esquerda temos o prédio 31.'
                    color='black' />
            </View>
            <View style={MariaAntoniaTela4Style.frenteTopView}>
                <Text style={MariaAntoniaTela4Style.frenteText}>Para Frente</Text>
            </View>
            <View style={MariaAntoniaTela4Style.frenteBottomView}>
                <Button
                    title='Seguindo em frente encontraremos acesso à lanchonete Borges.'
                    color='black'
                    onPress={() => navigation.navigate('MariaAntoniaTela5')} />
            </View>
            <View style={MariaAntoniaTela4Style.direitaTopView}>
                <Text style={MariaAntoniaTela4Style.direitaText}>Direita</Text>
            </View>
            <View style={MariaAntoniaTela4Style.direitaBottomView}>
                <Button
                    title='Na direita temos uma área com mesas e cadeiras da lanchonete Borges.'
                    color='black' />
            </View>
        </SafeAreaView>
    );
}

const MariaAntoniaTela4Style = {
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