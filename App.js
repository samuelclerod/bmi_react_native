import React from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "./src/constants";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./src/screens/Home";
import { Result } from "./src/screens/Result";

const headerScreenProps = {
  headerStyle: {
    backgroundColor: colors.purple,
  },
  headerTintColor: colors.white,
  headerTitleStyle: {
    fontWeight: "bold",
  },
};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Nome">
        <Stack.Screen
          name="Nome"
          component={Home}
          options={{ title: "Calculadora de IMC", ...headerScreenProps }}
        />
        <Stack.Screen
          name="Result"
          component={Result}
          options={{ title: "Resultado", ...headerScreenProps }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
});
