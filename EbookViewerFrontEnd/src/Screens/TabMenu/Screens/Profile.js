import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export default function Profile({navigation}) {
    return (
        <ScrollView style={myStyle.container}>
            <View style={myStyle.containerViewing}>
                <View style={myStyle.containerView}>
                    <FontAwesome name="user-circle-o" size={30} color="black"/>
                    <Text 
                        onPress={navigation.navigate('Profile')}
                        style={myStyle.textHeader}>Karolus@gmail.com
                    </Text>
                </View>
            </View>
        </ScrollView>
        
    )
}

const myStyle = StyleSheet.create({
    textHeader: {
        marginLeft : 4,
        color: 'black'
    },
    containerView: {
        flexDirection: 'row',
        marginTop: 4
    },
    containerViewing: {
        marginHorizontal: 6,
        backgroundColor: 'yellow'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})