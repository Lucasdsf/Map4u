import * as React from "react";
import { Button, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export function InfoTela5({ navigation }) {
    return (
        <SafeAreaView style={InfoTela5Style.areaView}>
            <View style={InfoTela5Style.esquerdaTopView}>
                <Text style={InfoTela5Style.esquerdaText}>Prédio 50</Text>
            </View>
            <View style={InfoTela5Style.esquerdaBottomView}>
                <Text style={InfoTela5Style.prediosText}>O prédio 50 é o centro de ciências biológicas e da saúde.</Text>
            </View>
            <View style={InfoTela5Style.frenteTopView}>
                <Text style={InfoTela5Style.frenteText}>Quadras Externas</Text>
            </View>
            <View style={InfoTela5Style.frenteBottomView}>
                <Text style={InfoTela5Style.prediosText}>São quadras poliesportivas onde ocorrem treinos de futsal, vôlei, handebol, basquete e rugby.</Text>
            </View>
            <View style={InfoTela5Style.direitaTopView}>
                <Text style={InfoTela5Style.direitaText}></Text>
            </View>
            <View style={InfoTela5Style.direitaBottomView}>
                <Text style={InfoTela5Style.prediosText}></Text>
            </View>
            <View style={InfoTela5Style.buttonView} >
                <Button
                    title='Próximo'
                    color='red' />
            </View>
        </SafeAreaView>
    );
}

const InfoTela5Style = {
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