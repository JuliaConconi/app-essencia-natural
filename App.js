import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

import realizarLogin from "./src/screens/realizarLogin";
import realizarCadastro from "./src/screens/realizarCadastro";
import homeScreen from "./src/screens/homeScreen";
import carrinhoCompras from "./src/screens/carrinhoCompras";
import SplashScreen from "./src/screens/SplashScreen";
import paginainicial from "./src/screens/paginainicial";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "homeScreen") {
            iconName = "home-outline";
          } else if (route.name === "carrinhoCompras") {
            iconName = "cart-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#2e8b57",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="realizarLogin"
        component={realizarLogin}
        options={{
          tabBarStyle: { display: "none" },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="realizarCadastro"
        component={realizarCadastro}
        options={{
          tabBarStyle: { display: "none" },
          headerShown: false,
        }}
      />
      <Tab.Screen name="homeScreen" component={homeScreen} />
      <Tab.Screen name="carrinhoCompras" component={carrinhoCompras} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="paginainicial" component={paginainicial} />
        <Stack.Screen name="MainTabs" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
