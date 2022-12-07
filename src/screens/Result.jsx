import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Card } from "../components/Card";
import { colors } from "../constants";
import Situation from "../components/Situation";
import history from "../storage/history";

export function Result({ navigation, route }) {
  const { imc } = route.params;

  history.getData().then((array) => {
    console.log(array);
  });

  return (
    <View style={styles.container}>
      <Card>
        <View style={styles.imcWrapper}>
          <Text style={styles.imcText}>IMC</Text>
          <Text style={styles.imcText}>{imc.toFixed(2)}</Text>
        </View>
      </Card>
      <Situation imc={imc} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  imcWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  imcText: {
    fontSize: 24,
    color: colors.white,
  },
});
