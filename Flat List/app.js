// STYLE

import { StyleSheet, StatusBar } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
      backgroundColor: '#fca0a0'
    },
  
    item: {
      backgroundColor: '#ffffff',
      width: 300,
      height: 100,
      padding: 15,
      marginVertical: 8,
      marginHorizontal: 16,
      marginTop: 25,
      borderRadius: 20,
      alignSelf: 'center',
    },
  
    img: {
      width: 80,
      height: 80,
      borderRadius: 100,
      bottom: 5,
    },
  
    title: {
      fontSize: 20,
      marginLeft: 100,
      bottom: 90,
      fontWeight: 800,
      color: '#814545',
    },
  
    textos: {
      fontSize: 15,
      marginLeft: 100,
      bottom: 90,
      fontWeight: 600,
    }
  
  });

//  APP


import {View, FlatList, Image, Text} from 'react-native';

import { styles } from './components/styles.js';
import { DATA } from './components/DATA.js';

const Item = ({imagem, title, valor, cadastro, quantidade}) => (
  <View style={styles.item}>

    <Image 
    source={imagem}
    style={styles.img}
    />

    <Text style={styles.title}>{title}</Text>
    <Text style={styles.textos}>{valor}</Text>
    <Text style={styles.textos}>{cadastro}</Text>
    <Text style={styles.textos}>{quantidade}</Text>

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
        valor={item.valor}
        cadastro={item.cadastro}  
        quantidade={item.quantidade}

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
    imagem: require('../assets/batom.png'),
    title: 'Batom Vermelho',
    valor: 'R$ 25,00',
    cadastro: '14/02/2025',
    quantidade: '53 unidades'
  },
  {
    id: '2',
    imagem: require('../assets/base.png'),
    title: 'Base Líquida',
    valor: 'R$ 15,00',
    cadastro: '27/01/2025',
    quantidade: '96 unidades'
  },
  {
    id: '3',
    imagem: require('../assets/blush.png'),
    title: 'Blush Compacto',
    valor: 'R$ 20,00',
    cadastro: '25/06/2025',
    quantidade: '32 unidades'
  },
  {
    id: '4',
    imagem: require('../assets/rimel.png'),
    title: 'Rímel',
    valor: 'R$ 10,00',
    cadastro: '13/09/2025',
    quantidade: '67 unidades'
  },
  {
    id: '5',
    imagem: require('../assets/compacto.png'),
    title: 'Pó Compacto',
    valor: 'R$ 12,00',
    cadastro: '27/09/2025',
    quantidade: '78 unidades'
  },
];