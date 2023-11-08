import * as React from "react";
import { Button, View, Text, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export function MariaAntoniaTela4({ navigation }) {
    return (
        <SafeAreaView style={MariaAntoniaTela4Style.areaView}>
            <View style={MariaAntoniaTela4Style.esquerdaTopView}>
                <Text style={MariaAntoniaTela4Style.esquerdaText}>ESQUERDA</Text>
            </View>
            <View style={MariaAntoniaTela4Style.esquerdaBottomView}>
                <Button
                    title='NA ESQUERDA TEMOS O PRÉDIO 31 DE TECNOLOGIA E INFORMAÇÃO.'
                    color='black'
                    onPress={() => Alert.alert('VOCÊ CHEGOU NO ACESSO AO PRIMEIRO ANDAR DO PRÉDIO 31. O ACESSO É POR MEIO DE ESCADAS.')}
                />

            </View>
            <View style={MariaAntoniaTela4Style.frenteTopView}>
                <Text style={MariaAntoniaTela4Style.frenteText}>PARA FRENTE</Text>
            </View>
            <View style={MariaAntoniaTela4Style.frenteBottomView}>
                <Button
                    title='SEGUINDO EM FRENTE ENCONTRAREMOS ACESSO À LANCHONETE BORGES.'
                    color='black'
                    onPress={() => navigation.navigate('MariaAntoniaTela5')} />
            </View>
            <View style={MariaAntoniaTela4Style.direitaTopView}>
                <Text style={MariaAntoniaTela4Style.direitaText}>DIREITA</Text>
            </View>
            <View style={MariaAntoniaTela4Style.direitaBottomView}>
                <Button
                    title='NA DIREITA TEMOS UMA ÁREA COM MESAS E CADEIRAS DA LANCHONETE BORGES.'
                    color='black'
                    onPress={() => navigation.navigate('InfoTela3')} />
            </View>
        </SafeAreaView>
    );
}

const MariaAntoniaTela4Style = {
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