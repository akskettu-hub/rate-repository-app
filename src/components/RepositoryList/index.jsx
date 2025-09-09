import { FlatList, View, StyleSheet, Pressable } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../../hooks/useRepositories";
import { useNavigate } from "react-router-native";
import OrderSelector from "./OrderSelector";
import { useState } from "react";
import { orderOptions } from "../../utils/orderOptions";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({
  navigate,
  repositories,
  selectedOrder,
  setSelectedOrder,
}) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      extraData={setSelectedOrder}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={
        <OrderSelector
          selectedOrder={selectedOrder}
          setSelectedOrder={setSelectedOrder}
        />
      }
      renderItem={({ item }) => (
        <Pressable onPress={() => navigate(item.id)}>
          <RepositoryItem item={item} />
        </Pressable>
      )}
    />
  );
};

const RepositoryList = () => {
  const [selectedOrder, setSelectedOrder] = useState(
    orderOptions["latestDesc"],
  );
  const orderArgs = orderOptions[selectedOrder] || orderOptions["latestDesc"];
  const { repositories } = useRepositories(orderArgs);
  const navigate = useNavigate();

  return (
    <RepositoryListContainer
      repositories={repositories}
      navigate={navigate}
      selectedOrder={selectedOrder}
      setSelectedOrder={setSelectedOrder}
    />
  );
};

export default RepositoryList;
