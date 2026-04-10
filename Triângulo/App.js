import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';

export default function App() {

  const [valorA, setValorA] = useState('');
  const [valorB, setValorB] = useState('');
  const [valorC, setValorC] = useState('');
  const [triangulo, setTriangulo] = useState('');
  const [tipo, setTipo] = useState('');
  const [imagem, setImagem] = useState('');

  const verificarTriangulo = () => {
    const numA = parseFloat(valorA);
    const numB = parseFloat(valorB);
    const numC = parseFloat(valorC);

    if (numA + numB > numC && numB + numC > numA && numC + numA > numB) {
      setTriangulo('Verdadeiro.');
    } else {
      setTriangulo('Falso.');
    }

  }

  const verificarTipo = () => {
    const numA = parseFloat(valorA);
    const numB = parseFloat(valorB);
    const numC = parseFloat(valorC);

    if (numA === numB && numB === numC) {
      setTipo('Equilátero (Três lados iguais).');
    } else if (numA === numB || numA === numC || numB === numC) {
      setTipo('Isósceles (Dois lados iguais).');
    } else {
      setTipo('Escaleno (Nenhum lado igual).');
    }

  };

  return (

    <ScrollView style={{backgroundColor: '#c2b8fa'}}>
    <View style={styles.container}>

      <Text style={styles.text}>
        Verificação de Triângulo 
      </Text>

      <StatusBar style="auto" />

      <TextInput
        style={styles.input}
        value={valorA}
        onChangeText={setValorA}
        keyboardType="numeric"
        placeholder='A'
      />

      <TextInput
        style={styles.input}
        value={valorB}
        onChangeText={setValorB}
        keyboardType="numeric"
        placeholder='B'
      />

      <TextInput
        style={styles.input}
        value={valorC}
        onChangeText={setValorC}
        keyboardType="numeric"
        placeholder='C'
      />

      <Text style={styles.text2}>
        Os valores formam um triângulo?
      </Text>

      <TouchableOpacity 
        style={styles.botao} 
        onPress={verificarTriangulo}>
        <Text style={styles.text3}>
          Verificar Triângulo
        </Text>
      </TouchableOpacity>

      <Text style={styles.text2}>
        Resposta: 
          <Text style={{color: 'red'}}>
          {triangulo}
          </Text>
      </Text>

      <TouchableOpacity 
        style={styles.botao} 
        onPress={verificarTipo}>
        <Text style={styles.text3}>
          Verificar o Tipo
        </Text>
      </TouchableOpacity>

      <Text style={styles.text2}>
        Resultado:
          <Text style={{color: 'red'}}>
          {tipo}
          </Text>
      </Text>

     
      
    

      {tipo === 'Equilátero (Três lados iguais).' && (
        <Image 
          source={require('./assets/equilatero.png')}
          style={{ width: 200, height: 200, resizeMode: 'contain', marginTop: -30 }}
        />
      )}

      {tipo === 'Isósceles (Dois lados iguais).' && (
        <Image 
          source={require('./assets/isosceles.png')}
          style={{ width: 200, height: 200, resizeMode: 'contain' }}
        />
      )}

       {tipo === 'Escaleno (Nenhum lado igual).' && (
        <Image 
          source={require('./assets/escaleno.png')}
          style={{ width: 200, height: 100, resizeMode: 'contain' }}
        />
      )}
    </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },

  text: {
    fontFamily: 'Sans-serif',
    fontSize: 20,
    fontWeight: 800,
    margin: 10,
    color: '#563594',
  },

  text2: {
    fontFamily: 'Sans-serif',
    fontSize: 15,
    fontWeight: 700,
    margin: 10,
  },

  text3: {
    fontSize: 15,
    color: 'white',
    fontWeight: 500,
  },

  input: {
    backgroundColor: '#60478f93',
    borderColor: '#60478f93',
    borderWidth: 3,
    borderRadius: 10,
    width: 70,
    margin: 10,
    padding: 10,
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 600,
    color: 'white',
  },

  botao: {
    width: 200,
    borderRadius: 10,
    backgroundColor: '#60478f93',
    borderColor: '#60478f93',
    borderWidth: 3,
    padding: 10,
    alignItems: 'center',
    margin: 10,
  },

});
