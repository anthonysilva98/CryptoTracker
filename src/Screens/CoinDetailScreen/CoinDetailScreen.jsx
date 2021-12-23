import React from "react";
import { View, Text, Image } from "react-native";
import Coin from "../../../data/crypto.json";
import styles from "./styles";
import CoinDetailHeader from "./CoinDetailHeader";
const CoinDetailScreen = () => {
  const {
    image: { small },
    name,
    symbol,
    market_data: { market_cap_rank },
  } = Coin;
  return (
    <View>
      <CoinDetailHeader
        image={small}
        name={name}
        symbol={symbol}
        marketCapRank={market_cap_rank}
      />
    </View>
  );
};
export default CoinDetailScreen;
