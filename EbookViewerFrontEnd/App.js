import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import SignIn from "./src/Screens/Auth/SignIn";
import SignUp from "./src/Screens/Auth/SignUp";
import MainContainer from "./src/Screens/TabMenu/Navigation/MainContainer";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={() => ({
        headerShown : false
      })}>
        <Stack.Screen name="MainContainer" component={MainContainer} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}