import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import AppBarTab from "./AppBarTab";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 15,
    flexDirection: "row",
    display: "flex",
    paddingHorizontal: 10,
    paddingBottom: 15,
    backgroundColor: theme.colors.grey,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab link={"/"}>Repositories</AppBarTab>
      <AppBarTab link={"signIn"}>Sign In</AppBarTab>
    </View>
  );
};

export default AppBar;
