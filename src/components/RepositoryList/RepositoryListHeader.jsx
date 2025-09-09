import { View } from "react-native";
import OrderSelector from "./OrderSelector";
import RepositorySearchBar from "./RepositorySearchBar";

const RepositoryListHeader = ({
  selectedOrder,
  setSelectedOrder,
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <View>
      <RepositorySearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <OrderSelector
        selectedOrder={selectedOrder}
        setSelectedOrder={setSelectedOrder}
      />
    </View>
  );
};

export default RepositoryListHeader;
