import { FlatList, StyleSheet, View } from "react-native";
import ReviewItem from "../RepositoryView/ReviewItem";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const UserReviewsList = ({ reviewNodes, refetch }) => {
  return (
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <ReviewItem item={item} userReview={true} refetch={refetch} />
      )}
    />
  );
};

export default UserReviewsList;
