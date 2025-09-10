import { StyleSheet, View } from "react-native";
import Text from "../Text";
import theme from "../../theme";
import formatDate from "../../utils/formatDate";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 5,
    marginVertical: 10,
  },
  ratingBlob: {
    padding: 5,
    marginHorizontal: 10,
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: theme.colors.primary,
  },
  reviewInfo: {
    flexDirection: "column",
    flexShrink: 1,
  },
});

const ReviewItem = ({ item, userReview = false }) => {
  return (
    <View style={styles.container}>
      <View style={styles.ratingBlob}>
        <Text color={"primary"} fontSize={"heading"} fontWeight={"bold"}>
          {item.rating}
        </Text>
      </View>
      <View style={styles.reviewInfo}>
        <Text fontWeight={"bold"} fontSize={"subheading"}>
          {userReview ? item.repository.fullName : item.user.username}
        </Text>
        <Text color={"textSecondary"}>{formatDate(item.createdAt)}</Text>
        <Text>{item.text}</Text>
      </View>
    </View>
  );
};

export default ReviewItem;
