import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BonusCash from "../components/BonusCash";
import BottomMenu from "../components/BottomMenu";
import DepositCash from "../components/DepositCash";
import OfferItem from "../components/OfferItem";
import TotalCash from "../components/TotalCash";
import WinningsCash from "../components/WinningsCash";

export default function WalletScreen() {
  return (
    <View style={styles.background}>
      <View style={styles.walletHeader}>
        <Text style={styles.headerText}>WALLET</Text>
      </View>
      <View style={styles.cashContainer}>
        <TotalCash />
        <DepositCash />
        <WinningsCash />
      </View>
      <View style={styles.bonusCashContainer}>
        <BonusCash></BonusCash>
      </View>
      <View style={styles.offersTextContainer}>
        <Text>Offers</Text>
      </View>
      <View style={styles.offersContainer}>
        <OfferItem
          title={"Tickets"}
          description={"Use Tickets and play for FREE"}
          icon={"ticket"}
        />
        <OfferItem
          title={"Coupons"}
          description={"Use coupons on deposit and earn cashback"}
          icon={"ticket-confirmation"}
        />
        <OfferItem
          title={"Scratch Cards"}
          description={"Scratch and get rewards"}
          icon={"cards"}
        />
      </View>
      <BottomMenu></BottomMenu>
    </View>
  );
}

const styles = StyleSheet.create({
  background: { backgroundColor: "#f5f3f7", height: "100%", width: "100%" },
  walletHeader: {
    height: 90,
    backgroundColor: "white",
    justifyContent: "flex-end",
    padding: 15,
  },
  headerText: { fontSize: 22, fontWeight: "bold" },
  cashContainer: {
    overflow: "hidden",
    margin: 15,
    borderRadius: 5,
  },

  bonusCashContainer: {
    borderRadius: 5,
    overflow: "hidden",
    marginHorizontal: 15,
    height: 70,
    backgroundColor: "orange",
  },
  offersTextContainer: {
    height: 60,
    justifyContent: "flex-end",
    marginHorizontal: 15,
    paddingBottom: 10,
  },
  offersContainer: {
    marginHorizontal: 15,
    borderRadius: 5,
    overflow: "hidden",
  },
  bottomMenu: {
    height: 60,
    backgroundColor: "red",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});
