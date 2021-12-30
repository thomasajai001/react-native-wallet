import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

export default function TotalCash() {
  return (
    <View style={styles.background}>
      <View style={styles.cashHeader}>
        <View style={styles.totalCashContainer}>
          <Text style={styles.totalCashText}>Total Cash</Text>
          <Ionicons name="information-circle-outline" size={20} color="gray" />
        </View>
        <View style={styles.transHistContainer}>
          <Text style={styles.transHistText}>Transaction History</Text>
          <EvilIcons name="chevron-right" size={24} color="gray" />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          width: 150,
        }}
      >
        <Image
          style={{ height: 40, width: 45, resizeMode: "contain" }}
          source={{
            uri: "https://mpng.subpng.com/20180807/ogb/kisspng-indian-rupee-sign-clip-art-investment-bitcoin-live-price-india-rupee-btc-to-inr-1-bi-5b693883e471c5.4025981815336224039357.jpg",
          }}
        ></Image>
        <Text style={styles.cashAmount}>1.10</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: { height: 120, padding: 15, backgroundColor: "white" },
  cashHeader: {
    alignItems: "center",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  totalCashContainer: {
    alignItems: "center",
    flexDirection: "row",
    width: 110,
    justifyContent: "space-between",
  },
  totalCashText: { fontSize: 18, fontWeight: "900" },
  transHistContainer: { alignItems: "center", flexDirection: "row" },
  transHistText: { fontSize: 13, color: "gray" },
  cashAmount: { fontSize: 30, fontWeight: "bold" },
});
