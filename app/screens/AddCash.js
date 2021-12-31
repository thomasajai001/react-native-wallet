import React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { TextInput } from "react-native-paper";

import SuggestedCash from "../components/SuggestedCash";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../config/colors";

export default function AddCash() {
  return (
    <View style={styles.container}>
      <View style={styles.addCashHeader}>
        <MaterialIcons name="chevron-left" size={30} color="black" />
        <Text style={styles.addCashHeaderText}>Add Deposit Cash</Text>
      </View>
      <View style={styles.totalCashContainer}>
        <Text style={styles.totalCashContainerText}>Total Cash</Text>
        <Image
          style={{
            height: 15,
            width: 15,
            resizeMode: "contain",
            marginHorizontal: 5,
          }}
          source={{
            uri: "https://mpng.subpng.com/20180807/ogb/kisspng-indian-rupee-sign-clip-art-investment-bitcoin-live-price-india-rupee-btc-to-inr-1-bi-5b693883e471c5.4025981815336224039357.jpg",
          }}
        />
        <Text style={styles.totalCashContainerAmount}>1.10</Text>
      </View>
      <View style={styles.enterAmount}>
        <TextInput mode="outlined" label={"Enter amount"} />
      </View>
      <View style={styles.amountSuggestions}>
        <SuggestedCash amount={"2,000"} />
        <SuggestedCash amount={"1,000"} />
        <SuggestedCash amount={"500"} />
        <SuggestedCash amount={"100"} />
      </View>
      <Pressable style={styles.addCashButton}>
        <Text style={styles.buttonText}>Proceed To Add Cash</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#fefffe", padding: 15 },
  addCashHeader: {
    // backgroundColor: "orange",
    paddingVertical: 30,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: 190,
  },
  addCashHeaderText: { fontSize: 19, fontWeight: "bold" },
  totalCashContainer: {
    // backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  totalCashContainerText: { fontSize: 16, color: "#5f546a" },
  totalCashContainerAmount: { fontWeight: "bold", fontSize: 17 },
  enterAmount: { height: 80, marginVertical: 10 },
  amountSuggestions: {
    flexDirection: "row",
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  addCashButton: {
    backgroundColor: colors.red,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    padding: 15,
    borderRadius: 5,
  },
  buttonText: { color: "white", fontSize: 18 },
});
