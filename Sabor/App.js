import * as React from "react";
import { createStaticNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./paginas/HomeScreen";
import ProfileScreen from "./paginas/ProfileScreen";
import Sobre from "./paginas/Sobre";

const MyStack = createStackNavigator({
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        headerShown: false,
      },
    },

    Profile: {
      screen: ProfileScreen,
      options: {
        headerShown: false,
      },
    },

    Sobre: {
      screen: Sobre,
      options: {
        headerShown: false,
      },
    },

  },
});

const Navigation = createStaticNavigation(MyStack);

export default function App() {
  return <Navigation />;
}