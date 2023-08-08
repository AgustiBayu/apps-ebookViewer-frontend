import React from "react";
import { StyleSheet, Text, View } from 'react-native'

export default function SignUp() {
    return(
        <View style={style.container}>
            <Text>
                welcom to abdul
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'white'
    }
})
