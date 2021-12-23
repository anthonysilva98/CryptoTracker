import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import HomeScreen from "./src/Screens/HomeScreen";
export default function App() {
  return (
    <View style={styles.container}>
      {/* //Renders our data from cryptoCurrencies.json into an item to pass props into */}
      <HomeScreen></HomeScreen>
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
