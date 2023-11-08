import * as React from "react";
import { Button, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export function MariaAntoniaTela3({ navigation }) {
    return (
        <SafeAreaView style={MariaAntoniaTela3Style.areaView}>
            <View style={MariaAntoniaTela3Style.esquerdaTopView}>
                <Text style={MariaAntoniaTela3Style.esquerdaText}>ESQUERDA</Text>
            </View>
            <View style={MariaAntoniaTela3Style.esquerdaBottomView}>
                <Button
                    title='NA ESQUERDA TEMOS O ACESSO AO PRÉDIO 25 DOS CURSOS DE DIREITO E ALGUNS LABORATÓRIOS DE ENGENHARIA. O ACESSO É POR MEIO DE RAMPA OU ESCADAS.'
                    color='black'
                    onPress={() => navigation.navigate('InfoTela3')} />
            </View>
            <View style={MariaAntoniaTela3Style.frenteTopView}>
                <Text style={MariaAntoniaTela3Style.frenteText}>PARA FRENTE</Text>
            </View>
            <View style={MariaAntoniaTela3Style.frenteBottomView}>
                <Button
                    title='SEGUINDO EM FRENTE ESTÁ A LANCHONETE BORGES. ESSA É A DIREÇÃO INDICADA PARA CHEGAR AO PRÉDIO 31.'
                    color='black'
                    onPress={() => navigation.navigate('MariaAntoniaTela4')} />
            </View>
            <View style={MariaAntoniaTela3Style.direitaTopView}>
                <Text style={MariaAntoniaTela3Style.direitaText}>DIREITA</Text>
            </View>
            <View style={MariaAntoniaTela3Style.direitaBottomView}>
                <Button
                    title='NA DIREITA TEMOS ACESSO AO PRÉDIO 6 DE ENGENHARIA, NA PARTE DE QUÍMICA E ÀS ESCADAS PARA ACESSAR A STARBUCKS, PRÉDIO 19 QUE TEM UMA PRAÇA DE ALIMENTAÇÃO E O PRÉDIO 20 QUE TEM A QUADRA DE BASQUETE INTERNA.'
                    color='black'
                    onPress={() => navigation.navigate('InfoTela1')} />
            </View>
        </SafeAreaView>
    );
}

const MariaAntoniaTela3Style = {
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