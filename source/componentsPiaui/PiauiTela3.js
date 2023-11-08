import * as React from "react";
import { Button, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export function PiauiTela3({ navigation }) {
    return (
        <SafeAreaView style={PiauiTela3Style.areaView}>
            <View style={PiauiTela3Style.esquerdaTopView}>
                <Text style={PiauiTela3Style.esquerdaText}>ESQUERDA</Text>
            </View>
            <View style={PiauiTela3Style.esquerdaBottomView}>
                <Button
                    title='SEGUINDO À ESQUERDA, TEMOS UMA ÁREA DE DESCANSO EXTERNA COM BANCOS DE MADEIRA E ESPAÇO SOCIAL.'
                    color='black'
                    onPress={() => navigation.navigate('InfoTela4')} />
            </View>
            <View style={PiauiTela3Style.frenteTopView}>
                <Text style={PiauiTela3Style.frenteText}>PARA FRENTE</Text>
            </View>
            <View style={PiauiTela3Style.frenteBottomView}>
                <Button
                    title='SEGUINDO EM FRENTE TEMOS O PRÉDIO 31 DE TECNOLOGIA E INFORMAÇÃO.'
                    color='black'
                    onPress={() => navigation.navigate('PiauiTela4')} />
            </View>
            <View style={PiauiTela3Style.direitaTopView}>
                <Text style={PiauiTela3Style.direitaText}>DIREITA</Text>
            </View>
            <View style={PiauiTela3Style.direitaBottomView}>
                <Button
                    title='SEGUINDO À DIREITA, TEMOS ACESSO AO MACKGRAPHE E AO PRÉDIO 29 COM AS QUADRAS POLIESPORTIVAS E VESTIÁRIOS.'
                    color='black'
                    onPress={() => navigation.navigate('InfoTela3')} />
            </View>
        </SafeAreaView>
    );
}

const PiauiTela3Style = {
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