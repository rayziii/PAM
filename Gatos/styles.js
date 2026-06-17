import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    
  container: {
    backgroundColor: 'rgba(255, 219, 91, 0.8)',
    paddingVertical: 20,
    alignItems: 'center',
  },

    titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'rgb(144, 86, 45)',
    marginBottom: 20,
    textAlign: 'center',
    },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 340,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    borderColor: 'rgb(144, 106, 45)',
    borderWidth: 2,
    margin: 10,
  },

  imagem: {
    width: 120,
    height: 120,
    borderRadius: 20,
    marginRight: 15,
  },

  textos: {
    flex: 1,
  },

  nome: {
    fontSize: 23,
    fontWeight: '700',
    color: 'rgb(144, 86, 45)',
    marginBottom: 10,
  },

  texto: {
    width: 200,
    fontSize: 16,
    fontWeight: 600,
  },

});