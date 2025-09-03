import { useApolloClient, useMutation } from "@apollo/client";
import { GET_ACCESS_TOKEN } from "../graphql/mutations";
import useAuthStorage from "./useAuthStorage";

const useSignIn = () => {
  const [mutate, result] = useMutation(GET_ACCESS_TOKEN);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const signIn = async ({ username, password }) => {
    const mutateResult = await mutate({
      variables: { username: username, password: password },
    });

    const token = mutateResult.data?.authenticate?.accessToken;
    await authStorage.setAccessToken(token);

    apolloClient.resetStore();

    return mutateResult;
  };

  return [signIn, result];
};

export default useSignIn;
