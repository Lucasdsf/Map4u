import * as React from "react";
import { Button, View, Text, Alert, ImageBackground } from "react-native";


export function Portarias({ navigation }) {
    return (
        <ImageBackground source={require('../../assets/cima.jpg')} style={HomeScreenstyle.HomeScreenImage}>
            <View style={HomeScreenstyle.HomeScreenView}>
                <Text style={HomeScreenstyle.HomeScreenText}>Qual portaria você deseja iniciar o trajeto ?</Text>
                <Button
                    title='Rua Piauí'
                    color='red'
                    justifyContent='center'
                    onPress={() => navigation.navigate('Piaui')} />
                <Button
                    title='Rua Maria Antônia'
                    color='red'
                    justifyContent='center'
                    onPress={() => Alert.alert('Button with adjusted color pressed')} />
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
        </ImageBackground>
    );
}

const HomeScreenstyle = {
    HomeScreenImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center'
    },
    HomeScreenView: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,.5)',
    },
    HomeScreenText: {
        color: 'white',
        fontSize: 32,
        textAlign: 'center',
        lineHeight: 32,
    }
}