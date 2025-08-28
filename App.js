import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // ícones prontos

import homeScreen from './src/screens/homeScreen';
import carrinhoCompras from './src/screens/carrinhoCompras';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'homeScreen') {
              iconName = 'home-outline';
            } else if (route.name === 'carrinhoCompras') {
              iconName = 'cart-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#2e8b57', // cor quando selecionado
          tabBarInactiveTintColor: 'gray',  // cor quando não tá selecionado
        })}
      >
        <Tab.Screen name="homeScreen" component={homeScreen} />
        <Tab.Screen name="carrinhoCompras" component={carrinhoCompras} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
