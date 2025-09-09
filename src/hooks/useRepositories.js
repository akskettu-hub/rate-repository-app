import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = (orderArgs, debouncedSearchQuery) => {
  const { orderBy, orderDirection } = orderArgs;
  const { data, refetch, loading, error } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    variables: { orderBy, orderDirection, searchKeyword: debouncedSearchQuery },
  });

  return {
    repositories: data ? data.repositories : false,
    loading,
    refetch,
    error,
  };
};

export default useRepositories;
