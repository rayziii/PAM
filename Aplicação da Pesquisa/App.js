import { View, Text, ScrollView, Image } from "react-native";
// uso de hooks (permitem utilizar recursos do react dentro dos componentes)
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { FontAwesome } from "@expo/vector-icons";
import Produto from "./components/Produto";
import DATA from "./components/DATA";
import styles from "./components/styles";

export default function App() {

    // uso de hooks
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todos");

  // uso de hooks
  const [favoritos, setFavoritos] = useState([]);

    // mostrar todos os produtos
    const produtosFiltrados = categoriaSelecionada === "Todos" 

    // mostrar somente os produtos que estão nos favoritos
    ? DATA : categoriaSelecionada === "Favoritos"

    // mostrar apenas os produtos da categoria selecionada
    ? DATA.filter((produto) => favoritos.includes(produto.id))
    : DATA.filter((produto) => produto.categoria === categoriaSelecionada);

    return (

        // uso de jsx (estrutura parecida com html mas em js)
        <View style={styles.container}>

            <Text style={styles.titulo}>
                MakeBella
            </Text>

            <Text style={styles.subtitulo}>
                Encontre sua maquiagem favorita!
            </Text>

    <View style={styles.caixa}>

    <Text style={styles.caixaTexto}>
        <FontAwesome name="search" size={18} color="#999" style={{ marginRight: 8 }} />
        <Text>Escolha uma categoria</Text>
    </Text>

          <Picker
              selectedValue={categoriaSelecionada}
              onValueChange={(itemValue) => setCategoriaSelecionada(itemValue)}
          >
              <Picker.Item label="🪞 Todas" value="Todos" />
              <Picker.Item label="💄 Boca" value="Boca" />
              <Picker.Item label="👁️ Olhos" value="Olhos" />
              <Picker.Item label="✨ Pele" value="Pele" />
              <Picker.Item label="⭐ Favoritos" value="Favoritos" />
          </Picker>

      </View>

            <Text style={styles.produtosTitulo}>
                Produtos em destaque
            </Text>

            <ScrollView vertical showsVerticalScrollIndicator={true}>

              {categoriaSelecionada === "Favoritos" && produtosFiltrados.length === 0 ? (
                  <Text style={styles.semFavoritos}>
                      Você não favoritou nenhum item
                  </Text>

                  // uso de props (passando informações para um componente)
                  // app --> produto
              ) : (
                  produtosFiltrados.map((produto) => (
                      <Produto
                          key={produto.id}
                          imagem={produto.imagem}
                          nome={produto.nome}
                          categoria={produto.categoria}
                          preco={produto.preco}
                          favorito={favoritos.includes(produto.id)}
                          setFavorito={() => {
                              if (favoritos.includes(produto.id)) {
                                  setFavoritos(favoritos.filter((id) => id !== produto.id));
                              } else {
                                  setFavoritos([...favoritos, produto.id]);
                              }
                          }}
                      />
                  ))
              )}

          </ScrollView>

        </View>
    );
}
