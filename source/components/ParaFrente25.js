import * as React from "react";
import { Button, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export function ParaFrente25({ navigation }) {
    return (
        <SafeAreaView style={ParaFrente25style.areaView}>
            <View style={ParaFrente25style.esquerdaTopView}>
                <Text style={ParaFrente25style.esquerdaText}>Esquerda</Text>
            </View>
            <View style={ParaFrente25style.esquerdaBottomView}>
                <Button
                    title='Borges e prédio 25.'
                    color='black' />
            </View>
            <View style={ParaFrente25style.frenteTopView}>
                <Text style={ParaFrente25style.frenteText}>Direita</Text>
            </View>
            <View style={ParaFrente25style.frenteBottomView}>
                <Button
                    title='Acesso ao prédio 31 e ao 33.'
                    color='black'
                    onPress={() => navigation.navigate('Predio31')} />
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
    }
}