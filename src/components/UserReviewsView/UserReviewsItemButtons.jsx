import { Pressable, StyleSheet, View } from "react-native";
import Text from "../Text";
import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
  },
  viewButton: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
    margin: 10,
    borderRadius: 6,
    padding: 10,
    alignItems: "center",
  },
});

const UserReviewsItemButtons = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.viewButton}>
        <Text fontSize={"body"} fontWeight={"bold"} color={"white"}>
          View repository
        </Text>
      </Pressable>
      <Pressable style={styles.viewButton}>
        <Text fontSize={"body"} fontWeight={"bold"} color={"white"}>
          Delete review
        </Text>
      </Pressable>
    </View>
  );
};

export default UserReviewsItemButtons;
