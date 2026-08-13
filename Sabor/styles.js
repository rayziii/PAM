import { StyleSheet, StatusBar } from 'react-native';
import colors from "./colors";

export const styles = StyleSheet.create({ 
  fundo: {
    flex: 1,
    backgroundColor: colors.rosa,
  },

  navbar: {
    width: "100%",
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    backgroundColor: colors.amarelo,
    paddingHorizontal: 15,
  },

  logoNavbar: {
    marginLeft: "auto",
    width: 160,
    height: 60,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,

  },

  rodape: {
    width: "100%",
    height: 150,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.verde,
    paddingHorizontal: 15,
    marginTop: "auto",
  },

  logoRodape: {
    width: 130,
    height: 130,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,

  },

  botaoRodape: {
    width: 60,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.marrom,
    marginLeft: 20,
    borderRadius: 10,
    
  },

  textoBotao: {
    color: colors.rosa,
    fontSize: 16,
    fontWeight: 800,
    textShadowColor: colors.escuro,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
  
  // ----------------------------------------------------------------------------------------------------------------------------
  // PAGINAS DE "SOBRE NÓS"

  conteudoSobre: {
    flex: 1,
    backgroundColor: colors.rosa,
  },

  scrollSobre: {
    flexGrow: 1,
    paddingVertical: 25,
    paddingHorizontal: 20,
    alignItems: "center",
    paddingBottom: 50,
  },

  cardSobre: {
    width: "100%",
    maxWidth: 700,

    backgroundColor: colors.amarelo,

    borderRadius: 20,

    paddingHorizontal: 25,
    paddingVertical: 25,

    shadowColor: colors.escuro,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,

    elevation: 4,
  },

  tituloSobre: {
    textAlign: "center",

    fontSize: 32,
    fontWeight: "900",

    color: colors.escuro,
  },

  linhaSobre: {
    width: 100,
    height: 4,

    backgroundColor: colors.rosa,

    borderRadius: 10,

    alignSelf: "center",

    marginTop: 10,
    marginBottom: 20,
  },

  subtituloSobre: {

    fontSize: 22,
    fontWeight: "800",

    color: colors.escuro,

    marginTop: 12,
    marginBottom: 8,
  },

  textoSobre: {
    fontSize: 16,
    lineHeight: 25,

    color: colors.escuro,
    textAlign: "justify",

    marginBottom: 10,
  },

  valoresSobre: {
    flexDirection: "row",

    justifyContent: "space-between",
    marginTop: 10,

    gap: 10,
  },

  caixaValor: {
    flex: 1,

    backgroundColor: colors.verde,
    borderRadius: 12,

    padding: 12,
    alignItems: "center",

    minHeight: 120,
    justifyContent: "center",
  },

  tituloValor: {
    fontSize: 15,
    fontWeight: "bold",

    color: colors.escuro,
    marginTop: 5,
  },

  textoValor: {
    fontSize: 12,
    color: colors.escuro,
    textAlign: "center",
    marginTop: 3,
  },

  // ---------------------------------------------
  // "PAGINA DEV" 
  // ---------------------------------------------

  conteudoDevs: {
    flex: 1,
    backgroundColor: colors.rosa,
  },

  scrollDevs: {
    paddingVertical: 25,
    paddingHorizontal: 20,
    alignItems: "center",
  },

  cardDevs: {
    width: "100%",
    maxWidth: 700,

    backgroundColor: colors.amarelo,
    borderRadius: 20,

    paddingHorizontal: 25,
    paddingVertical: 30,

    shadowColor: colors.escuro,
    shadowOffset: {
      width: 0,
      height: 3,
    },

    shadowOpacity: 0.2,
    shadowRadius: 5,

    elevation: 4,
  },

  fotoDev: {
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode: "cover",
  },

  tituloDevs: {
    textAlign: "center",
    fontSize: 32,
    fontWeight: "900",
    color: colors.escuro,
  },

  linhaDevs: {
    width: 100,
    height: 4,

    backgroundColor: colors.rosa,
    borderRadius: 10,
    alignSelf: "center",

    marginTop: 10,
    marginBottom: 20,
  },

  textoIntroducaoDevs: {
    fontSize: 16,
    lineHeight: 25,

    color: colors.escuro,
    textAlign: "center",

    marginBottom: 20,
  },

  devBox: {
    width: "100%",
    minHeight: 120,

    backgroundColor: colors.verde,
    borderRadius: 15,

    flexDirection: "row",
    alignItems: "center",

    paddingHorizontal: 20,
    marginBottom: 12,
  },

  devInfo: {
    marginLeft: 18,
    flex: 1,
  },

  nomeDev: {
    fontSize: 18,
    fontWeight: "900",

    color: colors.escuro,
  },

  funcaoDev: {
    fontSize: 14,
    color: colors.escuro,
    marginTop: 3,
  },

  creditosDevs: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "900",

    color: colors.escuro,
    marginTop: 20,
  },

  creditosSub: {
    textAlign: "center",
    fontSize: 13,

    color: colors.escuro,
    marginTop: 5,
  },

  
});
