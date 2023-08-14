import React from "react";
import { ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity, Image, FlatList } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const data = [
    { id: '1', source: require('../../../Assets/Images/ebook1.png') },
    { id: '2', source: require('../../../Assets/Images/ebook2.png') },
    { id: '3', source: require('../../../Assets/Images/ebook3.png') },
    { id: '4', source: require('../../../Assets/Images/ebook4.png') },
    { id: '5', source: require('../../../Assets/Images/ebook5.png') },
    { id: '6', source: require('../../../Assets/Images/ebook6.png') },
    { id: '7', source: require('../../../Assets/Images/ebook7.png') },
    { id: '8', source: require('../../../Assets/Images/ebook8.png') },
    { id: '9', source: require('../../../Assets/Images/ebook9.png') },
    { id: '10', source: require('../../../Assets/Images/ebook10.png') },
];


export default function Home({ navigation }) {

    const renderItem = ({ item }) => (
        <View style={myStyle.bookContainer}>
            <Image source={item.source} style={myStyle.bookImage} />
        </View>
    );


    return (
        <ScrollView style={myStyle.container}>
            <View style={myStyle.containerViewing}>
                <View style={myStyle.containerView}>
                    <FontAwesome name="user-circle-o" size={30} color="black" />
                    <Text
                        onPress={navigation.navigate('Home')}
                        style={myStyle.textHeader}>Agustibayu.abs@gmail.com
                    </Text>
                </View>
                <View style={myStyle.containerSeacrh}>
                    <Text style={myStyle.textSearch}>Judul Buku\Nama Penulis\Abstrak</Text>

                    <View style={myStyle.containerTextInp}>
                        <TextInput style={myStyle.textInput} />
                        <TouchableOpacity style={myStyle.buttonSeacrh}>
                            <FontAwesome name="search" size={20} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={myStyle.containerImage}>
                        <Image source={require('../../../Assets/Images/kampus.png')} style={myStyle.logoKampus} />
                    </View>
                    <Text style={myStyle.textSearch}>Jelajahi penelitian ilmiah, teknis, dan berbagai ilmu lainya di perpustakaan Institut Teknologi Nasional Malang</Text>
                    <View style={myStyle.line} />

                    <View style={myStyle.containerTextEbook}>
                        <Text style={myStyle.textEbook}>Top E-Books</Text>
                        <TouchableOpacity onPress={() => console.log('Lihat Semua')}>
                            <Text style={myStyle.textEbook}>Lihat Semua</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        horizontal
                    />

                </View>
            </View>
        </ScrollView>
    )
}

const myStyle = StyleSheet.create({
    bookContainer: {
        width: 120,
        height: 150,
        margin: 5,
        borderWidth: 2,
        borderColor: '#ccc',
    },
    bookImage: {
        flex: 1,
        width: undefined,
        height: undefined,
    },
    textEbook: {
        fontSize: 18,
        color: '#283593',
        fontWeight: 'bold'
    },
    containerTextEbook: {
        marginTop: 8,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    line: {
        borderBottomWidth: 1.5, // Lebar garis
        borderColor: 'black', // Warna garis
    },
    containerImage: {
        width: '100',
        height: '100',
        aspectRatio: 1.3, // To maintain a square aspect ratio
        overflow: 'hidden',
    },
    logoKampus: {
        flex: 1,
        width: undefined,
        height: undefined,
    },
    buttonSeacrh: {
        backgroundColor: '#FE5979',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        marginLeft: 8,
        marginBottom: 8,
        height: 40
    },
    textInput: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 12,
        height: 40
    },
    containerTextInp: {
        flexDirection: 'row',
    },
    textSearch: {
        color: 'black',
        fontFamily: 'Popins',
        marginTop: 8
    },
    containerSeacrh: {
        marginTop: 32,
    },
    textHeader: {
        marginLeft: 4,
        color: 'black'
    },
    containerView: {
        flexDirection: 'row',
        marginTop: 16
    },
    containerViewing: {
        marginHorizontal: 6,
        // backgroundColor: 'yellow'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})