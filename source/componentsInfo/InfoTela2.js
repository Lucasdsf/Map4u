import * as React from "react";
import { Button, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export function InfoTela2({ navigation }) {
    return (
        <SafeAreaView style={InfoTela2Style.areaView}>
            <View style={InfoTela2Style.esquerdaTopView}>
                <Text style={InfoTela2Style.esquerdaText}>Prédio 24</Text>
            </View>
            <View style={InfoTela2Style.esquerdaBottomView}>
                <Text style={InfoTela2Style.prediosText}>O prédio 24 é o prédio de Direito, mas no térreo encontra-se o Laboratório de Física.</Text>
            </View>
            <View style={InfoTela2Style.frenteTopView}>
                <Text style={InfoTela2Style.frenteText}>Prédio 25</Text>
            </View>
            <View style={InfoTela2Style.frenteBottomView}>
                <Text style={InfoTela2Style.prediosText}>O prédio 25 é um dos prédios de Direito, mas também é usado para outros cursos. Além de salas de aula, ele tem no térreo um Laboratório de Engenharia. Ele tem quatro andares que podem ser acessados por meio de elevador ou escadas.</Text>
            </View>
            <View style={InfoTela2Style.direitaTopView}>
                <Text style={InfoTela2Style.direitaText}>Prédio 29</Text>
            </View>
            <View style={InfoTela2Style.direitaBottomView}>
                <Text style={InfoTela2Style.prediosText}>O prédio 29 é composto por dois andares, no térreo tem vestiários feminino e masculino e duas quadras de vôlei. No primeiro andar, tem uma quadra poliesportiva, ela é usada para treinos de handebol, futsal e basquete. O primeiro andar pode ser acessado por meio de escada ou elevador</Text>
            </View>
            <View style={InfoTela2Style.buttonView} >
                <Button
                    title='Próximo'
                    color='red'
                    onPress={() => navigation.navigate('InfoTela3')} />
            </View>
        </SafeAreaView>
    );
}

const InfoTela2Style = {
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