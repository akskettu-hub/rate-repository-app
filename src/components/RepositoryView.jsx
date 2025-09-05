import { Pressable, StyleSheet, View } from "react-native";
import * as Linking from "expo-linking";
import Text from "./Text";
import { useParams } from "react-router-native";
import useRepository from "../hooks/useRepository";
import RepositoryItem from "./RepositoryList/RepositoryItem";
import theme from "../theme";
import useOpenUrl from "../hooks/useOpenUrl";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    // padding: 5,
  },
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
  error: {
    marginHorizontal: 10,
    color: "red",
  },
});

const RepositoryView = () => {
  const id = useParams().id;
  const { repository, loading, error } = useRepository(id);
  console.log(repository);
  const openUrl = useOpenUrl();

  const onPress = () => {
    openUrl(repository.url);
  };

  if (repository) {
    return (
      <View style={styles.container}>
        <RepositoryItem style={styles.repoView} item={repository} />
        <Pressable onPress={onPress} style={styles.openUrl}>
          <Text fontSize={"subheading"} fontWeight={"bold"} color={"white"}>
            Open in GitHub
          </Text>
        </Pressable>
      </View>
    );
  }

  if (loading) {
    return (
      <View>
        <Text>Loading repo view for {id}...</Text>
      </View>
    );
  }

  if (error) {
    console.log("error in repo view: ", error);
    return (
      <View>
        <Text>Error loading repo view for {id}...</Text>
      </View>
    );
  }
};

export default RepositoryView;
