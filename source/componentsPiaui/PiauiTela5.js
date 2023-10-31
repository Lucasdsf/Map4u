import * as React from "react";
import { Button, View, Text, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export function PiauiTela5({ navigation }) {
    return (
        <SafeAreaView style={PiauiTela5Style.areaView}>
            <View style={PiauiTela5Style.esquerdaTopView}>
                <Text style={PiauiTela5Style.esquerdaText}>Esquerda</Text>
            </View>
            <View style={PiauiTela5Style.esquerdaBottomView}>
                <Button
                    title='Na esquerda temos o acesso ao primeiro andar do prédio 31. O acesso é por meio de escadas.'
                    color='black'
                    onPress={() => Alert.alert('Você chegou no acesso ao primeiro andar do prédio 31. O acesso é por meio de escadas.')} />
            </View>
            <View style={PiauiTela5Style.frenteTopView}>
                <Text style={PiauiTela5Style.frenteText}>Para Frente</Text>
            </View>
            <View style={PiauiTela5Style.frenteBottomView}>
                <Button
                    title='Seguindo em frente temos o prédio 33 e 35.'
                    color='black' />
            </View>
            <View style={PiauiTela5Style.direitaTopView}>
                <Text style={PiauiTela5Style.direitaText}>Direita</Text>
            </View>
            <View style={PiauiTela5Style.direitaBottomView}>
                <Button
                    title='Na direita temos o Mackgraphe.'
                    color='black' />
            </View>
        </SafeAreaView>
    );
}

const PiauiTela5Style = {
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