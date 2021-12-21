import React from "react";
import { View, Text, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";
const CoinItem = () => {
  return (
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
  );
};
export default CoinItem;
