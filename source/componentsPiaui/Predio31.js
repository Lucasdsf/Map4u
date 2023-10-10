import * as React from "react";
import { Button, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//Tela 5
export function Predio31({ navigation }) {
    return (
        <SafeAreaView style={Predio31Style.areaView}>
            <View style={Predio31Style.esquerdaTopView}>
                <Text style={Predio31Style.esquerdaText}>Esquerda</Text>
            </View>
            <View style={Predio31Style.esquerdaBottomView}>
                <Button
                    title='Na esquerda temos o acesso ao primeiro andar do prédio 31. O acesso é por meio de escadas.'
                    color='black' />
            </View>
            <View style={Predio31Style.frenteTopView}>
                <Text style={Predio31Style.frenteText}>Para Frente</Text>
            </View>
            <View style={Predio31Style.frenteBottomView}>
                <Button
                    title='Seguindo em frente temos o prédio 33 e 35.'
                    color='black' />
            </View>
            <View style={Predio31Style.direitaTopView}>
                <Text style={Predio31Style.direitaText}>Direita</Text>
            </View>
            <View style={Predio31Style.direitaBottomView}>
                <Button
                    title='Na direita temos o Mackgraphe.'
                    color='black' />
            </View>
        </SafeAreaView>
    );
}

const Predio31Style = {
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