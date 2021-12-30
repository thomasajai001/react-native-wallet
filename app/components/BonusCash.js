import React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function BonusCash() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.icon}>
        <Ionicons name="gift" size={24} color="purple" />
      </View>
      <View style={styles.text}>
        <Text>Bonus Cash</Text>
        <Text style={styles.cashAmount}>10</Text>
      </View>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Earn More</Text>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: 70,
    paddingHorizontal: 15,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 55,
    borderRadius: 10,
    height: 55,
    backgroundColor: "#f5e6f9",
    justifyContent: "center",
    alignItems: "center",
  },
  text: { marginLeft: 10 },
  cashAmount: { fontWeight: "bold", fontSize: 18 },
  buttonText: { fontSize: 15, fontWeight: "bold", color: "#c1164e" },
  button: {
    borderColor: "grey",
    borderWidth: 0.5,
    backgroundColor: "white",
    paddingHorizontal: 27,
    paddingVertical: 8,
    position: "absolute",
    right: 15,
    borderRadius: 5,
  },
});
