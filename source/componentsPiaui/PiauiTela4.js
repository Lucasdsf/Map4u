import * as React from "react";
import { Button, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export function PiauiTela4({ navigation }) {
    return (
        <SafeAreaView style={PiauiTela4Style.areaView}>
            <View style={PiauiTela4Style.esquerdaTopView}>
                <Text style={PiauiTela4Style.esquerdaText}>Esquerda</Text>
            </View>
            <View style={PiauiTela4Style.esquerdaBottomView}>
                <Button
                    title='Seguindo à esquerda, temos a lanchonete Borges e o prédio 25.'
                    color='black' />
            </View>
            <View style={PiauiTela4Style.frenteTopView}>
                <Text style={PiauiTela4Style.frenteText}>Para Frente</Text>
            </View>
            <View style={PiauiTela4Style.frenteBottomView}>
                <Button
                    title='Seguindo em frente, temos acesso ao térreo do prédio 31 que é a parte do Ensino à Distância. O acesso é por meio de rampa.'
                    color='black'
                    onPress={() => navigation.navigate('PiauiTela5')} />
            </View>
            <View style={PiauiTela4Style.direitaTopView}>
                <Text style={PiauiTela4Style.direitaText}>Direita</Text>
            </View>
            <View style={PiauiTela4Style.direitaBottomView}>
                <Button
                    title='Seguindo à direita, temos acesso ao primeiro andar do prédio 31 e o prédio 33. O acesso é por meio de escadas.'
                    color='black' />
            </View>
        </SafeAreaView>
    );
}

const PiauiTela4Style = {
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