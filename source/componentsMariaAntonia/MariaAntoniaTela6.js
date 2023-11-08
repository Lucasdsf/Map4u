import * as React from "react";
import { Button, View, Text, Alert} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export function MariaAntoniaTela6({ navigation }) {
    return (
        <SafeAreaView style={MariaAntoniaTela6Style.areaView}>
            <View style={MariaAntoniaTela6Style.esquerdaTopView}>
                <Text style={MariaAntoniaTela6Style.esquerdaText}>ESQUERDA</Text>
            </View>
            <View style={MariaAntoniaTela6Style.esquerdaBottomView}>
                <Button
                    title='NA ESQUERDA TEMOS ACESSO AO PRIMEIRO ANDAR DO PRÉDIO 31 DE TECNOLOGIA E INFORMAÇÃO. O ACESSO É POR MEIO DE ESCADAS.'
                    color='black'
                    onPress={() => Alert.alert('Você chegou no acesso ao primeiro andar do prédio 31. O acesso é por meio de escadas.')} />
            </View>
            <View style={MariaAntoniaTela6Style.frenteTopView}>
                <Text style={MariaAntoniaTela6Style.frenteText}>PARA FRENTE</Text>
            </View>
            <View style={MariaAntoniaTela6Style.frenteBottomView}>
                <Button
                    title='SEGUINDO EM FRENTE ENCONTRAREMOS O PRÉDIO 33 DE TECNOLOGIA E INFORMAÇÃO.'
                    color='black'
                    onPress={() => navigation.navigate('InfoTela5')} />
            </View>
            <View style={MariaAntoniaTela6Style.direitaTopView}>
                <Text style={MariaAntoniaTela6Style.direitaText}>DIREITA</Text>
            </View>
            <View style={MariaAntoniaTela6Style.direitaBottomView}>
                <Button
                    title='NA DIREITA TEMOS O MACKGRAPHE.'
                    color='black'
                    onPress={() => navigation.navigate('InfoTela4')} />
            </View>
        </SafeAreaView>
    );
}

const MariaAntoniaTela6Style = {
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