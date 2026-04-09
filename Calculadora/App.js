import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react';

export default function App() {

  const [A, setA] = useState('');
  const [B, setB] = useState('');
  const [operacao, setOperacao] = useState('null');
  const [resultado, setResultado] = useState(0);

  const calculo = () => {
  const numA = parseFloat(A);
  const numB = parseFloat(B);
  let res = 0;

    switch (operacao) {
      case '+':
        res = numA + numB;
        break;
      case '-':
        res = numA - numB;
        break;
      case '*':
        res = numA * numB;
        break;
      case '/':
        res = numA / numB;
        break;
    }

    setResultado(res);
  };

  return (
    <View style={styles.container}>

      <Text>Calculadora</Text>

      <TextInput
        style={styles.input}
        value={A}
        onChangeText={setA}
        keyboardType="numeric"
        placeholder='Insira o valor 1'
      />

      <View style={styles.linha}>

      <Pressable
      style={[
        styles.botao,
        { backgroundColor: operacao === '+' ? 'orange' : 'gray' }
      ]}
      onPress={() => setOperacao('+')}
      >
      <Text> + </Text>
      </Pressable>

      <Pressable
        style={[
          styles.botao,
          { backgroundColor: operacao === '-' ? 'orange' : 'gray' }
        ]}
        onPress={() => setOperacao('-')}
      >
        <Text> - </Text>
      </Pressable>

      <Pressable
        style={[
          styles.botao,
          { backgroundColor: operacao === '*' ? 'orange' : 'gray' }
        ]}
        onPress={() => setOperacao('*')}
      >
        <Text> X </Text>
      </Pressable>

      <Pressable
        style={[
          styles.botao,
          { backgroundColor: operacao === '/' ? 'orange' : 'gray' }
        ]}
        onPress={() => setOperacao('/')}
      >
        <Text> : </Text>
      </Pressable>

      </View>

      <TextInput
        style={styles.input}
        value={B}
        onChangeText={setB}
        keyboardType="numeric"
        placeholder='Insira o valor 2'
      />

      <TouchableOpacity 
      style={styles.botao2} 
      onPress={calculo}>
        <Text>Calcular</Text>
      </TouchableOpacity>

      <Text>Resultado: {resultado}</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    borderWidth: 1,
    borderRadius: 20,
    width: 200,
    margin: 10,
    padding: 10,
  },

  linha: {
  flexDirection: 'row',
  gap: 10,
  justifyContent: 'center',
  width: '100%',
  },

  botao: {
    marginTop: 10,
    width: 40,
    borderRadius: 10,
    backgroundColor: 'gray',
    padding: 10,
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },

  botao2: {
    marginTop: 10,
    width: 70,
    borderRadius: 10,
    backgroundColor: 'gray',
    padding: 10,
    alignItems: 'center',
    marginBottom: 20,
  },

});