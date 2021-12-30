import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Ionicons, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
export default function BottomMenu() {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Ionicons name="game-controller-outline" size={30} color="gray" />
        <Text style={{ color: "gray" }}>Play</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <FontAwesome5 name="fantasy-flight-games" size={30} color="gray" />
        <Text style={{ color: "gray" }}>Fantasy</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <MaterialIcons name="live-tv" size={30} color="gray" />
        <Text style={{ color: "gray" }}>Streams</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <Ionicons name="ios-wallet-outline" size={30} color="#29b99b" />
        <Text>Wallet</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: 70,
    position: "absolute",
    bottom: 0,
    justifyContent: "space-around",
    alignItems: "center",
  },
});
