import { useQuery } from "@apollo/client";
import { GET_USER_INFO } from "../graphql/queries";

const useUserInfo = () => {
  const { data, loading, refetch } = useQuery(GET_USER_INFO);

  return {
    me: data?.me,
    loading,
    refetch,
  };
};

export default useUserInfo;
