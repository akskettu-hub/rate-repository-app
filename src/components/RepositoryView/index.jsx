import { StyleSheet, View } from "react-native";
import Text from "../Text";
import { useParams } from "react-router-native";
import useRepository from "../../hooks/useRepository";
import ReviewList from "./ReviewList";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
  },
  error: {
    marginHorizontal: 10,
    color: "red",
  },
});

const RepositoryView = () => {
  const id = useParams().id;
  const { repository, loading, error } = useRepository(id);

  if (repository) {
    return (
      <View style={styles.container}>
        <ReviewList repository={repository} />
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
        <Text style={styles.error}>Error loading repo view for {id}...</Text>
      </View>
    );
  }
};

export default RepositoryView;
