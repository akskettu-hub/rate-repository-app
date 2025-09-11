import { Picker } from "@react-native-picker/picker";
import { StyleSheet } from "react-native";
import theme from "../../theme";

const styles = StyleSheet.create({
  picker: {
    backgroundColor: theme.colors.lightGrey,
  },
});

const OrderSelector = ({ selectedOrder, setSelectedOrder }) => {
  return (
    <Picker
      style={styles.picker}
      selectedValue={selectedOrder}
      onValueChange={(itemValue) => {
        setSelectedOrder(itemValue);
      }}
    >
      <Picker.Item label="Latest repositories" value="latestDesc" />
      <Picker.Item label="Highest rated repositories" value="ratingDesc" />
      <Picker.Item label="Lowest rated repositories" value="ratingAsc" />
    </Picker>
  );
};

export default OrderSelector;
