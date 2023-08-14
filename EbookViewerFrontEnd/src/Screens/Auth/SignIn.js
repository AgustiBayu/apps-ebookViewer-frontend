import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Button, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { API } from "../../Components/API";
import { fetchData } from "../../Components/BaseComp";

export default function SignIn() {

    const [username, setUsername] = useState('')
    const [pass, setPass] = useState('')

    async function onLogin() {
        try {
            console.log(API.signIn);
            const data = await fetchData(API.signIn, {}, {
                body: JSON.stringify({
                    username: username,
                    password: pass
                })
            })
            
            console.log(data);
        } catch (e) {
            console.log(e);
        }
    }

    function onUsername(text) {
        setUsername(text)
    }

    function onPass(text) {
        setPass(text)
    }

    return (
        <ScrollView style={myStyle.container}>
            <View style={myStyle.containerViewing}>
                <View style={myStyle.containerImage}>
                    <Image source={require('../../Assets/Images/logo.png')} />
                    <Text style={myStyle.text}>
                        Ebook Viewer
                    </Text>
                </View>
                <View style={myStyle.containerTextInput}>
                    <FontAwesome name="user" size={30} color="gray" />
                    <TextInput style={myStyle.input} placeholder="Email" onChangeText={onUsername} />
                </View>
                <View style={myStyle.containerTextInput}>
                    <FontAwesome name="lock" size={30} color="gray" />
                    <TextInput style={myStyle.input} placeholder="Password" onChangeText={onPass} />
                </View>
                <View style={myStyle.containerButton}>
                    <TouchableOpacity style={myStyle.button}>
                        <Text style={myStyle.btnText}>Register</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={myStyle.button} onPress={onLogin}>
                        <Text style={myStyle.btnText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const myStyle = StyleSheet.create({
    containerImage: {
        alignItems: 'center'
    },
    btnText: {
        color: 'white'
    },
    containerTextInput: {
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
        marginHorizontal: 24,
        marginBottom: 18,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 12,
        paddingHorizontal: 16,
    },
    button: {
        backgroundColor: '#283593',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        marginLeft: 4,
    },
    containerButton: {
        flexDirection: 'row-reverse',
        marginLeft: 25
    },
    input: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: 'white',
        marginLeft: 16
    },
    text: {
        fontSize: 32,
        fontFamily: 'Poppins',
        color: 'black',
        marginBottom: 62
    },
    containerViewing: {
        marginVertical: 128,
    },
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});
