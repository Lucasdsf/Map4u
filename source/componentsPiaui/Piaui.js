import * as React from "react";
import { Button, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//Tela 1
export function Piaui({ navigation }) {
    return (
        <SafeAreaView style={PiauiStyle.areaView}>
            <View style={PiauiStyle.esquerdaTopView}>
                <Text style={PiauiStyle.esquerdaText}>Esquerda</Text>
            </View>
            <View style={PiauiStyle.esquerdaBottomView}>
                <Button
                    title='Seguindo à esquerda temos acesso ao prédio 46.'
                    color='black' />
            </View>
            <View style={PiauiStyle.frenteTopView}>
                <Text style={PiauiStyle.frenteText}>Para Frente</Text>
            </View>
            <View style={PiauiStyle.frenteBottomView}>
                <Button
                    title='Seguindo em frente temos acesso ao subsolo do prédio 45, às quadras externas e vestiários, ao Mackgraphe e ao prédio 29.'
                    color='black'
                    onPress={() => navigation.navigate('ParaFrentePiaui')} />
            </View>
            <View style={PiauiStyle.direitaTopView}>
                <Text style={PiauiStyle.direitaText}>Direita</Text>
            </View>
            <View style={PiauiStyle.direitaBottomView}>
                <Button
                    title='Seguindo à direita, temos acesso aos prédios 48 e 49.'
                    color='black' />
            </View>
        </SafeAreaView>
    );
}

const PiauiStyle = {
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