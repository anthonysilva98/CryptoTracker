import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.coinContainer}>
        <Image
          source={{
            uri: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
          }}
          style={{ height: 30, width: 30, marginRight: 10 }}
        />
        <View>
          <Text style={styles.title}>BitCoin</Text>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.popularityContainer}>
              <Text style={styles.popularity}>1</Text>
            </View>
            <Text style={styles.text}>BTC</Text>
            <AntDesign
              name="caretdown"
              size={15}
              color="white"
              style={{ alignSelf: "center", marginRight: 5 }}
            />
            <Text style={styles.text}>0.63%</Text>
          </View>
        </View>
        <View style={{ marginLeft: "auto" }}>
          <Text style={styles.title}>56,265.09</Text>
          <Text style={styles.text}>MCap 1.076 T</Text>
        </View>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 50,
  },
  title: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    color: "white",
    marginRight: 5,
  },
  coinContainer: {
    flexDirection: "row",
    borderBottomWidth: 0.3,
    borderBottomColor: "#282828",
    paddingTop: 15,
    marginLeft: -20,
  },
  popularity: {
    fontWeight: "bold",
    color: "white",
  },
  popularityContainer: {
    borderRadius: 5,
    backgroundColor: "#585858",
    paddingHorizontal: 5,
    marginRight: 5,
  },
});
