import React, { useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function SplashScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* LOGO */}
      <Image
        source={require("../assets/logo_essencianatural_semfundo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* TEXTO */}
      <Text style={styles.title}>Bem vindo</Text>
      <Text style={styles.subtitle}>Encontre seu cosmético aqui</Text>

      {/* PARTE VERDE COM BOTÕES */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.replace("MainTabs")}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => alert("Cadastrar clicado!")}
        >
          <Text style={styles.registerText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 80,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1a4d20", // verde escuro
  },
  subtitle: {
    fontSize: 16,
    color: "#1a4d20",
    marginBottom: 40,
  },
  bottomContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#1a4d20",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 30,
    alignItems: "center",
  },
  loginButton: {
    backgroundColor: "#2ecc71",
    width: "80%",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 15,
  },
  loginText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  registerButton: {
    borderWidth: 2,
    borderColor: "#2ecc71",
    width: "80%",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  registerText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});