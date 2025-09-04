import { useQuery } from "@apollo/client";
import { GET_REPOSITORY } from "../graphql/queries";

const useRepository = (id) => {
  const { data, loading, error } = useQuery(GET_REPOSITORY, {
    fetchPolicy: "cache-first",
    variables: { repositoryId: id },
  });

  return {
    repository: data?.repository ?? null,
    loading,
    error,
  };
};

export default useRepository;
