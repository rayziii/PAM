import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#e48fabc9",
        padding: 25,
        paddingTop: 70,
    },

    titulo: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#a42f52",
    },

    subtitulo: {
        fontSize: 17,
        marginTop: 8,
        color: "#594230",
        fontWeight: "bold",
    },

    caixa: {
        backgroundColor: "white",
        padding: 18,
        borderRadius: 15,
        marginTop: 30,
    },

    caixaTexto: {
        color: "#999",
        fontSize: 16,
        marginBottom: 10,
    },

    categoriaTitulo: {
        fontSize: 23,
        fontWeight: "bold",
        marginTop: 30,
        marginBottom: 15,
        color: "#e48fabc9",
    },

    categorias: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    categoria: {
        backgroundColor: "white",
        width: 75,
        height: 80,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
    },

    listaProdutos: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
    },

    produtosTitulo: {
        fontSize: 23,
        fontWeight: "bold",
        marginTop: 30,
        marginBottom: 15,
        color: "#6B4A55",
    },

    semFavoritos: {
      textAlign: "center",
      fontSize: 17,
      color: "#6B4A55",
      marginTop: 20,
    },

    produto: {
        backgroundColor: "white",
        width: "68%",
        padding: 5,
        borderRadius: 15,
        marginBottom: 15,
        alignItems: "center",
    },

    imagem: {
        width: 150,
        height: 150,
        resizeMode: "contain",
        alignSelf: "center",
        marginBottom: 10,
    },

    nome: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#6B4A55",
        padding: 5,
    },

    categoria: {
        fontSize: 17,
        color: "#999",
        marginTop: -5,
        padding: 5,
    },

    preco: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#C8466D",
        marginTop: -10,
        padding: 5,
    },

    botao: {
        alignItems: "center",
        marginTop: 10,
        position: "relative",
        bottom: 10,
        left: 75,
    },

});

export default styles;