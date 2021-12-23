import React from "react";
import { View, Text, Image } from "react-native";
import Coin from "../../../data/crypto.json";
import styles from "./styles";
import CoinDetailHeader from "./CoinDetailHeader";
import { AntDesign } from "@expo/vector-icons";
const CoinDetailScreen = () => {
  const percentageChange =
    price_change_percentage_24h < 0 ? "#16c784" : "#ea3943";
  const {
    image: { small },
    name,
    symbol,
    market_data: {
      market_cap_rank,
      current_price,
      price_change_percentage_24h,
    },
  } = Coin;

  return (
    // Coin Detail Header Section
    <View style={{ paddingHorizontal: 10, paddingTop: 20 }}>
      <CoinDetailHeader
        image={small}
        name={name}
        symbol={symbol}
        marketCapRank={market_cap_rank}
      />
      {/* Price Container with name Container */}
      <View style={styles.priceContainer}>
        <View>
          <Text style={{ color: "white", fontSize: 15 }}> {name}</Text>
          <Text style={styles.currentPrice}>${current_price.usd}</Text>
        </View>
        <View style={{ alignSelf: "center" }}>
          {/* Show Percentage change with container */}
          <View
            style={{
              backgroundColor: percentageChange,
              flexDirection: "row",
              padding: 5,
              borderRadius: 5,
              alignItems: "center",
            }}
          >
            <AntDesign
              name={price_change_percentage_24h < 0 ? "caretdown" : "caretup"}
              size={15}
              color={"white"}
              style={{ alignSelf: "center", marginRight: 5 }}
            />
            <Text style={styles.priceChange}>
              {price_change_percentage_24h.toFixed(2)}%
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default CoinDetailScreen;
