import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from "../Screens/Home";
import Profile from "../Screens/Profile";
import Favorit from "../Screens/Favorit";

const homeName = 'Home'
const profileName = 'Profile'
const favoritName = 'Favorit'


const Tab = createBottomTabNavigator();

export default function MainContainer() {
    return (
        <Tab.Navigator
            initialRouteName={homeName} // Nama layar pertama yang akan ditampilkan
            activeColor="#283593" // Warna ikon aktif
            screenOptions={() => ({
                headerShown : false
              })
            }>
            <Tab.Screen
                name={homeName}
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="home" color={color} size={26} />
                    ),
                }}
            />
             <Tab.Screen
                name={favoritName}
                component={Favorit}
                options={{
                    tabBarLabel: 'Favorit',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="star" color={color} size={26} />
                    ),
                }}
            />
             <Tab.Screen
                name={profileName}
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="person" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
