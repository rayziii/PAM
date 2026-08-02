import React from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { View, Image, TouchableOpacity, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import colors from "./colors";
import { styles } from "./styles";

export default function HomeScreen() {

  const navigation = useNavigation();

  return (
    <View style={styles.fundo}>

      {/* Navbar */}
      <View style={styles.navbar}>

        <TouchableOpacity>
          <FontAwesome name="bars" size={35} color={colors.marrom}/>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
        >
          <FontAwesome name="home" size={40} color={colors.marrom}/>
        </TouchableOpacity>

        <Image
          source={require("./assets/logo2.png")}
          style={styles.logoNavbar}
        />

        <StatusBar style="auto" />

      </View>

      {/* Rodapé */}
      <View style={styles.rodape}>

        <Image
          source={require("./assets/logo.png")}
          style={styles.logoRodape}
        />

        <TouchableOpacity 
          style={styles.botaoRodape}
          onPress={() => navigation.navigate("Home")}
        >
        <FontAwesome name="home" size={40} color={colors.escuro}/>
        <Text style={styles.textoBotao}>
          Home
        </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.botaoRodape}
          onPress={() => navigation.navigate("Profile")}
        >
        <FontAwesome name="user" size={30} color={colors.escuro}/>
        <Text style={styles.textoBotao}>
          Devs
        </Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.botaoRodape}
        onPress={() => navigation.navigate("Sobre")}
        >
        <FontAwesome name="search" size={35} color={colors.escuro}/>
          <Text style={styles.textoBotao}>
            Sobre
          </Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}