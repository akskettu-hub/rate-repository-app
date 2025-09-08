import { FlatList, StyleSheet, View } from "react-native";
import ReviewItem from "./ReviewItem";
import RepositoryInfo from "./RepositoryInfo";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const ReviewList = ({ repository }) => {
  const reviewNodes = repository
    ? repository.reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem item={item} />}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
    />
  );
};
export default ReviewList;
