import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_900Black,
} from "@expo-google-fonts/poppins";

export default function TelaLogin({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={estilos.container}>
      <View style={estilos.topo}>
        <TouchableOpacity
          style={estilos.voltar}
          onPress={() => navigation.navigate("paginainicial")}
        >
          <Ionicons name="arrow-back" size={20} color="#fff" />
          <Text
            style={[estilos.textoVoltar, { fontFamily: "Poppins_400Regular" }]}
          >
            Voltar
          </Text>
        </TouchableOpacity>

        <Text
          style={[estilos.textoLoginTopo, { fontFamily: "Poppins_700Bold" }]}
        >
          Login
        </Text>
      </View>

      <View style={estilos.card}>
        <Text style={[estilos.titulo, { fontFamily: "Poppins_900Black" }]}>
          Login
        </Text>
        <Text style={[estilos.subtitulo, { fontFamily: "Poppins_400Regular" }]}>
          Entre em sua conta para continuar
        </Text>

        <Text style={[estilos.label, { fontFamily: "Poppins_700Bold" }]}>
          EMAIL
        </Text>
        <TextInput
          style={[estilos.input, { fontFamily: "Poppins_400Regular" }]}
          placeholder="Insira seu email"
          placeholderTextColor="#d8d8d8ff"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={[estilos.label, { fontFamily: "Poppins_700Bold" }]}>
          SENHA
        </Text>
        <TextInput
          style={[estilos.input, { fontFamily: "Poppins_400Regular" }]}
          placeholder="Insira sua senha"
          placeholderTextColor="#d8d8d8ff"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity style={estilos.botao}>
          <Text
            style={[estilos.textoBotao, { fontFamily: "Poppins_700Bold" }]}
          >
            ENTRAR
          </Text>
        </TouchableOpacity>

        <Text
          style={[estilos.textoCadastrar, { fontFamily: "Poppins_400Regular" }]}
        >
          Não possui conta?{" "}
          <Text
            style={[estilos.linkCadastrar, { fontFamily: "Poppins_700Bold" }]}
          >
            Cadastrar
          </Text>
        </Text>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 100,
  },
  topo: {
    backgroundColor: "#00bf63",
    width: 200,
    height: 200,
    borderRadius: 100,
    position: "absolute",
    top: -50,
    left: -60,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingBottom: 55,
    paddingRight: 55,
  },
  voltar: {
    flexDirection: "row",
    alignItems: "center",
  },
  textoVoltar: {
    color: "#fff",
    marginLeft: 5,
    fontSize: 20,
    fontWeight: "bold",
  },
  textoLoginTopo: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 3,
  },
  card: {
    flex: 1,
    backgroundColor: "#263c0e",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 80,
    padding: 25,
  },
  titulo: {
    fontSize: 40,
    fontWeight: "800",
    color: "#fff",
    textAlign: "center",
    marginBottom: 5,
  },

  subtitulo: {
    color: "#ddd",
    fontSize: 13,
    textAlign: "center",
    marginBottom: 20,
  },
  label: {
    color: "#fff",
    fontSize: 12,
    marginTop: 10,
    marginBottom: 5,
    width: "85%",   
    alignSelf: "center", 
  },

  input: {
    backgroundColor: "#849878ff",
    borderRadius: 10,
    padding: 12,
    color: "#fff",
    width: "85%",    
    alignSelf: "center",   
    marginBottom: 10,
  },
  botao: {
    backgroundColor: "#00bf63",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 25,
    width: "85%", 
    alignSelf: "center",   
  },

  textoBotao: {
    color: "#ffffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  textoCadastrar: {
    color: "#fff",
    fontSize: 13,
    textAlign: "center",
    marginTop: 20,
  },
  linkCadastrar: {
    color: "#fff",
    fontWeight: "bold",
  },
});
