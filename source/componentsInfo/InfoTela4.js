import * as React from "react";
import { Button, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export function InfoTela4({ navigation }) {
    return (
        <SafeAreaView style={InfoTela4Style.areaView}>
            <View style={InfoTela4Style.esquerdaTopView}>
                <Text style={InfoTela4Style.esquerdaText}>Prédio 35</Text>
            </View>
            <View style={InfoTela4Style.esquerdaBottomView}>
                <Text style={InfoTela4Style.prediosText}>O prédio 35 é onde tem os achados e perdidos.</Text>
            </View>
            <View style={InfoTela4Style.frenteTopView}>
                <Text style={InfoTela4Style.frenteText}>Prédio 45</Text>
            </View>
            <View style={InfoTela4Style.frenteBottomView}>
                <Text style={InfoTela4Style.prediosText}>O prédio 45 é o Centro de Ciências Sociais e Aplicadas. Ele tem cinco andares e pode ser acessado através do subsolo ou do primeiro andar, por meio de escadas, mas no prédio tem elevadores e escadas para acessar os outros andares. Além de salas de aula, ele tem uma biblioteca voltada às matérias de ciências sociais no subsolo 1 e 2 com salas privativas de estudo. E, no primeiro andar, tem uma praça de alimentação.</Text>
            </View>
            <View style={InfoTela4Style.direitaTopView}>
                <Text style={InfoTela4Style.direitaText}>Prédio 46</Text>
            </View>
            <View style={InfoTela4Style.direitaBottomView}>
                <Text style={InfoTela4Style.prediosText}>O prédio 46 faz parte dos prédios da escola, nele têm salas de Educação Infantil e Fundamental I. Além disso, também possui um ambulatório.</Text>
            </View>
            <View style={InfoTela4Style.buttonView} >
                <Button
                    title='Próximo'
                    color='red'
                    onPress={() => navigation.navigate('InfoTela5')} />
            </View>
        </SafeAreaView>
    );
}

const InfoTela4Style = {
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