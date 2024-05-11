import React from "react";
import { createTheme, ThemeProvider } from "@rneui/themed";
import Component from "./components/MyComponent";

import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from "./src/views/HomeScreen";
import StudentScreen from "./src/views/StudentScreen";
import StudentInfoScreen from "./src/views/StudentInfoScreen";
import ShopScreen from "./src/views/ShopScreen";
import ShopScreen2 from "./src/views/ShopScreen2";
import CreateFeed from "./src/views/CreateFeed";


const Stack = createNativeStackNavigator();

const theme = createTheme({
  lightColors: {},
  darkColors: {},
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Students" component={StudentScreen} />
          <Stack.Screen name="Student Info" component={StudentInfoScreen} />
          <Stack.Screen name="Shop" component={ShopScreen2} />
          <Stack.Screen name="AddFlower" component={CreateFeed}/>
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
