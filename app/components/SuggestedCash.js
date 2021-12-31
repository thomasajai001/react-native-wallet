import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function SuggestedCash({amount}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{"\u20B9"} {amount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f4f3f6",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 15,
    margin: 3,
  },
  text: { color: "#766c81" },
});
