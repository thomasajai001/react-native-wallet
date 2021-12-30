import React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";

import { MaterialCommunityIcons ,Ionicons} from "@expo/vector-icons";
import colors from "../config/colors";
import { TouchableOpacity } from "react-native-web";

export default function DepositCash() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.icon}>
        <MaterialCommunityIcons name="bank" size={24} color="#83d0fc" />
      </View>
      <View style={styles.text}>
        <Text>Deposit Cash</Text>
        <Text style={styles.cashAmount}>{"\u20B9"}0</Text>
      </View>
      <Pressable
        style={styles.button}
        onPress={()=>console.log("hello")}
      >
        <Ionicons name="add" size={20} color="white" />
          <Text style={styles.buttonText}>Add Cash</Text>
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
    backgroundColor: "#e4f6ff",
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
    // backgroundColor: "#ea0f51",
    backgroundColor: colors.red,
    paddingHorizontal: 20,
    paddingVertical: 8,
    position: "absolute",
    right: 15,
    borderRadius: 5,
  },
});
