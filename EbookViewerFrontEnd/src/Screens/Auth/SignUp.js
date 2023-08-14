import React from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function SignUp() {
    return(
        <ScrollView style={myStyle.container}>
            <View style={myStyle.containerViewing}>
                <View style={myStyle.viewingImage}>
                    <Image source={require('../../Assets/Images/logo.png')}/>
                    <Text style={myStyle.textTitle}>Ebook Viewer</Text>
                    <Text style={myStyle.text}>Buat Akun</Text>    
                </View>
            <View style={myStyle.containerButton}>
                <TouchableOpacity style={myStyle.button}>
                    <Image source={require('../../Assets/Images/logoitn.png')} style={myStyle.logoItn}/>
                    <Text style={myStyle.buttonText}>Siakad</Text>
                </TouchableOpacity>
                <TouchableOpacity style={myStyle.button}>
                <Image source={require('../../Assets/Images/logoitn.png')} style={myStyle.logoItn}/>
                    <Text style={myStyle.buttonText}>Sidosen</Text>
                </TouchableOpacity>
            </View>
            <View style={myStyle.containerTextInput}>
                    <FontAwesome name="user" size={30} color="gray" />
                    <TextInput placeholder="Email" />
                </View>
                <View style={myStyle.containerTextInput}>
                    <FontAwesome name="lock" size={30} color="gray" />
                    <TextInput placeholder="Password" />
                </View>
                <View style={myStyle.containerButtonSumbit}>
                <TouchableOpacity style={myStyle.buttonSubmit}>
                    <Text style={myStyle.buttonText}>Submit</Text>
                </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const myStyle = StyleSheet.create({
    buttonSubmit: {
        backgroundColor: '#283593',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        marginLeft: 4,
    },
    containerButtonSumbit: {
        flexDirection: 'row-reverse',
        marginLeft:25
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
    buttonText: {
        color:'white'
    },
    logoItn: {
        width:27,
        height:26,
        marginRight: 24
    },
    button: {
        backgroundColor: '#283593',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        marginLeft: 4,
        flexDirection: 'row',
        marginRight:8,
        flex:1,
        marginHorizontal:16
    },
    containerButton: {
        flexDirection: 'row',
        justifyContent:'center',
        marginVertical:26
    },
    text: {
        fontFamily: 'Poppins',
        color:'black'
    },
    viewingImage: {
        alignItems: 'center'
    },
    textTitle: {
        fontSize: 32,
        fontFamily: 'Poppins',
        color: 'black'
    },
    containerViewing: {
        marginVertical:64,
    },
    container: {
        flex:1,
        backgroundColor: 'white'
    }
})
