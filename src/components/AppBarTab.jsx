import { Pressable, StyleSheet, View } from "react-native";
import Text from "./Text";
import theme from "../theme";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    marginRight: 15,
  },
});

const AppBarTab = ({ link, children }) => {
  return (
    <View style={styles.container}>
      <Link to={link}>
        <Text
          color={theme.colors.white}
          fontWeight={"bold"}
          fontSize={"heading"}
        >
          {children}
        </Text>
      </Link>
    </View>
  );
};

export default AppBarTab;
