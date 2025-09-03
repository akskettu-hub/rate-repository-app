import { Pressable, StyleSheet } from "react-native";
import Text from "./Text";
import theme from "../theme";
import { useNavigate } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    marginRight: 15,
  },
});

const AppBarTab = ({ link, children, onPress }) => {
  const navigate = useNavigate()

  const handlePress = () => {
    console.log("pressed app bar tab", children);
    if (onPress) {
      onPress();
    }
    if (link) {
      navigate(link)
    }
  };

  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <Text color={theme.colors.white} fontWeight={"bold"} fontSize={"heading"}>
        {children}
      </Text>
    </Pressable>
  );
};

export default AppBarTab;
