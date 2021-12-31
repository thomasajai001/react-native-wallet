import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import PaymentItem from "../components/PaymentItem";
import PaymentCard from "../components/PaymentCard";

export default function PaymentScreen() {
  return (
    <View>
      <View style={styles.PaymentOptionsHeader}>
        <MaterialIcons name="chevron-left" size={30} color="black" />
        <Text style={styles.PaymentOptionsHeaderText}>Add Deposit Cash</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.amountToAddContainer}>
          <View style={styles.amountTextContainer}>
            <Text style={styles.amountTitle}>Amount To Add</Text>
            <Text style={styles.amount}>{"\u20B9"} 199</Text>
          </View>
          <Image
            style={styles.secureImage}
            source={require("../../assets/secure.png")}
          />
        </View>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginVertical: 5 }}>
          Wallets
        </Text>
        <View style={styles.walletContainer}>
          <PaymentItem
            image={require("../../assets/paytms.png")}
            title={"Paytm Wallet"}
            description={
              "Get Upto Rs.500 cashback on 5 transactions of Rs. 49 or more using Paytm wallet"
            }
            actionName={"Link Wallet"}
          />
          <PaymentItem
            image={require("../../assets/phonepe1.png")}
            title={"PhonePe"}
            description={
              "Deposit a min of Rs. 35 & get upto Rs. 1000 cashback on your next 10 transactions through PhonePe Wallet"
            }
            actionName={"Pay"}
            imgSize={90}
          />
          <PaymentItem
            image={require("../../assets/pay1.png")}
            title={"Amazon Pay"}
            description={
              "Alert: This payment mode is experiencong a low succrss rate"
            }
            actionName={"Pay"}
            imgSize={50}
          />
        </View>
        <Text
          style={{
            marginTop: 25,
            fontSize: 18,
            fontWeight: "bold",
            marginVertical: 5,
          }}
        >
          Debit/Credit Cards
        </Text>
        <View style={styles.cards}>
          <PaymentCard title={"Add New Credit/ Debit Card"} actionName={"Add"}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  PaymentOptionsHeader: {
    backgroundColor: "white",
    paddingVertical: 40,
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
  },
  PaymentOptionsHeaderText: {
    fontSize: 19,
    fontWeight: "bold",
    marginLeft: 10,
  },
  container: {
    backgroundColor: "#f4f3f6",
    height: "100%",
    overflow: "scroll",
    padding: 15,
  },
  amountToAddContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  amountTextContainer: {},
  amountTitle: { fontSize: 14, fontWeight: "800", fontFamily: "Roboto" },
  amount: { fontSize: 26, fontWeight: "bold" },
  secureImage: { height: 100, width: 120, resizeMode: "contain" },
  walletContainer: {
    width: "100%",
    backgroundColor: "orange",
    borderRadius: 5,
    overflow: "hidden",
  },cards:{overflow:"hidden",borderRadius:5}
});
