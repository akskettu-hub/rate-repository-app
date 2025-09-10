import { StyleSheet, View } from "react-native";
import UserReviewsList from "./UserReviewsList";
import useUserInfo from "../../hooks/useUserInfo";
import Text from "../Text";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
  },
});

const UserReviewsView = () => {
  const { me } = useUserInfo({ includeReviews: true });
  const reviewNodes = me ? me.reviews.edges.map((edge) => edge.node) : [];

  if (me) {
    return (
      <View style={styles.container}>
        <UserReviewsList reviewNodes={reviewNodes} />
      </View>
    );
  }
  return (
    <View>
      <Text>reviews here</Text>
    </View>
  );
};

export default UserReviewsView;
