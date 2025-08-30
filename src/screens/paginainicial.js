import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_900Black,
} from "@expo-google-fonts/poppins";

export default function SplashScreen({ navigation }) {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logo_essencianatural_semfundo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={[styles.title, { fontFamily: "Poppins_700Bold" }]}>
        Bem vindo
      </Text>
      <Text style={[styles.subtitle, { fontFamily: "Poppins_400Regular" }]}>
        Encontre seu cosmético aqui
      </Text>

      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.replace("MainTabs")}
        >
          <Text style={[styles.loginText, { fontFamily: "Poppins_700Bold" }]}>
            Login
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => alert("Cadastrar clicado!")}
        >
          <Text style={[styles.registerText, { fontFamily: "Poppins_700Bold" }]}>
            Cadastrar
          </Text>
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
    width: 230,
    height: 230,
    marginBottom: 30,
    marginTop: 20,
  },
  title: {
    fontSize: 30,
    color: "#416a14",
  },
  subtitle: {
    fontSize: 20,
    color: "#416a14",
    marginBottom: 40,
  },
  bottomContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "40%",
    backgroundColor: "#263c0e",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
  },

  loginButton: {
    backgroundColor: "#00bf63",
    width: "80%",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 15,
  },
  loginText: {
    color: "#fff",
    fontSize: 18,
  },
  registerButton: {
    borderWidth: 2,
    borderColor: "#00bf63",
    width: "80%",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  registerText: {
    color: "#fff",
    fontSize: 18,
  },
});
