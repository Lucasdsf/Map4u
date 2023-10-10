import * as React from "react";
import { Button, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//Tela 3
export function ParaFrente45({ navigation }) {
    return (
        <SafeAreaView style={ParaFrente45style.areaView}>
            <View style={ParaFrente45style.esquerdaTopView}>
                <Text style={ParaFrente45style.esquerdaText}>Esquerda</Text>
            </View>
            <View style={ParaFrente45style.esquerdaBottomView}>
                <Button
                    title='Seguindo à esquerda, temos uma área de descanso externa com bancos de madeira.'
                    color='black' />
            </View>
            <View style={ParaFrente45style.frenteTopView}>
                <Text style={ParaFrente45style.frenteText}>Para Frente</Text>
            </View>
            <View style={ParaFrente45style.frenteBottomView}>
                <Button
                    title='Seguindo em frente temos o prédio 31.'
                    color='black'
                    onPress={() => navigation.navigate('ParaFrente25')} />
            </View>
            <View style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10, padding: 16, backgroundColor: 'red' }}>
                <Text style={{
                    color: 'white',
                    fontSize: 24
                }}>Direita</Text>
            </View>
            <View style={{ borderBottomLeftRadius: 10, borderBottomRightRadius: 10, padding: 16, marginBottom: 16, backgroundColor: 'gray' }}>
                <Button
                    title='Seguindo à direita, temos acesso ao Mackgraphe e às quadras do prédio 29.'
                    color='black' />
            </View>
        </SafeAreaView>
    );
}

const ParaFrente45style = {
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
    }
}