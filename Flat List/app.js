// STYLE 

import { StyleSheet, StatusBar } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#cbcbcb'
  },

  item: {
    backgroundColor: '#ffffff',
    height: 100,
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20,
  },

  img: {
    width: 80,
    height: 80,
    borderRadius: 100,
    bottom: 5,
  },

  img2: {
    width: 20,
    height: 10,
    position: 'absolute',
    top: 63,
    left: 110,
    zIndex: 1,
  },

  title: {
    fontSize: 25,
    marginLeft: 100,
    bottom: 80,
  },

  mensagem: {
    fontSize: 15,
    left: 120,
    bottom: 70,
    color: '#727171',
  },

   horario: {
    fontSize: 15,
    left: 300,
    bottom: 130,
    color: '#727171',
  }

});

// APP 

import {View, FlatList, Image, Text} from 'react-native';

import { styles } from './components/styles.js';
import { DATA } from './components/DATA.js';

const Item = ({imagem, title, mensagem, visto, horario}) => (
  <View style={styles.item}>

    <Image 
    source={imagem}
    style={styles.img}
    />

    <Image 
    source = {visto}
    style = {styles.img2}
    />

    <Text style={styles.title}>{title}</Text>

    <Text style={styles.mensagem}>{mensagem}</Text>

    <Text style={styles.horario}>{horario}</Text>

  </View>
);

export default function App(){  
  return(
    <View style={styles.container}>
      <FlatList
        data={DATA}
  
        renderItem={({item}) => <Item 
  
          title={item.title} 
          imagem={item.imagem} 
          mensagem={item.mensagem}
          horario={item.horario}  
          visto={item.visto}
  
        />}
  
        keyExtractor={item => item.id}
      />
    </View>
    )  
  };

// DATA

export const DATA = [
  {
    id: '1',
    imagem: require('../assets/pipa.jpg'),
    title: 'Pipa',
    mensagem: 'to com fome 🙄',
    visto: require('../assets/visto.png'),
    horario: '12:49'
  },
  {
    id: '2',
    imagem: require('../assets/mofo.jpg'),
    title: 'Mofo',
    mensagem: 'abre a porta pra mim 😉',
    visto: require('../assets/naovisto.png'),
    horario: '05:32'
  },
  {
    id: '3',
    imagem: require('../assets/picuinha.jpg'),
    title: 'Pisquila',
    mensagem: 'não deixa o mofo entrar 😡',
    visto: require('../assets/visto.png'),
    horario: '05:35'
  },
  {
    id: '4',
    imagem: require('../assets/foia.jpg'),
    title: 'Foia',
    mensagem: 'nao quero tomar remedio 🥺',
    visto: require('../assets/visto.png'),
    horario: '07:21'
  },
  {
    id: '5',
    imagem: require('../assets/neneca.jpg'),
    title: 'Neneca',
    mensagem: 'levei outra lagartixa pra dentro 😘',
    visto: require('../assets/naovisto.png'),
    horario: '18:50'
  },
];



