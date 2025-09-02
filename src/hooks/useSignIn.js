import { useMutation } from "@apollo/client";
import { GET_ACCESS_TOKEN } from "../graphql/mutations";

const useSignIn = () => {
  const [mutate, result] = useMutation(GET_ACCESS_TOKEN);

  const signIn = async ({ username, password }) => {
    // call the mutate function here with the right arguments
    const mutateResult = await mutate({ variables: { username: username, password: password } })

    return mutateResult
  };

  return [signIn, result];
};

export default useSignIn
