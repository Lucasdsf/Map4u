import * as React from "react";
import { Button, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export function InfoTela3({ navigation }) {
    return (
        <SafeAreaView style={InfoTela3Style.areaView}>
            <View style={InfoTela3Style.esquerdaTopView}>
                <Text style={InfoTela3Style.esquerdaText}>Prédio 30 - Mackgraphe</Text>
            </View>
            <View style={InfoTela3Style.esquerdaBottomView}>
                <Text style={InfoTela3Style.prediosText}>O prédio 30, mais conhecido como Mackgraphe, é onde estão os laboratórios de pesquisa de grafeno e nanotecnologia.</Text>
            </View>
            <View style={InfoTela3Style.frenteTopView}>
                <Text style={InfoTela3Style.frenteText}>Prédio 31</Text>
            </View>
            <View style={InfoTela3Style.frenteBottomView}>
                <Text style={InfoTela3Style.prediosText}>O prédio 31 é o prédio de Tecnologia e Informação. Ele tem quatro andares e pode ser acessado pelo térreo, por meio de rampa de acesso, ou pelo primeiro andar, por meio de escadas. Possui um elevador e escadas para acessar os andares. Nele tem laboratórios com notebooks onde são ministradas as aulas dos cursos de tecnologia. No primeiro andar fica a secretaria da Faculdade de Tecnologia e Informação e a sala de professores. Além disso, no terceiro andar, tem uma das entradas do laboratório da Apple Academy.</Text>
            </View>
            <View style={InfoTela3Style.direitaTopView}>
                <Text style={InfoTela3Style.direitaText}>Prédio 33</Text>
            </View>
            <View style={InfoTela3Style.direitaBottomView}>
                <Text style={InfoTela3Style.prediosText}>O prédio 33 é o outro prédio de Tecnologia e Informação. Ele tem quatro andares com salas e laboratórios. No térreo tem dois laboratórios de Engenharia e, no terceiro andar, fica um dos acessos ao laboratório da Apple Academy.</Text>
            </View>
            <View style={InfoTela3Style.buttonView} >
                <Button
                    title='Próximo'
                    color='red'
                    onPress={() => navigation.navigate('InfoTela4')} />
            </View>
        </SafeAreaView>
    );
}

const InfoTela3Style = {
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