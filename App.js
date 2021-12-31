import { StyleSheet, Text, View } from "react-native";
import AddCash from "./app/screens/AddCash";
import PaymentScreen from "./app/screens/PaymentScreen";
import WalletScreen from "./app/screens/WalletScreen";

export default function App() {
  return (
    <View>
      {/* <WalletScreen /> */}
      {/* <AddCash /> */}
      <PaymentScreen/>
    </View>
  );
}

const styles = StyleSheet.create({});
