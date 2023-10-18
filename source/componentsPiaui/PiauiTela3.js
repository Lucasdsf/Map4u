import * as React from "react";
import { Button, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export function PiauiTela3({ navigation }) {
    return (
        <SafeAreaView style={PiauiTela3Style.areaView}>
            <View style={PiauiTela3Style.esquerdaTopView}>
                <Text style={PiauiTela3Style.esquerdaText}>Esquerda</Text>
            </View>
            <View style={PiauiTela3Style.esquerdaBottomView}>
                <Button
                    title='Seguindo à esquerda, temos uma área de descanso externa com bancos de madeira.'
                    color='black' />
            </View>
            <View style={PiauiTela3Style.frenteTopView}>
                <Text style={PiauiTela3Style.frenteText}>Para Frente</Text>
            </View>
            <View style={PiauiTela3Style.frenteBottomView}>
                <Button
                    title='Seguindo em frente temos o prédio 31.'
                    color='black'
                    onPress={() => navigation.navigate('PiauiTela4')} />
            </View>
            <View style={PiauiTela3Style.direitaTopView}>
                <Text style={PiauiTela3Style.direitaText}>Direita</Text>
            </View>
            <View style={PiauiTela3Style.direitaBottomView}>
                <Button
                    title='Seguindo à direita, temos acesso ao Mackgraphe e às quadras do prédio 29.'
                    color='black' />
            </View>
        </SafeAreaView>
    );
}

const PiauiTela3Style = {
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