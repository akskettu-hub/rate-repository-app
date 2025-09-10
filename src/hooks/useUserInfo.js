import { useQuery } from "@apollo/client";
import { GET_USER_INFO } from "../graphql/queries";

const useUserInfo = ({ includeReviews = false } = {}) => {
  const { data, loading, refetch } = useQuery(GET_USER_INFO, {
    fetchPolicy: "cache-and-network",
    variables: includeReviews === undefined ? undefined : { includeReviews },
  });

  return {
    me: data?.me,
    loading,
    refetch,
  };
};

export default useUserInfo;
