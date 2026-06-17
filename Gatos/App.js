import { StatusBar } from 'expo-status-bar';
import { ScrollView, View, Text, Image } from 'react-native';

import { styles } from './components/styles.js';
import { DATA } from './components/DATA.js';

export default function App() {

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.titulo}> Raças de Gatos </Text>

      <View style={styles.card}>
        <Image source={DATA[0].imagem} style={styles.imagem} />
        <View style={styles.textos}>
          <Text style={styles.nome}>{DATA[0].nome}</Text>
          <Text style={styles.texto}>{DATA[0].descricao}</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Image source={DATA[1].imagem} style={styles.imagem} />
        <View style={styles.textos}>
          <Text style={styles.nome}>{DATA[1].nome}</Text>
          <Text style={styles.texto}>{DATA[1].descricao}</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Image source={DATA[2].imagem} style={styles.imagem} />
        <View style={styles.textos}>
          <Text style={styles.nome}>{DATA[2].nome}</Text>
          <Text style={styles.texto}>{DATA[2].descricao}</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Image source={DATA[3].imagem} style={styles.imagem} />
        <View style={styles.textos}>
          <Text style={styles.nome}>{DATA[3].nome}</Text>
          <Text style={styles.texto}>{DATA[3].descricao}</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Image source={DATA[4].imagem} style={styles.imagem} />
        <View style={styles.textos}>
          <Text style={styles.nome}>{DATA[4].nome}</Text>
          <Text style={styles.texto}>{DATA[4].descricao}</Text>
        </View>
      </View>

    </ScrollView>
  );
}