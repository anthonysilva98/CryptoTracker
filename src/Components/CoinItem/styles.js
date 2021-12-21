import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
export default styles;
