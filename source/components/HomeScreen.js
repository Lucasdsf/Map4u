import * as React from "react";
import { Button, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function HomeScreen({ navigation }) {
    return (
        <SafeAreaView style={HomeScreenStyle.homeView}>
            <View>
                <Text style={HomeScreenStyle.homeText}>Map4u</Text>
            </View>
            <View style={HomeScreenStyle.buttonView}>
                <Button
                    title='Iniciar'
                    color='red'
                    onPress={() => navigation.navigate('Portarias')}
                />
            </View>
            <View style={HomeScreenStyle.buttonView}>
                <Button
                    title='Mais Informações'
                    color='red'
                    onPress={() => navigation.navigate('InfoTela1')}
                />
            </View>
        </SafeAreaView>
    );
}

const HomeScreenStyle = {
    homeView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    homeText: {
        color: 'white',
        fontSize: 32,
        textAlign: 'center',
        lineHeight: 32,
    },
    buttonView: {
        margin: 32
    },
}