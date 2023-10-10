import * as React from "react";
import { Button, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//Tela 4
export function ParaFrente25({ navigation }) {
    return (
        <SafeAreaView style={ParaFrente25style.areaView}>
            <View style={ParaFrente25style.esquerdaTopView}>
                <Text style={ParaFrente25style.esquerdaText}>Esquerda</Text>
            </View>
            <View style={ParaFrente25style.esquerdaBottomView}>
                <Button
                    title='Seguindo à esquerda, temos a lanchonete Borges e o prédio 25.'
                    color='black' />
            </View>
            <View style={ParaFrente25style.frenteTopView}>
                <Text style={ParaFrente25style.frenteText}>Para Frente</Text>
            </View>
            <View style={ParaFrente25style.frenteBottomView}>
                <Button
                    title='Seguindo em frente, temos acesso ao térreo do prédio 31 que é a parte do Ensino à Distância. O acesso é por meio de rampa.'
                    color='black'
                    onPress={() => navigation.navigate('Predio31')} />
            </View>
            <View style={ParaFrente25style.direitaTopView}>
                <Text style={ParaFrente25style.direitaText}>Direita</Text>
            </View>
            <View style={ParaFrente25style.direitaBottomView}>
                <Button
                    title='Seguindo à direita, temos acesso ao primeiro andar do prédio 31 e o prédio 33. O acesso é por meio de escadas.'
                    color='black' />
            </View>
        </SafeAreaView>
    );
}

const ParaFrente25style = {
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