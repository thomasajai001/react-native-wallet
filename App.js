import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Wallet from "./app/screens/Wallet";

export default function App() {
  return <Wallet />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
