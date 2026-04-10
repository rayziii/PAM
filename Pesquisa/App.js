import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default function App() {
  return (
    <ScrollView>

     

      <View style={styles.container}>
        <Text style={styles.titulo1}>PAM</Text>
        <StatusBar style="auto" />

        <Image 
                source={require('./assets/gatinho.gif')}
                style={styles.imagem}
              />

        <View style={styles.titulo}>
          <Text style={styles.titulo1}>Tecnologias para Mobile</Text>
          <Text style={styles.titulo}>Android</Text>
          <Text style={styles.texto}>Kotlin - Linguagem moderna usada principalmente para desenvolver apps Android de forma mais segura e concisa.</Text>
          <Text style={styles.texto}>IDE oficial para desenvolvimento Android baseada em IntelliJ IDEA, criada pelo Google.</Text>
          <Text style={styles.titulo}>IOS</Text>
          <Text style={styles.texto}>Swift - Linguagem de programação criada pela Apple para desenvolver apps para IOS, macOS, watchOS e tvOS.</Text>
          <Text style={styles.texto}>Objective-C - Linguagem tradicional usada no desenvolvimento de apps para plataformas da Apple antes da popularização do Swift.</Text>
          <Text style={styles.texto}>Xcode - Ambiente oficial de desenvolvimento da Apple para criar aplicativos para IOS.</Text>
          <Text style={styles.titulo}>Multiplataforma</Text>
          <Text style={styles.texto}>Flutter - Framework de UI do Google que permite criar apps multiplataforma usando a linguagem Dart.</Text>
          <Text style={styles.texto}>React Native - Framework do Meta Platforms que permite desenvolver apps móveis usando React e JavaScript.</Text>
          <Text style={styles.texto}>Ionic - Framework para criação de apps híbridos usando tecnologias web como HTML, CSS e JavaScript.</Text>
          <Text style={styles.texto}>Xamarin - Plataforma da Microsoft para desenvolvimento mobile multiplataforma usando C# e .NET.</Text>
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    alignItems: 'center',
    padding: 10,
    fontWeight: 700, 
    color: 'white',
  },

  titulo1: {
    alignItems: 'center',
    padding: 10,
    fontWeight: 700, 
    color: 'rgba(119, 8, 65, 0.8)',
  },

  texto: {
    fontSize: 12,
    fontWeight: 600, 
    color: 'rgba(196, 0, 101, 0.8)',
    textAlign: 'justify',
    width: 350,
  },

  imagem: {
    width: 200,
    height: 200,
    marginBottom: 10,
    borderRadius: 400,
  },
});