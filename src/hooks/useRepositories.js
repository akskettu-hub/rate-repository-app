import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = (orderArgs) => {
  const { orderBy, orderDirection } = orderArgs;
  const { data, refetch, loading, error } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    variables: { orderBy, orderDirection },
  });

  return {
    repositories: data ? data.repositories : false,
    loading,
    refetch,
    error,
  };
};

export default useRepositories;
