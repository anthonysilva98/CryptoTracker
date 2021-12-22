import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import CoinItem from "./src/Components/CoinItem";
import cryptoCurrencies from "./data/cryptocurrencies.json";
export default function App() {
  return (
    <View style={styles.container}>
      {/* //Renders our data from cryptoCurrencies.json into an item to pass props into */}
      <FlatList
        data={cryptoCurrencies}
        renderItem={({ item }) => <CoinItem marketCoin={item} />}
      />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 10,
    paddingTop: 30,
  },
});
