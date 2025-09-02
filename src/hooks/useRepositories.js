import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
  const { data, refetch, loading, error } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
  });

  // eslint-disable-next-line no-undef
  console.log("data in UR: ", data);

  return {
    repositories: data ? data.repositories : false,
    loading,
    refetch,
    error,
  };
};

export default useRepositories;
