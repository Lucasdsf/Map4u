import * as React from "react";
import { Button, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//Tela 2
export function ParaFrentePiaui({ navigation }) {
    return (
        <SafeAreaView style={ParaFrentePiauiStyle.areaView}>
            <View style={ParaFrentePiauiStyle.esquerdaTopView}>
                <View>
                    <Text style={ParaFrentePiauiStyle.esquerdaText}>Esquerda</Text>
                </View>
            </View>
            <View style={ParaFrentePiauiStyle.esquerdaBottomView}>
                <Button
                    title='Seguindo a esquerda, temos o acesso ao subsolo do prédio 45. O acesso ao prédio é por meio de escadas.'
                    color='black' />
            </View>
            <View style={ParaFrentePiauiStyle.frenteTopView}>
                <Text style={ParaFrentePiauiStyle.frenteText}>Para Frente</Text>
            </View>
            <View style={ParaFrentePiauiStyle.frenteBottomView}>
                <Button
                    title='Seguindo em frente temos acesso ao Mackgraphe e ao prédio 29.'
                    color='black'
                    onPress={() => navigation.navigate('ParaFrente45')} />
            </View>
            <View style={ParaFrentePiauiStyle.direitaTopView}>
                <Text style={ParaFrentePiauiStyle.direitaText}>Direita</Text>
            </View>
            <View style={ParaFrentePiauiStyle.direitaBottomView}>
                <Button
                    title='Seguindo à direita, temos acesso aos vestiários, quadras externas e prédio 50. O acesso ao vestiário feminino é por meio de escada.'
                    color='black' />
            </View>
        </SafeAreaView>
    );
}

const ParaFrentePiauiStyle = {
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