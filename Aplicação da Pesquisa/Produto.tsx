import { View, Text, TouchableOpacity, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import styles from "./styles";


// uso de typescript (extensão do js que permite tipagem)
type Props = {
    imagem: any;
    nome: string;
    categoria: string;
    preco: string;
    favorito: boolean;
    setFavorito: () => void;
};

// produto --> app
export default function Produto(props: Props) {

    const [favorito, setFavorito] = useState(false);

    return (
        <View style={styles.produto}>

            <Image source={props.imagem} style={styles.imagem} />

            <Text style={styles.nome}>
                {props.nome}
            </Text>

            <Text style={styles.categoria}>
                {props.categoria}
            </Text>

            <Text style={styles.preco}>
                R$ {props.preco}
            </Text>

            <TouchableOpacity
                style={styles.botao}
                onPress={props.setFavorito}
            >
                <FontAwesome
                    name={props.favorito ? "star" : "star-o"}
                    size={45}
                    color="#FFD700"
                />
            </TouchableOpacity>

        </View>
    );
}
