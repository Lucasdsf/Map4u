import * as React from "react";
import { Button, View, Text, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export function PiauiTela5({ navigation }) {
    return (
        <SafeAreaView style={PiauiTela5Style.areaView}>
            <View style={PiauiTela5Style.esquerdaTopView}>
                <Text style={PiauiTela5Style.esquerdaText}>ESQUERDA</Text>
            </View>
            <View style={PiauiTela5Style.esquerdaBottomView}>
                <Button
                    title='NA ESQUERDA TEMOS O ACESSO AO PRIMEIRO ANDAR DO PRÉDIO 31 DE TECNOLOGIA E INFORMAÇÃO. O ACESSO É POR MEIO DE ESCADAS.'
                    color='black'
                    onPress={() => Alert.alert('VOCÊ CHEGOU NO ACESSO AO PRIMEIRO ANDAR DO PRÉDIO 31. O ACESSO É POR MEIO DE ESCADAS.')} />
            </View>
            <View style={PiauiTela5Style.frenteTopView}>
                <Text style={PiauiTela5Style.frenteText}>PARA FRENTE</Text>
            </View>
            <View style={PiauiTela5Style.frenteBottomView}>
                <Button
                    title='SEGUINDO EM FRENTE TEMOS O PRÉDIO 33 DE TECNOLOGIA E INFORMAÇÃO E O PRÉDIO 35 DE ACHADOS E PERDIDOS.'
                    color='black'
                    onPress={() => navigation.navigate('InfoTela5')} />
            </View>
            <View style={PiauiTela5Style.direitaTopView}>
                <Text style={PiauiTela5Style.direitaText}>DIREITA</Text>
            </View>
            <View style={PiauiTela5Style.direitaBottomView}>
                <Button
                    title='NA DIREITA TEMOS O MACKGRAPHE, PRÉDIO FOCADO EM ESTUDOS DE NANOTECNOLOGIA E GRAFENO.'
                    color='black'
                    onPress={() => navigation.navigate('InfoTela4')} />
            </View>
        </SafeAreaView>
    );
}

const PiauiTela5Style = {
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