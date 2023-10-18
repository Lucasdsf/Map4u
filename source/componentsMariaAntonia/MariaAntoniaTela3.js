import * as React from "react";
import { Button, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export function MariaAntoniaTela3({ navigation }) {
    return (
        <SafeAreaView style={MariaAntoniaTela3Style.areaView}>
            <View style={MariaAntoniaTela3Style.esquerdaTopView}>
                <Text style={MariaAntoniaTela3Style.esquerdaText}>Esquerda</Text>
            </View>
            <View style={MariaAntoniaTela3Style.esquerdaBottomView}>
                <Button
                    title='Na esquerda temos o acesso ao prédio 25. O acesso é por meio de rampa ou escadas.'
                    color='black' />
            </View>
            <View style={MariaAntoniaTela3Style.frenteTopView}>
                <Text style={MariaAntoniaTela3Style.frenteText}>Para Frente</Text>
            </View>
            <View style={MariaAntoniaTela3Style.frenteBottomView}>
                <Button
                    title='Seguindo em frente está a lanchonete Borges.'
                    color='black'
                    onPress={() => navigation.navigate('MariaAntoniaTela4')} />
            </View>
            <View style={MariaAntoniaTela3Style.direitaTopView}>
                <Text style={MariaAntoniaTela3Style.direitaText}>Direita</Text>
            </View>
            <View style={MariaAntoniaTela3Style.direitaBottomView}>
                <Button
                    title='Na direita temos acesso ao prédio 6, na parte de química e às escadas para acessar a Starbucks, prédio 19 e 20.'
                    color='black' />
            </View>
        </SafeAreaView>
    );
}

const MariaAntoniaTela3Style = {
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
    }
}