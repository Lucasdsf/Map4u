import * as React from "react";
import { Button, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export function InfoTela1({ navigation }) {
    return (
        <SafeAreaView style={InfoTela1Style.areaView}>
            <View style={InfoTela1Style.esquerdaTopView}>
                <Text style={InfoTela1Style.esquerdaText}>Prédio 5</Text>
            </View>
            <View style={InfoTela1Style.esquerdaBottomView}>
                <Text style={InfoTela1Style.prediosText}>Prédio 5 é o prédio das Engenharias.</Text>
            </View>
            <View style={InfoTela1Style.frenteTopView}>
                <Text style={InfoTela1Style.frenteText}>Prédio 6</Text>
            </View>
            <View style={InfoTela1Style.frenteBottomView}>
                <Text style={InfoTela1Style.prediosText}>O prédio 6 é o prédio das Engenharias. Nele tem salas de aula e laboratórios de Engenharia e Química. Além disso, no térreo tem a biblioteca voltada a assuntos de Engenharia e Tecnologia.</Text>
            </View>
            <View style={InfoTela1Style.direitaTopView}>
                <Text style={InfoTela1Style.direitaText}>Prédio 20</Text>
            </View>
            <View style={InfoTela1Style.direitaBottomView}>
                <Text> style={InfoTela1Style.prediosText}O prédio 20 é onde tem a quadra interna de basquete, vestiários e uma das papelarias na Universidade.</Text>
            </View>
            <View style={InfoTela1Style.buttonView} >
                <Button
                    title='Próximo'
                    color='red'
                    onPress={() => navigation.navigate('InfoTela2')} />
            </View>
        </SafeAreaView>
    );
}

const InfoTela1Style = {
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
    },
    buttonView: {
        margin: 8
    }
}