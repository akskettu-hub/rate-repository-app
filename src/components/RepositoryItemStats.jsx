import { StyleSheet, View } from "react-native";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
    marginHorizontal: 30,
  },
  itemStatContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
});

const formatThousands = (n) => {
  if (n >= 1000) {
    return (n / 1000).toFixed(1) + "k";
  }
  return n;
};

const RepositoryItemStats = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.itemStatContainer}>
        <Text fontWeight={"bold"}>{formatThousands(item.stargazersCount)}</Text>
        <Text color={"textSecondary"}>Stars</Text>
      </View>

      <View style={styles.itemStatContainer}>
        <Text fontWeight={"bold"}>{formatThousands(item.forksCount)}</Text>
        <Text color={"textSecondary"}>Forks</Text>
      </View>

      <View style={styles.itemStatContainer}>
        <Text fontWeight={"bold"}>{item.reviewCount}</Text>
        <Text color={"textSecondary"}>Reviews</Text>
      </View>

      <View style={styles.itemStatContainer}>
        <Text fontWeight={"bold"}>{item.ratingAverage}</Text>
        <Text color={"textSecondary"}>Rating</Text>
      </View>
    </View>
  );
};
export default RepositoryItemStats;
