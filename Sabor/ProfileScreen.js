import React from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { View, Text, ScrollView, Image, TouchableOpacity, } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import colors from "./colors";
import { styles } from "./styles";

export default function ProfileScreen() {

  const navigation = useNavigation();

  return (
    <View style={styles.fundo}>

      <View style={styles.navbar}>

        <TouchableOpacity>
          <FontAwesome
            name="bars"
            size={35}
            color={colors.marrom}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
        >
          <FontAwesome
            name="home"
            size={40}
            color={colors.marrom}
          />
        </TouchableOpacity>

        <Image
          source={require("./assets/logo2.png")}
          style={styles.logoNavbar}
        />

        <StatusBar style="auto" />

      </View>

      <View style={styles.conteudoDevs}>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollDevs}
        >

          <View style={styles.cardDevs}>

            <Text style={styles.tituloDevs}>
              Desenvolvedores
            </Text>

            <View style={styles.linhaDevs} />

            <Text style={styles.textoIntroducaoDevs}>
              Este aplicativo foi desenvolvido com dedicação
              para proporcionar uma experiência simples e
              agradável para todos os usuários.
            </Text>

            <View style={styles.devBox}>

              <Image
              source={require("./assets/ray.png")}
              style={styles.fotoDev}
              />

              <View style={styles.devInfo}>

                <Text style={styles.nomeDev}>
                  Rayssa
                </Text>

                <Text style={styles.funcaoDev}>
                  Chefe do Time, usando HTML, CSS e JS.
                </Text>

              </View>

            </View>

            <View style={styles.devBox}>

              <Image
              source={require("./assets/joao.png")}
              style={styles.fotoDev}
              />

              <View style={styles.devInfo}>

                <Text style={styles.nomeDev}>
                  João Victor
                </Text>

                <Text style={styles.funcaoDev}>
                  Colaborador, usando HTML, CSS e JS.
                </Text>

              </View>

            </View>

            <View style={styles.devBox}>

              <Image
              source={require("./assets/image0.jpeg")}
              style={styles.fotoDev}
              />

              <View style={styles.devInfo}>

                <Text style={styles.nomeDev}>
                  Yasmin Cristina
                </Text>

                <Text style={styles.funcaoDev}>
                  Ajudante, usando HTML, CSS e JS.
                </Text>

              </View>

            </View>

            <View style={styles.devBox}>

              <Image
              source={require("./assets/sapo.png")}
              style={styles.fotoDev}
              />

              <View style={styles.devInfo}>

                <Text style={styles.nomeDev}>
                  Eduardo Macário
                </Text>

                <Text style={styles.funcaoDev}>
                  Colaborador, usando HTML, (proibido no CSS) e JS.
                </Text>

              </View>

            </View>


            <Text style={styles.creditosDevs}>
              © 2026 saBOR
            </Text>

            <Text style={styles.creditosSub}>
              Desenvolvido com muita aura e ego.
            </Text>

          </View>

        </ScrollView>

      </View>

      <View style={styles.rodape}>

        <Image
          source={require("./assets/logo.png")}
          style={styles.logoRodape}
        />

        <TouchableOpacity
          style={styles.botaoRodape}
          onPress={() => navigation.navigate("Home")}
        >

          <FontAwesome
            name="home"
            size={35}
            color={colors.escuro}
          />

          <Text style={styles.textoBotao}>
            Home
          </Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botaoRodape}
          onPress={() => navigation.navigate("Profile")}
        >

          <FontAwesome
            name="user"
            size={35}
            color={colors.escuro}
          />

          <Text style={styles.textoBotao}>
            Devs
          </Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botaoRodape}
          onPress={() => navigation.navigate("Sobre")}
        >

          <FontAwesome
            name="search"
            size={35}
            color={colors.escuro}
          />

          <Text style={styles.textoBotao}>
            Sobre
          </Text>

        </TouchableOpacity>

      </View>

    </View>
  );
}