import { StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import theme from "../../theme";

const styles = StyleSheet.create({
  searchbar: {
    margin: 5,
    borderWidth: 2,
    borderRadius: 6,
    borderColor: theme.colors.lightGrey,
  },
});

const RepositorySearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <Searchbar
      style={styles.searchbar}
      placeholder="Search"
      onChangeText={setSearchQuery}
      value={searchQuery}
    />
  );
};

export default RepositorySearchBar;
