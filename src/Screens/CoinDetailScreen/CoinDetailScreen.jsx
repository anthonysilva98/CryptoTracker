import React, { useState, useEffect } from "react";
import { View, Text, Image, Dimensions, TextInput } from "react-native";
import Coin from "../../../data/crypto.json";
import styles from "./styles";
import CoinDetailHeader from "./CoinDetailHeader";
import { AntDesign } from "@expo/vector-icons";
import {
  ChartDot,
  ChartPath,
  ChartPathProvider,
  ChartYLabel,
} from "@rainbow-me/animated-charts";
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
    prices,
  } = Coin;

  const [coinValue, setCoinValue] = useState("1");
  const [usdValue, setUsdValue] = useState(current_price.usd.toString());
  const changeCoinValue = (value) => {
    setCoinValue(value);
    const floatValue = parseFloat(value.replace(",", ".")) || 0;
    setUsdValue((value * current_price.usd).toString());
  };
  const changeUsdValue = (value) => {
    setUsdValue(value);
    const floatValue = parseFloat(value.replace(",", ".")) || 0;
    setCoinValue((value / current_price.usd).toString());
  };

  const chartColor = current_price.usd > prices[0][1] ? "#16c784" : "#ea4943";

  const screenWidth = Dimensions.get("window").width;

  const formatCurrency = (value) => {
    "worklet";
    if (value === "") {
      return `$${current_price.usd.toFixed(2)}`;
    }
    return `$${parseFloat(value).toFixed(2)}`;
  };
  return (
    // Coin Detail Header Section
    <View style={{ paddingHorizontal: 10, paddingTop: 20 }}>
      <ChartPathProvider
        data={{
          points: prices.map(([x, y]) => ({ x, y })),
          smoothingStrategy: "bezier",
        }}
      >
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
            <ChartYLabel format={formatCurrency} style={styles.currentPrice} />
            {/* <Text style={styles.currentPrice}>${current_price.usd}</Text> */}
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
        <View>
          <ChartPath
            strokeWidth={2}
            height={screenWidth / 2}
            stroke={chartColor}
            width={screenWidth}
          />
          <ChartDot
            style={{
              backgroundColor: chartColor,
            }}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <Text style={{ color: "white", alignSelf: "center" }}>
              {symbol.toUpperCase()}
            </Text>
            <TextInput
              style={styles.input}
              value={coinValue.toString()}
              keyboardType="numeric"
              onChangeText={changeCoinValue}
            />
          </View>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <Text style={{ color: "white", alignSelf: "center" }}>USD </Text>
            <TextInput
              style={styles.input}
              value={usdValue.toString()}
              keyboardType="numeric"
              onChangeText={changeUsdValue}
            />
          </View>
        </View>
      </ChartPathProvider>
    </View>
  );
};
export default CoinDetailScreen;
