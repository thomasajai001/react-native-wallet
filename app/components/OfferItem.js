import React, { Component } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";

import { MaterialCommunityIcons, EvilIcons } from "@expo/vector-icons";
export default function OfferItem({ title, description, icon }) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.icon}>
        <MaterialCommunityIcons name={icon} size={24} color="#945816" />
      </View>
      <View style={styles.textandarrowcontainer}>
        <View style={styles.textContainer}>
          <Text>{title}</Text>
          <Text style={styles.descriptionText}>{description}</Text>
        </View>
        <EvilIcons name="chevron-right" size={24} color="black" />
      </View>
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
    backgroundColor: "#fff5e7",
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: { marginLeft: 5 },
  descriptionText: { fontSize: 12, color: "gray" },
  textandarrowcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "88%",
  },
});
