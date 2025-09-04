import { View } from "react-native";
import Text from "./Text";
import { useParams } from "react-router-native";
import useRepository from "../hooks/useRepository";
import RepositoryItem from "./RepositoryList/RepositoryItem";

const RepositoryView = () => {
  const id = useParams().id;
  const { repository, loading, error } = useRepository(id);
  console.log(repository);

  // TODO: implement link button to git hub repo

  if (repository) {
    return (
      <View>
        <RepositoryItem item={repository} />
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
