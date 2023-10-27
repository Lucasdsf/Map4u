import * as React from "react";
import { Button, View, Text, Alert } from "react-native";


export function Portarias({ navigation }) {
    return (
        <View style={PortariasStyle.PortariasView}>
            <Text style={PortariasStyle.PortariasText}>Qual portaria você deseja iniciar o trajeto ?</Text>
            <Button
                title='Rua Piauí'
                color='red'
                justifyContent='center'
                onPress={() => navigation.navigate('PiauiTela1')} />
            <Button
                title='Rua Maria Antônia'
                color='red'
                justifyContent='center'
                onPress={() => navigation.navigate('MariaAntoniaTela1')} />
            <Button
                title='Rua Consolação'
                color='red'
                justifyContent='center'
                onPress={() => Alert.alert('Button with adjusted color pressed')} />
            <Button
                title='Rua Itambé'
                color='red'
                justifyContent='center'
                onPress={() => Alert.alert('Button with adjusted color pressed')} />
        </View>
    );
}

const PortariasStyle = {
    PortariasView: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'black',
    },
    PortariasText: {
        color: 'white',
        fontSize: 32,
        textAlign: 'center',
        lineHeight: 32,
    }
}