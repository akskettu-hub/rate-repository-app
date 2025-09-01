import { View, StyleSheet } from "react-native";
import RepositoryItemHeader from "./RepositoryItemHeader";
import RepositoryItemStats from "./RepositoryItemStats";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    display: "flex",
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <RepositoryItemHeader item={item} />
      <RepositoryItemStats item={item} />
    </View>
  );
};

export default RepositoryItem;
