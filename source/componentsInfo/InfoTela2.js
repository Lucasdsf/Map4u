import * as React from "react";
import { Button, View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export function InfoTela2({ navigation }) {
    return (
        <SafeAreaView style={InfoTela2Style.areaView}>
            <View style={InfoTela2Style.direitaTopView}>
                <Text style={InfoTela2Style.direitaText}>PRÉDIO 20</Text>
            </View>
            <View style={InfoTela2Style.direitaBottomView}>
                <Text style={InfoTela2Style.prediosText}>O PRÉDIO 20 É ONDE TEM A QUADRA INTERNA DE BASQUETE, VESTIÁRIOS E UMA DAS PAPELARIAS NA UNIVERSIDADE.</Text>
            </View>
            <View style={InfoTela2Style.esquerdaTopView}>
                <Text style={InfoTela2Style.esquerdaText}>PRÉDIO 23</Text>
            </View>
            <View style={InfoTela2Style.esquerdaBottomView}>
                <Text style={InfoTela2Style.prediosText}>ENFERMARIA E LABORATÓRIOS FACULDADE DE ARQUITETURA E URBANISMO.</Text>
            </View>
            <View style={InfoTela2Style.esquerdaTopView}>
                <Text style={InfoTela2Style.esquerdaText}>PRÉDIO 24</Text>
            </View>
            <View style={InfoTela2Style.esquerdaBottomView}>
                <Text style={InfoTela2Style.prediosText}>O PRÉDIO 24 É OUTRO PRÉDIO DA ESCOLA DE ENGENHARIA E POSSUI DIVERSOS LABORATÓRIOS.</Text>
            </View>
            <View style={InfoTela2Style.buttonsView}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('InfoTela3')}>
                    <Text style={InfoTela2Style.buttonText}>PRÓXIMO</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const InfoTela2Style = {
    areaView: {
        flex: 1,
        backgroundColor: 'white'
    },
    esquerdaTopView: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: 16,
        backgroundColor: 'gray'
    },
    esquerdaText: {
        color: 'black',
        fontSize: 24,
        fontFamily: 'Arial',
        fontWeight: 'bold'
    },
    esquerdaBottomView: {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: 16,
        marginBottom: 16,
        backgroundColor: 'rgb(190, 190, 190)',
        fontFamily: 'Arial'
    },
    frenteTopView: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: 16,
        backgroundColor: 'gray'
    },
    frenteText: {
        color: 'black',
        fontSize: 24,
        fontFamily: 'Arial',
        fontWeight: 'bold'
    },
    frenteBottomView: {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: 16,
        marginBottom: 16,
        backgroundColor: 'rgb(190, 190, 190)',
        fontFamily: 'Arial'
    },
    direitaTopView: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: 16,
        backgroundColor: 'gray'
    },
    direitaText: {
        color: 'black',
        fontSize: 24,
        fontFamily: 'Arial',
        fontWeight: 'bold'
    },
    direitaBottomView: {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: 16,
        marginBottom: 16,
        backgroundColor: 'rgb(190, 190, 190)',
        fontFamily: 'Arial',

    },
    buttonsView: {
        backgroundColor: 'gray',
        margin: 10,
        borderRadius: 20
    },
    buttonText: {
        color: 'white',
        fontSize: 24,
        textAlign: 'center',
        lineHeight: 32,
        fontWeight: 'bold',
        paddingVertical: 10,
        paddingHorizontal: 90,
        fontFamily: 'Arial'
    },
    prediosText: {
        color: 'black',
        fontSize: 18,
        fontFamily: 'Arial',
        textAlign: 'center'
    }
}