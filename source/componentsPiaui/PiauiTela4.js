import * as React from "react";
import { Button, View, Text, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export function PiauiTela4({ navigation }) {
    return (
        <SafeAreaView style={PiauiTela4Style.areaView}>
            <View style={PiauiTela4Style.esquerdaTopView}>
                <Text style={PiauiTela4Style.esquerdaText}>ESQUERDA</Text>
            </View>
            <View style={PiauiTela4Style.esquerdaBottomView}>
                <Button
                    title='SEGUINDO À ESQUERDA, TEMOS A LANCHONETE BORGES E O PRÉDIO 25 DOS CURSOS DE DIREITO E ALGUNS LABORATÓRIOS DE ENGENHARIA.'
                    color='black'
                    onPress={() => navigation.navigate('InfoTela3')} />
            </View>
            <View style={PiauiTela4Style.frenteTopView}>
                <Text style={PiauiTela4Style.frenteText}>PARA FRENTE</Text>
            </View>
            <View style={PiauiTela4Style.frenteBottomView}>
                <Button
                    title='SEGUINDO EM FRENTE, TEMOS ACESSO AO TÉRREO DO PRÉDIO 31 QUE É A PARTE DO ENSINO À DISTÂNCIA. O ACESSO É POR MEIO DE RAMPA.'
                    color='black'
                    onPress={() => Alert.alert('VOCÊ CHEGOU NO ACESSO AO TÉRREO DO PRÉDIO 31. O ACESSO É POR MEIO DE ESCADAS.')} />
            </View>
            <View style={PiauiTela4Style.direitaTopView}>
                <Text style={PiauiTela4Style.direitaText}>DIREITA</Text>
            </View>
            <View style={PiauiTela4Style.direitaBottomView}>
                <Button
                    title='SEGUINDO À DIREITA, TEMOS ACESSO AO PRIMEIRO ANDAR DO PRÉDIO 31 E AO PRÉDIO 33, AMBOS DE TECNOLOGIA E INFORMAÇÃO. O ACESSO É POR MEIO DE ESCADAS.'
                    color='black'
                    onPress={() => navigation.navigate('InfoTela4')} />
            </View>
        </SafeAreaView>
    );
}

const PiauiTela4Style = {
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