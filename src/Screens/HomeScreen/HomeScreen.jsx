import React from "react";
import { FlatList } from "react-native";
import cryptoCurrencies from "../../../data/cryptocurrencies.json";
import CoinItem from "../../Components/CoinItem";

const HomeScreen = () => {
  return (
    <FlatList
      data={cryptoCurrencies}
      renderItem={({ item }) => <CoinItem marketCoin={item} />}
    />
  );
};

export default HomeScreen;
