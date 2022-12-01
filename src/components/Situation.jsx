import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { getSituation } from "../utils";

export default function Situation(props) {
  const imc = props.imc || 0;

  const {
    text: situation,
    styles: { backgroundColor, color },
  } = getSituation(imc);

  const styles = StyleSheet.create({
    container: {
      backgroundColor,
      padding: 16,
      borderRadius: 8,
      margin: 16,
      width: "90%",
    },
    text: {
      color,
      fontSize: 24,
      textAlign: "center",
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{situation}</Text>
    </View>
  );
}
