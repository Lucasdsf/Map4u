import * as React from "react";
import { Button, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export function PiauiTela2({ navigation }) {
    return (
        <SafeAreaView style={ParaFrentePiauiStyle.areaView}>
            <View style={ParaFrentePiauiStyle.esquerdaTopView}>
                <View>
                    <Text style={ParaFrentePiauiStyle.esquerdaText}>ESQUERDA</Text>
                </View>
            </View>
            <View style={ParaFrentePiauiStyle.esquerdaBottomView}>
                <Button
                    title='SEGUINDO A ESQUERDA, TEMOS O ACESSO AO SUBSOLO DO PRÉDIO 45 DE CIÊNCIAS SOCIAIS E APLICADAS. O ACESSO AO PRÉDIO É POR MEIO DE ESCADAS.'
                    color='black'
                    onPress={() => navigation.navigate('InfoTela6')} />
            </View>
            <View style={ParaFrentePiauiStyle.frenteTopView}>
                <Text style={ParaFrentePiauiStyle.frenteText}>PARA FRENTE</Text>
            </View>
            <View style={ParaFrentePiauiStyle.frenteBottomView}>
                <Button
                    title='SEGUINDO EM FRENTE TEMOS ACESSO AO MACKGRAPHE E AO PRÉDIO 29 COM QUADRAS POLIESPORTIVAS E VESTIÁRIOS. ESSA É A DIREÇÃO INDICADA PARA CHEGAR AO PRÉDIO 31.'
                    color='black'
                    onPress={() => navigation.navigate('PiauiTela3')} />
            </View>
            <View style={ParaFrentePiauiStyle.direitaTopView}>
                <Text style={ParaFrentePiauiStyle.direitaText}>DIREITA</Text>
            </View>
            <View style={ParaFrentePiauiStyle.direitaBottomView}>
                <Button
                    title='SEGUINDO À DIREITA, TEMOS ACESSO AOS VESTIÁRIOS, QUADRAS EXTERNAS E AO PRÉDIO 50 DE CIÊNCIAS BIOLÓGICAS E SAÚDE. O ACESSO AO VESTIÁRIO FEMININO É POR MEIO DE ESCADA.'
                    color='black'
                    onPress={() => navigation.navigate('InfoTela7')} />
            </View>
        </SafeAreaView>
    );
}

const ParaFrentePiauiStyle = {
    areaView: {
        flex: 1,
        backgroundColor: 'white',
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
        fontFamily: 'Arial'
    }
}