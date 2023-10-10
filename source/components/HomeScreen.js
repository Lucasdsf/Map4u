import * as React from "react";
import { Button, View, Text, ImageBackground } from "react-native";


export function HomeScreen({ navigation }) {
    return (
        <ImageBackground source={require('../../assets/baixo.png')} style={HomeScreenStyle.homeImage}>
            <View style={HomeScreenStyle.homeView}>
                <Text style={HomeScreenStyle.homeText}>Map4u</Text>
                <Button
                    title='Iniciar'
                    color='red'
                    onPress={() => navigation.navigate('Portarias')}
                />
            </View>
        </ImageBackground>
    );
}


const HomeScreenStyle = {
    homeImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center'
    },
    homeView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,.5)',
    },
    homeText: {
        color: 'white',
        fontSize: 32,
        textAlign: 'center',
        lineHeight: 32,
    }
}