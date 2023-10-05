import * as React from "react";
import { Button, View, Text, ImageBackground } from "react-native";


export function HomeScreen({ navigation }) {
    return (
        <ImageBackground source={require('../../assets/baixo.png')} style={HomeScreenstyle.image}>
            <View style={HomeScreenstyle.view}>
                <Text style={HomeScreenstyle.text}>Map4u</Text>
                    <Button
                        title='Iniciar'
                        color='red'
                        onPress={() => navigation.navigate('Portarias')}
                    />
            </View>
        </ImageBackground>
    );
}


const HomeScreenstyle = {
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center'
    },
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,.5)',
    },
    text: {
        color: 'white',
        fontSize: 32,
        textAlign: 'center',
        lineHeight: 32,
    }
}