import * as React from "react";
import { Button, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export function MariaAntoniaTela6({ navigation }) {
    return (
        <SafeAreaView style={MariaAntoniaTela6Style.areaView}>
            <View style={MariaAntoniaTela6Style.esquerdaTopView}>
                <Text style={MariaAntoniaTela6Style.esquerdaText}>Esquerda</Text>
            </View>
            <View style={MariaAntoniaTela6Style.esquerdaBottomView}>
                <Button
                    title='Na esquerda temos acesso ao primeiro andar do prédio 31. O acesso é por meio de escadas.'
                    color='black'/>
            </View>
            <View style={MariaAntoniaTela6Style.frenteTopView}>
                <Text style={MariaAntoniaTela6Style.frenteText}>Para Frente</Text>
            </View>
            <View style={MariaAntoniaTela6Style.frenteBottomView}>
                <Button
                    title='Seguindo em frente encontraremos o prédio 33.'
                    color='black' />
            </View>
            <View style={MariaAntoniaTela6Style.direitaTopView}>
                <Text style={MariaAntoniaTela6Style.direitaText}>Direita</Text>
            </View>
            <View style={MariaAntoniaTela6Style.direitaBottomView}>
                <Button
                    title='Na direita temos o Mackgraphe.'
                    color='black' />
            </View>
        </SafeAreaView>
    );
}

const MariaAntoniaTela6Style = {
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