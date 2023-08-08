import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function SignIn() {

    const nav = useNavigation()

    function onSignUp() {
        nav.navigate('SignUp')
    }

    return (
        <View style={style.container}>
            <TouchableOpacity onPress={onSignUp}>
                <Text>
                    welcom to mcrMilenial
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
})
