import { Pressable, StyleSheet, View } from "react-native";
import RepositoryItem from "../RepositoryList/RepositoryItem";
import Text from "../Text";
import useOpenUrl from "../../hooks/useOpenUrl";
import theme from "../../theme";

const styles = StyleSheet.create({
  repoView: {
    padding: 5,
  },
  openUrl: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
    margin: 10,
    borderRadius: 6,
    padding: 10,
    alignItems: "center",
  },
});

const RepositoryInfo = ({ repository }) => {
  const openUrl = useOpenUrl();

  const onPress = () => {
    openUrl(repository.url);
  };

  return (
    <View>
      <RepositoryItem style={styles.repoView} item={repository} />
      <Pressable onPress={onPress} style={styles.openUrl}>
        <Text fontSize={"subheading"} fontWeight={"bold"} color={"white"}>
          Open in GitHub
        </Text>
      </Pressable>
    </View>
  );
};

export default RepositoryInfo;
