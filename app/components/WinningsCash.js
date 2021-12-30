import React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";

import { Foundation ,Ionicons} from "@expo/vector-icons";

export default function WinningsCash() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.icon}>
        <Foundation name="crown" size={24} color="#f5d93e" />
      </View>
      <View style={styles.text}>
        <Text>Winnings Cash</Text>
        <Text style={styles.cashAmount}>{"\u20B9"}1.10</Text>
      </View>
      <Pressable style={styles.button}>
        <Ionicons name="enter-outline" size={17} color="white" />
          <Text style={styles.buttonText}> Withdraw</Text>
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
    backgroundColor: "#fef9e0",
    justifyContent: "center",
    alignItems: "center",
  },
  text: { marginLeft: 10 },
  cashAmount: { fontWeight: "bold", fontSize: 18 },
  buttonText: { fontSize: 15, fontWeight: "500", color: "white" },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "grey",
    borderWidth: 0.5,
    backgroundColor: "#ea0f51",
    paddingHorizontal: 20,
    paddingVertical: 8,
    position: "absolute",
    right: 15,
    borderRadius: 5,
  },
});
