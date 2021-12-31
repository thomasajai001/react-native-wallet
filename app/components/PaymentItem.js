import React from "react";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function PaymentItem({title,image,description,actionName,imgSize=60}) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.icon}>
        <Image
          source={image} style={{height:imgSize,width:imgSize,resizeMode:'contain'}}
        />
      </View>
      <View style={styles.text}>
        <View
          style={{
            flexDirection: "row",
            width: 280,
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.title}>{title}</Text>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>{actionName}</Text>
          </Pressable>
        </View>
        <Text style={styles.description}>
          {description}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  icon: {
    width: 40,
    height: 40,
    top: -10,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  text: {
    marginLeft: 10,
    width: 270,
  },
  title: { fontWeight: "bold", fontSize: 15 },
  description: { fontSize: 13, marginTop: 15, color: "#7c5d3b",fontWeight:"400" },
  buttonText: { fontSize: 15, fontWeight: "bold", color: "#c1164e",right:18 },
  button: {},
});
