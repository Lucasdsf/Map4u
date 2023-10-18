import * as React from "react";
import { Button, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export function MariaAntoniaTela1({ navigation }) {
    return (
        <SafeAreaView style={MariaAntoniaTela1Style.areaView}>
            <View style={MariaAntoniaTela1Style.esquerdaTopView}>
                <Text style={MariaAntoniaTela1Style.esquerdaText}>Esquerda</Text>
            </View>
            <View style={MariaAntoniaTela1Style.esquerdaBottomView}>
                <Button
                    title='Seguindo à esquerda temos os prédios 24 e 6.'
                    color='black'
                    onPress={() => navigation.navigate('MariaAntoniaTela2')} />
            </View>
            <View style={MariaAntoniaTela1Style.frenteTopView}>
                <Text style={MariaAntoniaTela1Style.frenteText}>Para Frente</Text>
            </View>
            <View style={MariaAntoniaTela1Style.frenteBottomView}>
                <Button
                    title='Seguindo em frente temos o prédio 5.'
                    color='black'
                />
            </View>
            <View style={MariaAntoniaTela1Style.direitaTopView}>
                <Text style={MariaAntoniaTela1Style.direitaText}>Direita</Text>
            </View>
            <View style={MariaAntoniaTela1Style.direitaBottomView}>
                <Button
                    title='Seguindo à direita, temos escadas para acessar o prédio 4.'
                    color='black' />
            </View>
        </SafeAreaView>
    );
}

const MariaAntoniaTela1Style = {
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